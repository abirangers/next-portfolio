import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/utils/motion";
const Project = ({ image }: { image: string }) => (
  <motion.div
    className="bg-gray-100 rounded-lg border border-zinc-300 overflow-hidden"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={scaleIn()}
  >
    <div className="h-52 relative">
      <Image
        src={image}
        alt="project-1"
        width={2400}
        height={1439}
        className="w-full h-full object-cover"
      />
      <div className="flex gap-x-2 absolute bottom-2 right-2">
        <div className="p-2 rounded-md flex items-center bg-zinc-950 w-fit">
          <Image src="/img/html.svg" alt="project-1" width={28} height={28} />
        </div>
        <div className="p-2 rounded-md flex items-center bg-zinc-950 w-fit">
          <Image src="/img/css.svg" alt="project-1" width={28} height={28} />
        </div>
        <div className="p-2 rounded-md flex items-center bg-zinc-950 w-fit">
          <Image
            src="/img/javascript.svg"
            alt="project-1"
            width={28}
            height={28}
          />
        </div>
      </div>
    </div>
    <div className="p-3">
      <h1 className="text-lg font-bold mb-2">Lorem ipsum dolor sit</h1>
      <p className="mb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut ex
        voluptate corrupti?
      </p>
      <Image
        src="/img/browse.svg"
        alt="browse"
        width={24}
        height={24}
        className="ml-auto"
      />
    </div>
  </motion.div>
);

const ProjectSection = () => {
  const project = [
    {
      image: "/img/project-1.webp",
      title: "Modern Landing Page",
      desk: "ini adalah halaman yang dibuat menggunakan html css untuk melatih kemampuan membuat website saya pada saat itu",
    },
  ];

  return (
    <>
      <h1 className="font-bold mb-[28px] sm:text-5xl text-[32px]">Project</h1>
      <div className="grid grid-cols-2 gap-5">
        <Project image="/img/project-1.webp" />
        <Project image="/img/project-2.webp" />
        <Project image="/img/project-3.webp" />
        <Project image="/img/project-4.webp" />
      </div>
    </>
  );
};

export default ProjectSection;
