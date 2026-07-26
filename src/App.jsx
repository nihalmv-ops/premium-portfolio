import Background from "./components/Background/Background";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Background />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <Journey />
         <Projects />
        <Technologies /> 
        <Contact />
        
      </main>
    </>
  );
}

export default App;