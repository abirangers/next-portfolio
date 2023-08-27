"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

interface ItemProps {
  href?: string;
  text?: string;
  onClick?: () => MouseEvent<HTMLAnchorElement>;
}

const Item = ({ href = "/", text = "Link", onClick }: ItemProps) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "text-sm px-4 py-2 text-zinc-900 z-10 hover:bg-zinc-100 rounded-md font-bold transition-all duration-300 ease-in-out"
          // pathName === href && "bg-zinc-100"
        )}
        onClick={onClick}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  const [menuIdx, setMenuIdx] = useState<number>(0);

  const menu = [
    {
      idx: 0,
      width: "60px",
      left: "-124px",
    },
    {
      idx: 1,
      width: "64px",
      left: "-44px",
    },
    {
      idx: 2,
      width: "63px",
      left: "33px",
    },
    {
      idx: 3,
      width: "70px",
      left: "117px",
    },
  ];

  const width = useSpring(menu[menuIdx].width);
  const left = useSpring(menu[menuIdx].left);

  const transform = useMotionTemplate`translateX(${left})`;

  return (
    <div className="lg:min-w-[231px] md:min-w-[190px] sm:min-w-[164px]">
      <Image
        src="/img/bread.svg"
        alt="Logo"
        width={54}
        height={54}
        className="mx-4 mb-[22px] hidden sm:block"
      />
      <div className="sm:flex flex-col gap-y-[11px] hidden">
        <Item href={"/"} text="Home" />
        <Item href={"/about"} text="About" />
        <Item href={"/skills"} text="Skills" />
        <Item href={"/contact"} text="Contact" />
      </div>

      {/* navbar mobile */}
      <div className="flex flex-row gap-x-2 absolute top-20 justify-center w-full sm:hidden">
        <motion.span
          className="bg-zinc-900 absolute h-7 -top-[2px] rounded-md opacity-70"
          style={{ width, transform }}
        ></motion.span>
        <Item
          href={"/"}
          text="Home"
          onClick={() => {
            setMenuIdx(0);
            width.set(menu[0].width);
            left.set(menu[0].left);
          }}
        />
        <Item
          href={"/about"}
          text="About"
          onClick={() => {
            setMenuIdx(1);
            width.set(menu[1].width);
            left.set(menu[1].left);
          }}
        />
        <Item
          href={"/skills"}
          text="Skills"
          onClick={() => {
            setMenuIdx(2);
            width.set(menu[2].width);
            left.set(menu[2].left);
          }}
        />
        <Item
          href={"/contact"}
          text="Contact"
          onClick={() => {
            setMenuIdx(3);
            width.set(menu[3].width);
            left.set(menu[3].left);
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
