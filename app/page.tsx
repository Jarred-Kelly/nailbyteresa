import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
