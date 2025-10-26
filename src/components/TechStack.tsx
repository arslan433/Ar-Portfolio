export default function TechStack() {
  const stack = {
    Frontend: [  "React.js", "Next.js", "Vue.js", ],
    Backend: [ "Laravel" ,"PHP", "Firebase", "Wordpress"],
    Database: ["MySQL", "SQLite"],
    UI: ["Tailwind CSS","Bootstrap", "shadcn/ui", "Framer Motion", "Lucide"],
    Tools: ["Git", "GitHub", "Bit Buket","File Zila", "PHP storm","Photoshop"],

  };

  return (
    <section className="p-6 rounded-2xl shadow-lg w-3/5 max-sm:w-[95%] mt-15">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3">{category}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <div
                  key={tech}
                  className="bg-white/15 px-3 py-1 rounded-sm"
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
