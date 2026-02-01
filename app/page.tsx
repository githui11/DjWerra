import { HeroSection } from "@/components/ui/hero-odyssey";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <HeroSection />
      <Gallery />
    </main>
  );
}
