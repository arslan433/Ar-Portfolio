"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Link from "next/link";
import { Eye, Github } from "lucide-react";
import { motion } from "framer-motion";

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsDisplay({ sort = "desc" }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, "projects"),
            orderBy("createdAt", sort)
        );

        const unsub = onSnapshot(q, (snapshot) => {
            setProjects(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
            setLoading(false);
        });

        return () => unsub();
    }, [sort]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="pt-28 pb-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl max-sm:text-4xl font-bold tracking-tight mb-4">
                        Featured Projects
                    </h1>

                    <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        A collection of projects built throughout my development
                        journey. These include personal projects, freelance work,
                        practice applications, and professional solutions built
                        using modern technologies like Next.js, React, Laravel,
                        Firebase, and more.
                    </p>

                    <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                        Want to see more?
                        <Link
                            href="https://github.com/arslan433"
                            target="_blank"
                            className="font-semibold ml-2 hover:underline"
                        >
                            Visit my GitHub
                        </Link>
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {projects.length === 0 ? (
                        <p className="text-center py-10">
                            No projects found.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((p, index) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="group h-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-7 flex flex-col h-full">
                                        {/* Title */}
                                        <h2 className="text-2xl font-bold mb-4">
                                            {p.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
                                            {p.description}
                                        </p>

                                        {/* Tech Stack */}
                                        {p.stack && (
                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {p.stack
                                                    .split(",")
                                                    .map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05]"
                                                        >
                                                            {tech.trim()}
                                                        </span>
                                                    ))}
                                            </div>
                                        )}

                                        {/* Buttons */}
                                        <div className="flex gap-3 mt-8">
                                            {p.github && (
                                                <Link
                                                    href={p.github}
                                                    target="_blank"
                                                    className="flex-1"
                                                >
                                                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                                                        <Github size={18} />
                                                        GitHub
                                                    </button>
                                                </Link>
                                            )}

                                            {p.live && (
                                                <Link
                                                    href={p.live}
                                                    target="_blank"
                                                    className="flex-1"
                                                >
                                                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all">
                                                        <Eye size={18} />
                                                        Live Demo
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}