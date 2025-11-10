"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "NextTech Solutions",
        role: "Laravel & Next.js Developer",
        duration: "May 2025 - Present",
        location: "Rawalpindi, Pakistan",
        description:
            "Develop and maintain full-stack web applications using Laravel and Next.js. Focus on building responsive frontends, secure backends, and integrating APIs for better performance.",
        status: true,
    },
    {
        company: "Self Learning",
        role: "Full Stack Developer (Learning Phase)",
        duration: "2023 - 2025",
        location: "Remote",
        description:
            "Focused on learning full-stack web development, including React.js, Laravel, and WordPress. Practiced building real-world projects to strengthen frontend and backend skills.",
        status: false,
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
