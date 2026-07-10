import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            Home Section
          </h1>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            About
          </h1>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            Skills
          </h1>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            Projects
          </h1>
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            Experience
          </h1>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-6xl font-bold">
            Contact
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;