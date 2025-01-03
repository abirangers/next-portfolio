"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
const MainHeader = ({
  title,
  variant,
}: {
  title: React.ReactNode;
  variant?: Variants;
}) => {
  return (
    <motion.div variants={variant}>
      <h1 className="font-bold sm:text-5xl mb-[20px] text-[32px] dark:text-[#FFF9D6]">
        {title}
      </h1>
      <p className="mb-[26px]">
        Halo👋, Saya seorang{" "}
        <span className="font-semibold">Front-end Developer</span> yang
        passionate dengan web accessibility dan responsive web design. Menikmati
        membangun semuanya dari situs app kecil hingga app yang elegan.
      </p>
    </motion.div>
  );
};

export default MainHeader;
