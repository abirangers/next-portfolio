"use client";
import CardBio from "@/components/cardBio";
import MainHeader from "@/components/mainHeader";
import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

export const metadata: Metadata = {
  title: "Bingers - Home",
  description: "Generated by create next app",
};

export default function Home() {
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
        className="inline-flex mt-[30px]"
      >
        <Link
          href="/"
          className=" underline underline-offset-2 mr-[17px] px-4 py-2 font-semibold"
        >
          Github
        </Link>
        <Link
          href="/"
          className=" underline underline-offset-2 px-4 mr-[17px] py-2 font-semibold"
        >
          Instagram
        </Link>
        <Link
          href="/"
          className=" underline underline-offset-2 px-4 py-2 font-semibold"
        >
          Facebook
        </Link>
      </motion.div>
    </motion.section>
  );
}
