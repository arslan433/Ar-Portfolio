"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center py-20 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/profile.png"
            alt="Profile"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Side - Text */}
        <div className="flex-1">
          <span className="text-xs font-bold ">ABOUT ME</span>
          <h2 className="text-4xl font-extrabold mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I am a Full Stack Developer with 1+ years of experience, building
            fast, scalable, and user friendly web applications. My focus is on
            clean architecture, modern frameworks, and delivering solutions that
            truly make an impact.


          </p>
          <p className="text-lg leading-relaxed mb-6">
            Collaboration excites me I believe growth comes through
            communication, trust, and teamwork. With focus and consistency,
            every challenge can be turned into success.

          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mb-8">
            <motion.a
             title="Github"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              href="https://github.com/arslan433/"
              className=" transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
             title="Linkedin"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              href="https://www.linkedin.com/in/arslan-m-b9426b35a/"
              className="transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
            title="WhatsApp"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              href="https://wa.me/923474875097"
              className="transition-colors"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a
             title="Stack Overflow"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
              href="https://stackoverflow.com/users/30619908/arslan-muhammad"
              className=" transition-colors"
            >
              <i id="imginvert" className="fa fa-stack-overflow  text-black"></i>
            </motion.a>
          </div>

          {/* Resume Button */}
          <a target="_blank" href="/cv.pdf">


            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ef4444",
                color: "#fff",
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 rounded-full font-semibold 
                       bg-black text-white dark:bg-white dark:text-black 
                       shadow-lg transition-colors"
            >
              View Resume
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
