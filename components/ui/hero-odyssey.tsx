"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ElasticHueSliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
}

const ElasticHueSlider: React.FC<ElasticHueSliderProps> = ({
    value,
    onChange,
    min = 0,
    max = 360,
    step = 1,
    label = "Adjust Hue",
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const progress = (value - min) / (max - min);
    const thumbPosition = progress * 100; // Percentage

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
        <div
            className="scale-50 relative w-full max-w-xs flex flex-col items-center"
            ref={sliderRef}
        >
            {label && (
                <label htmlFor="hue-slider-native" className="text-gray-300 text-sm mb-1">
                    {label}
                </label>
            )}
            <div className="relative w-full h-5 flex items-center">
                {/* Wrapper for track and thumb */}
                {/* Native input: Handles interaction, but visually hidden */}
                <input
                    id="hue-slider-native"
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    // Style to make it cover the custom track but be transparent
                    className="absolute inset-0 w-full h-full appearance-none bg-transparent cursor-pointer z-20"
                    style={{ WebkitAppearance: "none" /* For Safari */ }}
                />

                {/* Custom Track */}
                <div className="absolute left-0 w-full h-1 bg-gray-700 rounded-full z-0"></div>

                {/* Custom Fill (Optional but nice visual) */}
                <div
                    className="absolute left-0 h-1 bg-blue-500 rounded-full z-10"
                    style={{ width: `${thumbPosition}%` }}
                ></div>

                {/* Custom Thumb (Animated) */}
                <motion.div
                    className="absolute top-1/2 transform -translate-y-1/2 z-30 pointer-events-none"
                    style={{ left: `${thumbPosition}%` }}
                    // Animate scale based on dragging state
                    animate={{ scale: isDragging ? 1.2 : 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: isDragging ? 20 : 30,
                    }}
                >
                    <div className="w-4 h-4 bg-white rounded-full shadow-md" />
                </motion.div>
            </div>

            {/* Optional: Display current value below */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={value} // Key changes when value changes, triggering exit/enter
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-gray-500 mt-2"
                >
                    {value}°
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

interface FeatureItemProps {
    name: string;
    value: string;
    position: string;
}

interface LightningProps {
    hue?: number;
    xOffset?: number;
    speed?: number;
    intensity?: number;
    size?: number;
}

const Lightning: React.FC<LightningProps> = ({
    hue = 230,
    xOffset = 0,
    speed = 1,
    intensity = 1,
    size = 1,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

        const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      // Convert HSV to RGB.
      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          // Normalized pixel coordinates.
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          // Apply horizontal offset.
          uv.x += uXOffset;
          
          // Adjust uv based on size and animate with speed.
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          // Compute base color using hue.
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          // Compute color with intensity and speed affecting time.
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

        const compileShader = (
            source: string,
            type: number
        ): WebGLShader | null => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compile error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(
            fragmentShaderSource,
            gl.FRAGMENT_SHADER
        );
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program linking error:", gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);

        const vertices = new Float32Array([
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
            1,
        ]);
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const aPosition = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
        const iTimeLocation = gl.getUniformLocation(program, "iTime");
        const uHueLocation = gl.getUniformLocation(program, "uHue");
        const uXOffsetLocation = gl.getUniformLocation(program, "uXOffset");
        const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
        const uIntensityLocation = gl.getUniformLocation(program, "uIntensity");
        const uSizeLocation = gl.getUniformLocation(program, "uSize");

        const startTime = performance.now();
        const render = () => {
            resizeCanvas();
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
            const currentTime = performance.now();
            gl.uniform1f(iTimeLocation, (currentTime - startTime) / 1000.0);
            gl.uniform1f(uHueLocation, hue);
            gl.uniform1f(uXOffsetLocation, xOffset);
            gl.uniform1f(uSpeedLocation, speed);
            gl.uniform1f(uIntensityLocation, intensity);
            gl.uniform1f(uSizeLocation, size);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [hue, xOffset, speed, intensity, size]);

    return <canvas ref={canvasRef} className="w-full h-full relative" />;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
    return (
        <div
            className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}
        >
            <div className="flex items-center gap-2 relative">
                {/* Dot with constant glow */}
                <div className="relative">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
                    <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className=" text-white relative">
                    <div className="font-medium group-hover:text-white transition-colors duration-300">
                        {name}
                    </div>
                    <div className="text-white/70 text-sm group-hover:text-white/70 transition-colors duration-300">
                        {value}
                    </div>
                    {/* Constant white glow that intensifies on hover */}
                    <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
            </div>
        </div>
    );
};

export const HeroSection: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // State for the lightning hue
    const [lightningHue, setLightningHue] = useState(220); // Default hue

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="relative w-full bg-black text-white overflow-hidden">
            {/* Main container with space for content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen">
                {/* Navigation */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="px-4 backdrop-blur-3xl bg-black/50 rounded-full py-4 flex justify-between items-center mb-12 border border-white/10"
                >
                    <div className="flex items-center">
                        <div className="text-2xl font-bold">
                            <Image
                                src="/assets/logo.jpeg"
                                alt="DJ Werra Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden md:flex items-center space-x-6 ml-8">
                            <Link href="/" className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-sm transition-colors text-white">
                                Home
                            </Link>
                            <Link href="/videos" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                                Videos
                            </Link>
                            <Link href="/audio" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                                Audio
                            </Link>
                            <Link href="/academy" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                                Academy
                            </Link>
                            <Link href="/contact" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/promoters" className="hidden md:block px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                            For Promoters
                        </Link>
                        <Link href="/contact" className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-sm hover:bg-blue-700 transition-colors text-white font-medium">
                            Book Now
                        </Link>
                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-md focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </motion.div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
                            <button
                                className="absolute top-6 right-6 p-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <Link href="/" className="px-6 py-3 bg-gray-800/50 rounded-full text-white">
                                Home
                            </Link>
                            <Link href="/videos" className="px-6 py-3 text-gray-300">Videos</Link>
                            <Link href="/audio" className="px-6 py-3 text-gray-300">Audio</Link>
                            <Link href="/academy" className="px-6 py-3 text-gray-300">Academy</Link>
                            <Link href="/contact" className="px-6 py-3 text-gray-300">Contact</Link>
                            <Link href="/contact" className="px-6 py-3 bg-blue-600 rounded-full text-white">
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}

                {/* Main hero content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto pt-20"
                >
                    <ElasticHueSlider
                        value={lightningHue}
                        onChange={setLightningHue}
                        label="Vibe Check"
                    />

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter"
                    >
                        DJ WERRA
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-4xl pb-3 font-light text-blue-200"
                    >
                        Nairobi's Premium Gospel DJ
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-300 mb-9 max-w-2xl text-lg"
                    >
                        Elevating the atmosphere with the best in Gospel mixes. Experience the sound of inspiration.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-4 mb-8 relative z-30">
                        <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105">
                            Book Now
                        </Link>
                        <Link href="/videos" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full font-medium transition-all">
                            Watch Videos
                        </Link>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div variants={itemVariants} className="flex gap-6 mt-4">
                        <a href="https://instagram.com/dj.werra254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a href="https://tiktok.com/@dj_werra254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            {/* Custom TikTok Icon since older lucide versions might not have it, using SVG path */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                        <a href="https://x.com/djwerra254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@dj_werra254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                        </a>
                        <a href="https://hearthis.at/dj-werra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" title="Hearthis.at">
                            {/* Music Icon for Hearthis */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/assets/2.jpeg"
                    className="absolute left-0 right-0 top-24 md:top-16 bottom-0 w-full h-auto min-h-full md:h-full object-contain md:object-cover object-top opacity-95"
                >
                    <source src="/assets/chill-blue.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* Central light beam */}
                <div className="absolute top-0 w-[100%] left-1/2 transform -translate-x-1/2 h-full opacity-60">
                    <Lightning
                        hue={lightningHue}
                        xOffset={0}
                        speed={1.0}
                        intensity={0.4}
                        size={1.5}
                    />
                </div>
            </motion.div>
        </div>
    );
};
