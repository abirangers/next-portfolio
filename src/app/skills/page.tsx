import Image from "next/image";
import React from "react";

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
    src: "/img/nodejs.svg",
    alt: "nodejs",
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

const ListTechStack = ({ image, alt }: { image: string; alt: string }) => (
  <div className="rounded-xl flex justify-center border-2 w-full border-solid border-gray-200 bg-gray-100 p-5 hover:bg-gray-200">
    <Image src={image} alt={alt} width={96} height={96} />
  </div>
);

const Skills = () => {
  return (
    <section>
      <h1 className="font-bold text-5xl mb-[28px]">Skills</h1>
      <div className="mt-[29px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map((item, index) => (
          <ListTechStack image={item.src} alt={item.alt} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
