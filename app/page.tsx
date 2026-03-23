import Features from "@/components/features";
import Hero from "@/components/hero";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <Hero/>
        <Tabs />
        <Features />
      </main>
    </div>
  );
}
