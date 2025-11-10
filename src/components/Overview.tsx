"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import CoderCard from './CoderCard';
import Link from "next/link";
import Footer from "./Footer";
import Experience from "./Experience";
export default function Overview() {
    return (
        <>
            <Header />
            <div id="overview" className="flex max-sm:mx-3 justify-center py-5 flex-col items-center">
                <section className="grid md:grid-cols-2 items-center gap-8 px-3 py-6 pt-10 rounded-lg">
                    <div className="max-w-lg space-y-6">
                        <h1 className="text-xl font-[cursive]">
                            Arslan.M
                        </h1>
                        <span className="text-4xl font-stretch-semi-expanded font-semibold">From concept to code,
                            <br/> I bring visions to life.
                        </span>
                        <p className="text-md leading-relaxed pt-6">
                            I build clean, efficient, and scalable web applications that turn ideas into reality — whether it's creating modern web apps, boosting performance, or solving complex challenges.
                        </p>

                        <div className="flex gap-4">
                            <Link href={'/#contact'}>
                                <button
                                    className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                >
                                    <span
                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                    >
                                    </span>
                                    <span
                                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                    >
                                        Contact me
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 448 512"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>

                            </Link>
                            <Link href={'/projects'} className="ml-5">
                                <button
                                    className="group/button h-12 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-400/30 backdrop-blur-lg px-8 py-[12px] text-base font-semibold transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                                >
                                    <span className="text-sm ">View Projects</span>
                                    <div
                                        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                                    >
                                        <div className="relative h-full w-10 bg-white/40"></div>
                                    </div>
                                </button>
                            </Link>

                        </div>
                    </div>

                    {/* Right Side - Profile Image with Motion */}
                    <CoderCard/>
                </section>

                {/* Expertise Section */}
                <div className="flex flex-col mt-20 items-center">
                    <div className="max-w-3xl w-full rounded-md backdrop-blur-md text-center">
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
            <section id="about" className="justify-content-center justify-items-center pt-15  ">
                <motion.div className="max-w-4xl max-sm:px-3 px-3"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-3">About me</h2>
                    <div className="">
                        <p className="text-left">I am a passionate full stack developer who loves building web applications that are simple, fast, and user-friendly. I enjoy learning something new every day and improving my skills to create better solutions. <br/> <br/>Working with a team excites me because I believe in growth through communication, trust, and teamwork. I also believe that every problem has a solution, and with focus and consistency, success can always be achieved.</p>
                    </div>
                </motion.div>
            </section>
            <section id="tech-stack" className="justify-content-center justify-items-center py-5 pt-10">
                <TechStack />
            </section>
            <section>
                <Experience />
            </section>
            <section className="py-8" id="contact">
                <ContactForm />
            </section>
            <section>
                <Footer/>
            </section>
        </>
    )
}