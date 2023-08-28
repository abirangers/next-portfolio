"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

const ListTechStack = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <motion.div
      className={clsx(
        "rounded-xl flex justify-center border-2 w-96 sm:w-full mx-auto",
        "border-solid border-gray-200 bg-gray-100 p-5 hover:bg-gray-200"
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
};

export default ListTechStack;
