export default function TechStack() {
  const stack = {
    Frontend: [ "HTML", "CSS", "Javascript","TypeScript", "React.js", "Next.js", "Vue.js", "Zustand", "Redux","Node mailer"],
    Backend: [ "Laravel" ,"PHP"],
    Database: ["MySQL", "SQLite", "Firebase"],
    UI: ["Tailwind CSS","Bootstrap", "shadcn/ui","uiverse.io", "Framer Motion", "Lucide", "High Charts.js"],
    Tools: ["Git", "GitHub", "Bit Buket","File Zila", "PHP storm", "Postman", "Wordpress", "Elementor" ,"Photoshop"],

  };

  return (
    <section className="p-4 max-w-4xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h3 className="text-lg font-semibold">{category}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <div
                  key={tech}
                  className="bg-white/15 px-4 py-1 rounded-sm "
                  id="bgchange"
                >
                  <p className="font-[700] tracking-tighter uppercase text-xs font-sans ">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
