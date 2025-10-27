export default function TechStack() {
  const stack = {
    Frontend: [ "HTML", "CSS", "Javascript","TypeScript", "React.js", "Next.js", "Vue.js", "Zustand", "Redux",],
    Backend: [ "Laravel" ,"PHP", "Firebase",],
    Database: ["MySQL", "SQLite"],
    UI: ["Tailwind CSS","Bootstrap", "shadcn/ui", "Framer Motion", "Lucide", "High Charts.js"],
    Tools: ["Git", "GitHub", "Bit Buket","File Zila", "PHP storm", "Postman", "Wordpress", "Elementor" ,"Photoshop"],

  };

  return (
    <section className="p-6 rounded-2xl shadow-lg w-3/5 max-sm:w-[95%] mt-15">
      <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
      <div className="">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h3 className="text-lg font-semibold mb2">{category}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <div
                  key={tech}
                  className="bg-white/15 px-3 py-1 rounded-sm "
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
