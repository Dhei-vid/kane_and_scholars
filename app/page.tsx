import { CallToAction } from "@/components/cta";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Sectors } from "@/components/sectors";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Founder />
      <Sectors />
      <Insights />
      <CallToAction />
    </>
  );
}
