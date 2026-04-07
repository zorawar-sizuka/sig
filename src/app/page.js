import ContactSection from "@/components/Contact";
import Founder from "@/components/Hero-Comp/CEO";
import ContactRequest from "@/components/Hero-Comp/Contact";
import CTA from "@/components/Hero-Comp/CTA";
import DestinationsCluster from "@/components/Hero-Comp/DestinationCluster";
import Footer from "@/components/Hero-Comp/Footer";
import Hero from "@/components/Hero-Comp/Hero";
import HeroRefined from "@/components/Hero-Comp/Hero2";
import LogoMarquee from "@/components/Hero-Comp/Marquee";
import Process from "@/components/Hero-Comp/Process";
import ServicesSection from "@/components/Hero-Comp/Services";
import Testimonials from "@/components/Hero-Comp/Testimonials";
import ImpactSection from "@/components/Hero-Comp/Whyus";


export default function Home() {
  return (
    <main>
      <Hero/>
      <div className="block md:hidden w-100vw relative left-1/2 -translate-x-1/2 my-10 bg-white">
        <LogoMarquee originalColor={true} />
      </div>
      <HeroRefined/>
      <DestinationsCluster/>
      <Process/>
      <ServicesSection/>
      <ImpactSection/>
      <Founder/>
      <Testimonials/>
      <CTA/>
      <ContactRequest/>
    
    </main>
  );
}
