import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ExperienceIcon, DealIcon, ProjectIcon } from "./icons";
const BioAchieve = ({
  // image,
  number,
  title,
  children,
}: {
  // image: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center">
    {children}
    <p className="text-sm">
      <span className="font-semibold">{number}</span> {title}
    </p>
  </div>
);

const CardBio = ({ variant }: { variant: Variants }) => {
  return (
    <motion.div
      variants={variant}
      className="rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 max-w-[312px] w-full h-[134px] p-[27px] flex items-center"
    >
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
      <Image src="/img/bioimage.JPG" alt="bio-image" width={80} height={80} className="w-full h-full object-cover"/>
      </div>
      <div className="ml-[24px]">
        <BioAchieve number="1" title="Year experience">
          <ExperienceIcon
            fill="e"
            className="my-[6px] mr-[9px] w-[14px] h-[14px] dark:fill-white"
          />
        </BioAchieve>
        <BioAchieve number="20+" title="Project">
          <ProjectIcon
            fill="e"
            className="my-[6px] mr-[9px] w-[14px] h-[14px] dark:fill-white"
          />
        </BioAchieve>
        <BioAchieve number="0" title="Worked">
          <DealIcon
            fill="e"
            className="my-[6px] mr-[9px] w-[14px] h-[14px] dark:fill-white"
          />
        </BioAchieve>
      </div>
    </motion.div>
  );
};

export default CardBio;
