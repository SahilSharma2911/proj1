import Hero from "@/components/Home/Hero";
import PinRecovery from "@/components/Home/PinRecovery";
import ProblemStatement from "@/components/Home/ProblemStatement";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <ProblemStatement />
      <PinRecovery />
    </main>
  );
}
