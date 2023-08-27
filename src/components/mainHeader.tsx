import React from "react";

const MainHeader = ({ title }: { title: React.ReactNode }) => {
  return (
    <>
      <h1 className="font-bold text-5xl mb-[28px]">{title}</h1>
      <p className="mb-[26px]">
        Halo👋, Saya seorang{" "}
        <span className="font-semibold">Front-end Developer</span> yang berfokus
        pada pengembangan sebuah website dengan pengalaman kurang lebih 1 tahun.
        Menikmati membangun semuanya dari situs app kecil hingga app yang
        elegan.
      </p>
    </>
  );
};

export default MainHeader;
