import Link from "next/link";

const projects = [
  {
    slug: "neuroflow-studio",
    title: "NeuroFlow Studio",
    description:
      "Modern AI business website with responsive design and animations.",
    image: "/neuroflow.png",
    live: "https://neuroflow-studio.netlify.app/",
    github: "https://github.com/muntakindev/neuroflow-studio",
    technologies: ["Next.js", "Tailwind CSS", "React"],
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with Next.js and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    live: "https://muntakin-portfolio.vercel.app",
    github: "https://github.com/muntakindev/portfolio",
    technologies: ["Next.js", "Tailwind CSS"],
  },
];

export default function ProjectPage({
  params,
}: any) {

  const slug = params?.slug;

const project = projects.find(
  (p: any) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Project not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-10 border border-white px-5 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          ← Back
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl mb-10 w-full"
        />

        <h1 className="text-5xl font-bold mb-8">
          {project.title}
        </h1>

        <p className="text-gray-400 text-xl leading-9 mb-10">
          {project.description}
        </p>

        <div className="flex gap-4 flex-wrap mb-12">

          {project.technologies.map((tech: any) => (
            <div
              key={tech}
              className="border border-gray-700 px-5 py-2 rounded-full"
            >
              {tech}
            </div>
          ))}

        </div>

        <div className="flex gap-5 flex-wrap">

          <a
            href={project.github}
            target="_blank"
            className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-300 transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </main>
  );
}