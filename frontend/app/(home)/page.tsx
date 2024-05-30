import Approach from "@/components/home/Approach";
import HeroSection from "@/components/home/HeroSection";
import Partnership from "@/components/home/Partnership";


export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
      <Partnership />
      <Approach />
    </main>
  );
}
