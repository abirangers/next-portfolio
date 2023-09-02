"use client";
import useMediaQuery from "@/hook/matches";
import { slideIn } from "@/utils/motion";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStackAnimation = ({ image, alt }: { image: string; alt: string }) => (
  <motion.div
    className={clsx(
      "rounded-xl flex justify-center border-2 w-96 sm:w-full mx-auto",
      "border-solid border-gray-200  bg-gray-100 p-5 hover:bg-gray-200",
      "dark:bg-zinc-800 dark:border-zinc-700"
    )}
    drag
    dragTransition={{
      bounceStiffness: 50,
      bounceDamping: 5,
    }}
    dragSnapToOrigin
  >
    <Image
      src={image}
      alt={alt}
      width={96}
      height={96}
      className="transition duration-300 ease-in-out pointer-events-none"
    />
  </motion.div>
);

const ListTechStack = ({ image, alt }: { image: string; alt: string }) => {
  return useMediaQuery() ? (
    <TechStackAnimation image={image} alt={alt} />
  ) : (
    <motion.div
      className={clsx(
        "rounded-xl flex justify-center border-2 w-full max-w-[384px] justify-self-center",
        "border-solid border-gray-200 bg-gray-100 p-5 hover:bg-gray-200"
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={slideIn("left", "spring", 0.1, 1.25)}
    >
      <Image
        src={image}
        alt={alt}
        width={96}
        height={96}
        className="transition duration-300 ease-in-out pointer-events-none"
      />
    </motion.div>
  );
};

export default ListTechStack;
