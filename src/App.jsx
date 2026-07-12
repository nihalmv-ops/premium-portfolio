import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Services from "./components/Services/Services";
// import Projects from "./components/Projects/Projects";
// import Experience from "./components/Experience/Experience";
// import Certificates from "./components/Certificates/Certificates";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      {/* <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </main> */}
    </div>
  );
}

export default App;