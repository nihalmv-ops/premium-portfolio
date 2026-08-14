import JungleScene from "./components/JungleScene/JungleScene";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050805] text-stone-100">

      {/* 3D Background */}
      <JungleScene />

      {/* Content */}
      <section
        id="home"
        className="
          relative
          flex
          min-h-screen
          items-center
          px-5
          py-24

          sm:px-8
          md:px-12
          lg:px-20
          xl:px-28
        "
      >
        <div className="mx-auto w-full max-w-7xl">

          <div className="max-w-4xl">

            <p
              className="
                mb-5
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-emerald-300/70

                sm:text-sm
                sm:tracking-[0.4em]
              "
            >
              React Developer
            </p>

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                text-stone-100

                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              Enter the
              <span className="block text-emerald-300">
                Wild.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-stone-300/65

                sm:text-base
                md:text-lg
                md:leading-8
              "
            >
              I create modern digital experiences with
              React, JavaScript and thoughtful interaction
              design.
            </p>

            <div
              className="
                mt-9
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:gap-4
              "
            >
              <a
                href="#projects"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-300
                  px-7
                  text-sm
                  font-semibold
                  text-[#071009]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-300/50
                "
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-7
                  text-sm
                  font-medium
                  text-stone-100
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-300/30
                  hover:bg-emerald-300/[0.08]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-300/30
                "
              >
                Contact Me
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Temporary scroll area */}
      <section
        id="projects"
        className="
          relative
          flex
          min-h-screen
          items-center
          px-5
          py-24

          sm:px-8
          md:px-12
          lg:px-20
          xl:px-28
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/60">
            Phase 1
          </p>

          <h2 className="mt-4 text-4xl font-semibold sm:text-6xl">
            The journey begins.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-24
        "
      >
        <h2 className="text-center text-4xl font-semibold sm:text-6xl">
          Let's build something.
        </h2>
      </section>

    </main>
  );
}

export default App;