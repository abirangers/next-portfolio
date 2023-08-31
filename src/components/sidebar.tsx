"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_ROUTES, ROUTE } from "@/constant/route";
import { motion } from "framer-motion";

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
          "relative ",
          "rounded-md px-4 py-2 z-10",
          "transition-all duration-300 ease-in-out",
          "text-sm font-semibold text-zinc-900",
          isActive ? "text-blue-900" : "hover:bg-zinc-700/10"
        )}
      >
        {item.name}
        {isActive && (
          <motion.div
            className={clsx(
              "absolute h-full w-full inset-y-0",
              "opacity-100 rounded-md bg-zinc-700/10"
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
  return (
    <div className="lg:min-w-[231px] md:min-w-[190px]">
      <Image
        src="/img/bread.svg"
        alt="Logo"
        width={54}
        height={54}
        className="mx-4 mb-[22px] hidden md:block"
      />
      <div className="flex md:flex-col md:gap-y-[16px] absolute top-10 left-0 right-0 mx-auto gap-x-[11px] justify-center flex-row md:static">
        {NAVBAR_ROUTES.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
