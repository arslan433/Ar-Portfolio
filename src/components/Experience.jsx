"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "NextTech Solutions",
        role: "Laravel & Next.js Developer",
        duration: "May 2025 - Present",
        location: "Rawalpindi, Pakistan",
        description:
            "Developing and maintaining full-stack web applications using Laravel and Next.js. Built a centralized multi-store e-commerce admin dashboard, focusing on responsive frontends, localized secure backends, and seamless API integrations.",
        status: true,
    },
    {
        company: "Self-Directed Learning",
        role: "Full Stack Developer & Exploring Generative AI",
        duration: "2023 - Present",
        location: "Remote",
        description:
            "Built a strong foundation in full-stack development using Laravel and React.js. Currently expanding my skill set into Generative AI by actively learning and experimenting with Python, LangChain, local LLMs (Ollama), and Vector Databases through hands-on practice projects.",
        status: true,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="p-4 border border-gray-500 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >

                            <span className="relative flex h-4 w-4 mt-4">
                                {exp.status ? (
                                    <>
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                                    </>
                                ) : (
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-400"></span>
                                )}
                            </span>

                            {/* Details */}
                            <div>
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="">
                                    {exp.company} · {exp.location}
                                </p>
                                <p className="text-sm text-gray-500">{exp.duration}</p>
                                <p className="mt-3 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
