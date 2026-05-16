import Link from "next/link";

export default function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Firebase",
    "GitHub",
  ];

  // PROJECTS ARRAY
  const projects = [
    {
      title: "NeuroFlow Studio",
      slug: "neuroflow-studio",
      description:
        "Modern AI business website with responsive design and animations.",
      image: "/neuroflow.png",
      live: "https://neuroflow-studio.netlify.app",
    },

    {
      title: "LuxeStyle Finder",
      slug: "luxestyle-finder",
      description:
        "Elegant luxury fashion discovery platform with premium UI and responsive shopping experience.",
      image: "/luxuryfinder.png",
      live: "https://luxury-style-finder--robiuzzaman5.replit.app/",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-900 z-50">

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Muntakin
          </h1>

          <div className="flex gap-6 text-base font-medium">

            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-gray-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      <main className="bg-black text-white min-h-screen relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-3xl rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative z-10">

          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Hi, I'm Muntakin
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl leading-relaxed">
            Full Stack Web Developer focused on building modern,
            responsive, and high-performance websites.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap justify-center">

            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

          </div>

        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-32 px-6 max-w-6xl mx-auto relative z-10"
        >

          <h2 className="text-5xl font-bold mb-10">
            About Me
          </h2>

          <p className="text-gray-400 text-xl leading-9 max-w-4xl">
            I build modern web experiences using the latest technologies.
            My focus is creating clean, responsive, and user-friendly
            websites for businesses, startups, and individuals.
          </p>

        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-32 px-6 max-w-6xl mx-auto relative z-10"
        >

          <h2 className="text-5xl font-bold mb-14">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-gray-800 bg-zinc-950/50 p-8 rounded-2xl text-center text-lg hover:border-white hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                {skill}
              </div>
            ))}

          </div>

        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-32 px-6 max-w-6xl mx-auto relative z-10"
        >

          <h2 className="text-5xl font-bold mb-14">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project) => (

              <a
                key={project.slug}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >

                <div className="border border-gray-800 bg-zinc-950/50 p-8 rounded-2xl hover:border-white hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-6"
                  />

                  <h3 className="text-3xl font-semibold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-8">
                    {project.description}
                  </p>

                </div>

              </a>

            ))}

          </div>

        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-32 px-6 max-w-6xl mx-auto text-center relative z-10"
        >

          <h2 className="text-5xl font-bold mb-8">
            Contact
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Let's work together on your next project.
          </p>

          <a
            href="mailto:takinmun@gmail.com"
            className="inline-block px-10 py-5 bg-white text-black rounded-full font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300"
          >
            Email Me
          </a>

        </section>

      </main>
    </>
  );
}