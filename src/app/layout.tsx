import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Gothic_A1 } from "next/font/google";
import clsx from "clsx";

const gothic_A1 = Gothic_A1({
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={clsx(
            "flex flex-row container mx-auto mt-[151px]",
            gothic_A1.className
          )}
        >
          <Sidebar />
          <main className="basis-full w-full px-4 sm:px-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
