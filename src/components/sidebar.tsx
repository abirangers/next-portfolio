"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { MouseEvent, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useMotionTemplate,
//   useSpring,
//   MotionValue,
// } from "framer-motion";

interface ItemProps {
  href?: string;
  text?: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "text-sm px-4 py-2 text-zinc-900 z-10 hover:bg-zinc-100 rounded-md font-bold transition-all duration-300 ease-in-out",
          pathName === href && "bg-zinc-100"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="lg:min-w-[231px] md:min-w-[190px] sm:min-w-[164px]">
      <Image
        src="/img/bread.svg"
        alt="Logo"
        width={54}
        height={54}
        className="mx-4 mb-[22px] hidden sm:block"
      />
      <div className="flex sm:flex-col sm:gap-y-[11px] absolute top-10 left-0 right-0 mx-auto gap-x-[11px] justify-center flex-row sm:static">
        {/* <motion.span
          className={clsx(
            "bg-zinc-900 absolute h-7 right-0 left-[5px] -top-px rounded-md opacity-70"
          )}
          style={{ width, transform }}
        ></motion.span> */}
        <Item href={"/"} text="Home" />
        <Item href={"/about"} text="About" />
        <Item href={"/skills"} text="Skills" />
        <Item href={"/contact"} text="Contact" />
      </div>

      {/* navbar mobile
      <div className="flex flex-row gap-x-2 absolute top-20 justify-center w-full sm:hidden">
        <motion.span
          className="bg-zinc-900 absolute h-7 -top-[2px] rounded-md opacity-70"
          style={{ width, transform }}
        ></motion.span>
        <Item href={"/"} text="Home" />
        <Item href={"/about"} text="About" />
        <Item href={"/skills"} text="Skills" />
        <Item href={"/contact"} text="Contact" />
      </div> */}
    </div>
  );
};

export default Sidebar;
