import { useState } from "react";

import Background from "./components/Background/Background";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import MouseCursor from "./components/MouseCursor/MouseCursor";
import Preloader from "./components/Preloader/Preloader";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";


function App() {

  const [loading, setLoading] = useState(true);


  return (
    <>

      {/* =========================
          PRELOADER
      ========================= */}

      {loading && (
        <Preloader
          onDone={() => setLoading(false)}
        />
      )}


      {/* =========================
          MAIN PORTFOLIO
      ========================= */}

      {!loading && (
        <>

          {/* 3D Mouse Cursor */}
          <MouseCursor />


          {/* Background Animation */}
          <Background />


          {/* Mouse Following Glow */}
          <CursorGlow />


          {/* Navigation */}
          <Navbar />


          {/* Portfolio Sections */}

          <main>

            <Hero />

            <Journey />

            <Projects />

            <Technologies />

            <Contact />

          </main>

        </>
      )}

    </>
  );
}


export default App;