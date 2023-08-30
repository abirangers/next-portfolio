"use client";
import React from "react";
import ListTechStack from "@/components/listTechStack";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Image from "next/image";
import ProjectSection from "./projectSection";

type TechItem = {
  src: string;
  alt: string;
};

const techStack: TechItem[] = [
  {
    src: "/img/html.svg",
    alt: "html",
  },
  {
    src: "/img/css.svg",
    alt: "css",
  },
  {
    src: "/img/sass.svg",
    alt: "sass",
  },
  {
    src: "/img/tailwind.svg",
    alt: "tailwind",
  },
  {
    src: "/img/reactjs.svg",
    alt: "reactjs",
  },
  {
    src: "/img/nextjs.svg",
    alt: "nextjs",
  },
];

const SkillsPage = () => {
  return (
    <section className="pb-[60px]">
      <motion.h1
        className="font-bold mb-[28px] sm:text-5xl text-[32px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={slideIn("left", "spring", 0.1, 1.25)}
      >
        Skills
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={slideIn("left", "spring", 0.1, 1.25)}
        className="my-[29px] px-4 sm:px-0 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {techStack.map((item, index) => (
          <ListTechStack image={item.src} alt={item.alt} key={index} />
        ))}
      </motion.div>
      <ProjectSection />
    </section>
  );
};

export default SkillsPage;
