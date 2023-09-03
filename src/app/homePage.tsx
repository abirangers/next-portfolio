"use client";
import { motion } from "framer-motion";
import React from "react";
import MainHeader from "../components/mainHeader";
import CardBio from "../components/cardBio";
import { textVariant } from "@/utils/motion";
import Link from "next/link";

const SocialMed = ({ href, title }: { href: string; title: string }) => (
  <Link
    href={href}
    className=" underline underline-offset-2 px-4 py-2 font-semibold"
  >
    {title}
  </Link>
);

const HomePage = () => {
  return (
    <motion.section
      className="flex flex-col pb-[60px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <MainHeader title={"Ahmad Aby Ayyasi"} variant={textVariant()} />
      <CardBio variant={textVariant(0.25)} />

      <motion.p className="mt-[36px]" variants={textVariant(0.5)}>
        Sebagai seorang Front-end Developer, saya telah mengembangkan berbagai
        website dan platform yang melibatkan teknologi-teknologi terbaru seperti
        ReactJS, dan juga frameworknya yaitu NextJS. Saya selalu mencari cara
        untuk meningkatkan keterampilan saya dan mengeksplorasi teknologi baru
        yang dapat membantu saya menciptakan solusi yang lebih baik.
      </motion.p>

      <motion.div
        variants={textVariant(0.75)}
        className="inline-flex mt-[30px] gap-x-2"
      >
        <SocialMed href="https://github.com/abirangers" title="Github" />
        <SocialMed href="https://www.instagram.com/b1ngers" title="Instagram" />
        <SocialMed
          href="https://www.facebook.com/groups/194737459319190/"
          title="Facebook"
        />
      </motion.div>
    </motion.section>
  );
};

export default HomePage;
