"use client";

import {
  Monitor,
  Server,
  Database,
  Palette,
  Wrench,
} from "lucide-react";

export default function TechStack() {
  const stack = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Zustand",
      "Redux",
      "Nodemailer",
    ],
    Backend: ["Laravel", "PHP"],
    Database: ["MySQL", "SQLite", "Firebase"],
    UI: [
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "uiverse.io",
      "Framer Motion",
      "Lucide",
      "HighCharts.js",
    ],
    Tools: [
      "Git",
      "GitHub",
      "Bitbucket",
      "FileZilla",
      "PHPStorm",
      "Postman",
      "WordPress",
      "Elementor",
      "Photoshop",
    ],
  };

  const icons = {
    Frontend: <Monitor size={22} />,
    Backend: <Server size={22} />,
    Database: <Database size={22} />,
    UI: <Palette size={22} />,
    Tools: <Wrench size={22} />,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-5xl max-sm:text-4xl font-bold tracking-tight">
          Tech Stack
        </h2>

        <p className="mt-3 max-w-2xl">
          Technologies, frameworks, tools and platforms I use to build
          modern, scalable and high-performance web applications.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(stack).map(([category, items]) => (
          <div
            key={category}
            className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                {icons[category]}
              </div>

              <div>
                <h3 className="text-xl font-bold">{category}</h3>
                <p className="text-sm text-zinc-500">
                  {items.length} Technologies
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-4 mt-12">
        <div className="text-center rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <h4 className="text-3xl font-bold">20+</h4>
          <p className="text-sm text-zinc-500">Technologies</p>
        </div>

        <div className="text-center rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <h4 className="text-3xl font-bold">2+</h4>
          <p className="text-sm text-zinc-500">Years Experience</p>
        </div>

        <div className="text-center rounded-2xl border  border-black/10 dark:border-white/10 p-5">
          <h4 className="text-3xl font-bold">10+</h4>
          <p className="text-sm text-zinc-500">Projects Built</p>
        </div>
      </div>
    </section>
  );
}