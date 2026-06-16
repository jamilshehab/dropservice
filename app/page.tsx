import Image from "next/image";
import HeroBanner from "./sections/HeroBanner";
import WhyUs from "./sections/WhyChooseUs";
import ServiceComponent from "./components/common/ServiceComponent";
import CTA from "./sections/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <WhyUs />
      <ServiceComponent />
      <CTA />
    </main>
  );
}
