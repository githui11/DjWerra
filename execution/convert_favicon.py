"""
Convert an image to favicon.ico format for the DJ Werra website.
Generates multiple sizes for best browser compatibility.
"""

import sys
from PIL import Image

def convert_to_favicon(input_path: str, output_path: str):
    """Convert an image to .ico format with multiple sizes."""
    img = Image.open(input_path)
    
    # Convert to RGBA if necessary
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Standard favicon sizes
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    
    # Resize image to each size
    icons = []
    for size in sizes:
        resized = img.copy()
        resized.thumbnail(size, Image.Resampling.LANCZOS)
        # Create a new square image with the exact size
        square = Image.new('RGBA', size, (0, 0, 0, 0))
        # Paste centered
        offset = ((size[0] - resized.width) // 2, (size[1] - resized.height) // 2)
        square.paste(resized, offset)
        icons.append(square)
    
    # Save as ICO with all sizes
    icons[0].save(output_path, format='ICO', sizes=[(s[0], s[1]) for s in sizes], append_images=icons[1:])
    print(f"✅ Favicon saved to: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_favicon.py <input_image> <output_ico>")
        sys.exit(1)
    
    convert_to_favicon(sys.argv[1], sys.argv[2])
