import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Techstack from "@/components/Techstack/Techstack";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Techstack />
      <About />
    </>
  );
}
