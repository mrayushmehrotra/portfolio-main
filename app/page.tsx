import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/sub/Experience";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      <StarsCanvas />
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
