import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
const BioAchieve = ({
  image,
  number,
  title,
}: {
  image: string;
  number: string;
  title: string;
}) => (
  <div className="flex items-center">
    <Image
      src={image}
      alt="bio-image"
      width={14}
      height={14}
      className="my-[6px] mr-[9px]"
    />
    <p className="text-sm">
      <span className="font-semibold">{number}</span> {title}
    </p>
  </div>
);

const CardBio = ({ variant }: { variant: Variants }) => {
  return (
    <motion.div
      variants={variant}
      className="rounded-lg border border-zinc-100 max-w-[312px] w-full h-[134px] p-[27px] flex items-center"
    >
      <Image src="/img/bio-image.svg" alt="bio-image" width={80} height={80} />
      <div className="ml-[24px]">
        <BioAchieve
          image="/img/experience.svg"
          number="1"
          title="year experience"
        />
        <BioAchieve image="/img/project.svg" number="20+" title="Project" />
        <BioAchieve image="/img/deal.svg" number="0" title="worked" />
      </div>
    </motion.div>
  );
};

export default CardBio;
