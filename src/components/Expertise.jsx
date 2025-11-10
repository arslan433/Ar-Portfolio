"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Expertise() {
  const skills = [
    { name: "React", src: "/assets/react.webp" },
    { name: "Next.js", src: "/assets/next.webp", invert: true },
    { name: "Laravel", src: "/assets/laravel.webp" },
    { name: "Firebase", src: "/assets/firebase.webp" },
    { name: "SQL", src: "/assets/sql.webp", invert: true },
    { name: "Tailwind", src: "/assets/tailwind.webp" },
    { name: "Bootstrap", src: "/assets/bootstrap.webp" },
    { name: "WordPress", src: "/assets/wordpress.webp" },
  ];

  return (
    <section className="flex flex-col mt-20 items-center px-4">
      <div className="max-w-4xl w-full rounded-2xl   backdrop-blur-md text-center p-10">
        <motion.h3
          className="text-3xl font-semibold mb-10 tracking-wide"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expertise In
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={50}
                  height={50}
                  unoptimized
                  id={skill.invert ? "imginvert" : undefined}

                />
                <div className="absolute inset-0 rounded-full bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
              <h4 className="text-base font-medium  transition-colors">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
