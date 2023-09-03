import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn, slideIn } from "@/utils/motion";
import { ProjectsType, projects } from "@/data/projectsData";
import clsx from "clsx";
const Project = ({
  project,
  index,
}: {
  project: ProjectsType;
  index: number;
}) => {
  return (
    <motion.div
      className={clsx(
        "bg-gray-100 rounded-lg w-5/6 sm:w-3/4 md:w-full mx-auto border relative h-[370px] border-zinc-300 overflow-hidden",
        "flex flex-col",
        "dark:bg-zinc-800 dark:border-zinc-700"
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={scaleIn(index < 2 ? 1 : 0.1)}
      whileHover={{
        y: -16,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
        },
      }}
    >
      <div className="relative">
        <Image
          src={project.image}
          alt={project.alt}
          width={2400}
          height={1439}
          className="w-full h-full object-cover"
        />
        <div className="flex gap-x-2 absolute bottom-2 right-2">
          {project.tech.map((tech, index) => (
            <div
              key={index}
              className="p-2 rounded-md flex items-center bg-zinc-950 w-fit"
            >
              <Image src={tech.img} alt={tech.alt} width={28} height={28} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-3">
        <h1 className="text-lg font-bold mb-2">{project.title}</h1>
        <p className="mb-2">{project.desk}</p>
        <a href="#" className="absolute bottom-3 right-3">
          <Image src="/img/browse.svg" alt="browse" width={24} height={24} />
        </a>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <>
      <motion.h1
        className="font-bold mb-[28px] sm:text-5xl text-[32px] dark:text-[#FFF9D6]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={slideIn("left", "spring", 0.5, 1.25)}
      >
        Project
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
