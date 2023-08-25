"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
          "text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold",
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
        className="mx-4 mb-[22px]"
      />
      <div className="flex flex-col gap-y-[11px]">
        <Item href={"/"} text="Home" />
        <Item href={"/about"} text="About" />
        <Item href={"/skills"} text="Skills" />
        <Item href={"/contact"} text="Contact" />
      </div>
    </div>
  );
};

export default Sidebar;
