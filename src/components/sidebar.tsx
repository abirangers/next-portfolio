"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_ROUTES, ROUTE } from "@/constant/route";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NavbarItem = (item: ROUTE) => {
  const pathName = usePathname();

  let isActive = false;

  if (item.href === "/" && pathName === item.href) isActive = true;
  if (item.href !== "/" && pathName.includes(item.href)) isActive = true;

  return (
    <div>
      <Link
        href={item.href}
        className={clsx(
          "relative",
          "rounded-md px-4 py-2 z-10",
          "transition-all duration-300 ease-in-out",
          "text-sm font-semibold text-zinc-900",
          "",
          isActive
            ? "text-blue-900 dark:text-[#FFF9D6]"
            : "hover:bg-zinc-700/10 dark:text-white"
        )}
      >
        {item.name}
        {isActive && (
          <motion.div
            className={clsx(
              "absolute h-full w-full inset-y-0",
              "opacity-100 rounded-md bg-zinc-500/10"
            )}
            style={{ width: "100%" }}
            layoutId="navbar-desktop"
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          />
        )}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="lg:min-w-[231px] md:min-w-[190px]">
      <div className="w-[54px] h-[54px] mx-4 mb-[22px] hidden md:block ">
        <Image
          src="/img/bread.svg"
          alt="Logo"
          width={54}
          height={54}
          className="w-full h-auto"
          priority
        />
      </div>
      <div
        className={clsx(
          "md:flex-col md:gap-y-[16px] md:static w-fit md:mx-0 mx-auto",
          "flex items-center justify-center flex-row gap-x-[11px]",
          "absolute top-10 left-0 right-0"
        )}
      >
        {NAVBAR_ROUTES.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
        <div className="md:px-4 flex items-center">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" && (
              <Image src="/img/moon.svg" alt="sun" width={24} height={24} />
            )}
            {theme === "light" && (
              <Image src="/img/sun.svg" alt="sun" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
