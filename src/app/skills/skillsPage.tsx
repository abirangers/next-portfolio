"use client";
import React from "react";
import { Metadata } from "next";
import ListTechStack from "@/components/listTechStack";

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
      <h1 className="font-bold mb-[28px] sm:text-5xl text-[32px]">Skills</h1>
      <div className="mt-[29px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map((item, index) => (
          <ListTechStack image={item.src} alt={item.alt} key={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
