import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Gothic_A1, Poppins } from "next/font/google";
import clsx from "clsx";
import { ReactNode } from "react";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-auto overflow-x-hidden dark:bg-zinc-900">
        <Providers>
          <div
            className={clsx(
              "flex flex-row container mx-auto mt-[151px]",
              poppins.className
            )}
          >
            <Sidebar />
            <main className="basis-full w-full px-4 sm:px-2">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
