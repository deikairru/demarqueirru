import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import Review from "@/components/sections/Review";
import Tape from "@/components/sections/Tape";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
      <Tape />
      <Review />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
