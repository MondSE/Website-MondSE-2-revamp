import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Techstack from "@/components/Techstack/Techstack";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import 'boxicons/css/boxicons.min.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Techstack />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
