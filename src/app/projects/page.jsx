"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
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
            setProjects(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);

        });
        return () => unsub();
    }, [sort]);

    if (loading) {
        return (
            <Loader />
        );
    }

    if (projects.length === 0) {
        return <p className="text-center py-10">No projects found.</p>;
    }

    return (
        <>
            <Header />
            <div className="flex-1 justify-center text-center pt-30 ">
                <h3 className="text-3xl font-bold mb-3">Projects</h3>
                <div className="justify-items-center">
                    <p className="max-w-4xl text-left max-sm:w-full px-2">
                        These are most of the projects I've done since I started
                        programming, some of them are personal projects, freelance, work,
                        practice or for other situation. If you want to see absolutely all
                        my projects go to my{" "}
                        <Link
                            href={"https://github.com/arslan433/"}
                            target="_blank"
                            className="hover:underline"
                        >
                            github.com/arslan433
                        </Link>
                        .
                    </p>

                </div>
            </div>
            <div className="flex flex-col items-center gap-6 mt-15">
                {loading ? <Loader /> : (

                    projects.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="rounded-md h-full max-w-4xl max-sm:w-full mb-5 pb-3 px-4 shadow-md ring-1 ring-black/10 dark:ring-white/50"
                        >
                            <div className="py-4 text-left">
                                <h4 className="font-semibold text-xl">{p.title}</h4>
                            </div>

                            <div>
                                <p className="text-left mb-2 leading-[normal]">{p.description}</p>
                            </div>

                            <div className="flex justify-between items-center max-sm:items-start flex-wrap max-sm:flex-col flex-row mt-2">
                                <div
                                    className="bg-white/15 px-2 py-1 max-sm:mb-4 rounded-xs"
                                    id="bgchange"
                                >
                                    <p className="font-[700] tracking-tighter uppercase text-xs font-sans">
                                        {p.stack}
                                    </p>
                                </div>

                                <div className="flex justify-center items-end gap-5">
                                    {p.github && (
                                        <Link href={p.github} target="_blank">
                                            <Image
                                                src="/assets/github.webp"
                                                alt="logo"
                                                width={30}
                                                height={30}
                                                id="imginvert"
                                                className="invert brightness-0"
                                            />
                                        </Link>
                                    )}

                                    {p.live && (
                                        <Link href={p.live} target="_blank">
                                            <Eye height={30} width={30} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}

            </div>
            <section className="mt-20">
                <Footer />
            </section>
        </>
    );
}
