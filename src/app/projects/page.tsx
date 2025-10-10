"use client";

import Header from "@/components/Header";
import { Eye } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function ProjectCard({ title, description, stack, github, demo }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-2  border-gray-400 rounded-md h-full w-3/5 max-sm:w-full mb-10 pb-3 px-4"
    >
      <div className="py-4 text-left">
        <h4 className="font-semibold text-xl">{title}</h4>
      </div>
      <div>
        <p className="text-left mb-2 leading-[normal]">{description}</p>
      </div>
      <div className="flex justify-between items-center max-sm:items-start flex-wrap max-sm:flex-col flex-row mt-2">
        <div
          className="bg-white/15 px-2 py-1 max-sm:mb-4 rounded-xs"
          id="bgchange"
        >
          <p className="font-[700] tracking-tighter uppercase text-xs font-sans">
            {stack}
          </p>
        </div>
        <div className="flex justify-center items-end gap-5">
          {github && (
            <Link href={github} target="_blank">
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
          {demo && (
            <Link href={demo} target="_blank">
              <Eye height={30} width={30} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Next Mart (working)",
      description:
        "Next Mart is a modern e-commerce platform that delivers a fast, responsive, and seamless online shopping experience with a focus on style, performance, and user convenience.",
      stack: "Next.js - Laravel - SQL",
      github: "https://github.com/arslan433/Next-Mart.git",
      demo: "https://arnextmart.vercel.app/",
    },
    {
      title: "Traffic Checker",
      description:
        "A website traffic checker shows how many visitors a site gets, where they come from, and how they engage.",
      stack: "Next.js - HighCharts - Similarweb API",
      github: "https://github.com/arslan433/Traffic-Checker.git",
      demo: "https://artrafficchecker.vercel.app/",
    },
    {
      title: "Pixel Forge",
      description:
        "Pixel Forge is an AI tool that turns your text ideas into clear, creative images through a simple and modern interface.",
      stack: "Next.js - AI - Rapid API",
      github: "https://github.com/arslan433/ArPixelForge.git",
      demo: "https://arpixelforge.vercel.app/",
    },
    {
      title: "New York Times",
      description:
        "A dynamic web app that integrates New York Times APIs to explore books, top stories, and articles with smooth navigation and interactions.",
      stack: "Next.js - Tailwind - NYT API",
      github: "https://github.com/arslan433/NYTimes.git",
      demo: "https://nytimes-news.vercel.app/",
    },
    {
      title: "Portfolio",
      description:
        "This portfolio website showcases my latest work and projects. I keep it updated with new projects to highlight my skills and progress as a full stack developer.",
      stack: "Next.js - Framer Motion - Tailwind",
      github: "https://github.com/arslan433/Ar-Portfolio.git",
      demo: "https://arslan-dev.vercel.app/",
    },
    {
      title: "My Practises",
      description:
        "In this project, I experimented with new ideas and features to practice and improve my skills. I used it as a space to test different concepts and try out new implementations in Next.js.",
      stack: "Next.js - Tailwind",
      github: "https://github.com/arslan433/My-App.git",
      demo: "https://arslan-practises.vercel.app/",
    },


  ];

  return (
    <>
      <Header />
      <div className="flex-1 justify-center text-center pt-15">
        <h3 className="text-3xl font-bold mb-3">Projects</h3>
        <div className="justify-items-center">
          <p className="w-3/5 text-left max-sm:w-full px-2">
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

        <div className="justify-items-center px-2 mt-15 items-center">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </>
  );
}
