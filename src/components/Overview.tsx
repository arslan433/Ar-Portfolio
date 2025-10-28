"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
export default function Overview() {
    return (
        <>
            <Header />
            <div id="overview" className="flex max-sm:mx-3 justify-center py-5 flex-col items-center">
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 items-center gap-8 px-8 py-6 pt-28 rounded-lg">
                    {/* Left Side - Text */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            Hi, I am <i>Arslan.M</i>
                        </h1>
                        <h2 className="text-2xl font-semibold">The Full Stack Developer</h2>
                        <p className="text-lg leading-relaxed max-w-md">
                            Bringing your ideas to life with clean, efficient, and scalable code.
                            Whether it's building web apps, optimizing performance, or solving
                            complex technical challenges.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-2 border rounded hover:bg-white hover:text-black transition">
                                Contact me
                            </button>
                            <button className="px-6 py-2 border rounded hover:bg-white hover:text-black transition">
                                View projects
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Profile Image with Motion */}
                    <motion.div
                        animate={{ y: [0, .5, 0], scale: [1, 1.01, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/assets/profile.png"
                            alt="profile"
                            width={350}
                            height={350}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </section>

                {/* Expertise Section */}
                <div className="flex flex-col mt-20 w-full items-center">
                    <div className="max-w-3xl w-full rounded-md p-8 backdrop-blur-md text-center">
                        <DropdownMenuSeparator />
                        <h3 className="text-xl font-semibold pb-6">Expertise in</h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            {/* React */}
                            <div className="p-2 flex flex-col items-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" }}
                                >
                                    <Image src="/assets/react.webp" alt="React" width={40} height={40} />
                                </motion.div>
                                <h4>React</h4>
                            </div>

                            {/* Next.js */}
                            <div className="p-2 flex flex-col items-center" id='imginvert'>
                                <Image
                                    src="/assets/next.webp"
                                    alt="Next.js"
                                    width={40}
                                    height={40}
                                    className="invert brightness-0"
                                />
                                <h4>Next.js</h4>
                            </div>

                            {/* Laravel */}
                            <div className="p-2 flex flex-col items-center">
                                <Image src="/assets/laravel.webp" alt="Laravel" width={40} height={40} />
                                <h4>Laravel</h4>
                            </div>

                            {/* Firebase */}
                            <div className="p-2 flex flex-col items-center">
                                <Image src="/assets/firebase.webp" alt="Firebase" width={40} height={40} />
                                <h4>Firebase</h4>
                            </div>

                            {/* SQL */}
                            <div className="p-2 flex flex-col items-center" id="imginvert">
                                <Image
                                    src="/assets/sql.webp"
                                    alt="SQL"
                                    width={40}
                                    height={40}
                                    className="invert brightness-0"
                                />
                                <h4>SQL</h4>
                            </div>

                            {/* Tailwind */}
                            <div className="p-2 flex flex-col items-center">
                                <Image src="/assets/tailwind.webp" alt="Tailwind" width={40} height={40} />
                                <h4>Tailwind</h4>
                            </div>

                            {/* Bootstrap */}
                            <div className="p-2 flex flex-col items-center">
                                <Image src="/assets/bootstrap.webp" alt="Bootstrap" width={40} height={40} />
                                <h4>Bootstrap</h4>
                            </div>

                            {/* WordPress */}
                            <div className="p-2 flex flex-col items-center">
                                <Image src="/assets/wordpress.webp" alt="WordPress" width={40} height={40} />
                                <h4>WordPress</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="about" className="justify-content-center justify-items-center py- pt-15">
                <motion.div className="w-3/5 max-sm:w-[95%] max-sm:px-2"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-3">About me</h2>
                    <div className="">
                        <p className="text-left mb-">I am a passionate full stack developer who loves building web applications that are simple, fast, and user-friendly. I enjoy learning something new every day and improving my skills to create better solutions. Working with a team excites me because I believe in growth through communication, trust, and teamwork. I also believe that every problem has a solution, and with focus and consistency, success can always be achieved.</p>
                    </div>
                </motion.div>
            </section>
            <section id="tech-stack" className="justify-content-center justify-items-center py-5 pt-10">
                <TechStack />
            </section>
            <section className="py-5" id="contact">
                <ContactForm />
            </section>
        </>
    )
}