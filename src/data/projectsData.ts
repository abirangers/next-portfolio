export type TechType = {
  img: string;
  alt: string;
};

export type ProjectsType = {
  image: string;
  title: string;
  desk: string;
  tech?: TechType[];
};

export const projects: ProjectsType[] = [
  {
    image: "/img/project-14.webp",
    title: "Next CRUD",
    desk: "Ini adalah website CRUD yang dibuat menggunakan framework NextJS",
    tech: [
      {
        img: "/img/nextjs.svg",
        alt: "project-nextjs",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-7.webp",
    title: "Catatan Belanjaku",
    desk: "Website ini dibuat agar saya tidak lupa saat diperintahkan oleh mama membeli sesuatu ke warung",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-reactjs",
      },
      {
        img: "/img/css.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-4.webp",
    title: "Tailwind Porftolio",
    desk: "Website porfolio yang saya pelajari dari channel youtube web programming unpas",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-6.webp",
    title: "Qur'an Pro",
    desk: "Website yang berfungsi untuk memudahkan umat islam dalam membaca ayat suci AL-Qur'an tanpa perlu membawa mushaf",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
      {
        img: "/img/javascript.svg",
        alt: "project-javascript",
      },
    ],
  },
  {
    image: "/img/project-2.webp",
    title: "Thrift Shop",
    desk: "Sebuah website thrifting yang dibuat menggunakan html css dan javascript",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
      {
        img: "/img/javascript.svg",
        alt: "project-javascript",
      },
    ],
  },
  {
    image: "/img/project-12.webp",
    title: "Simple Portfolio",
    desk: "Sebuah website portfolio yang saya buat pada saat pertamakali belajar ReactJS",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-reactjs",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-10.webp",
    title: "E-Commerce Page",
    desk: "Website yang dibuat untuk mengasah logika saya pada saat belajar ReactJS",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-react",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-3.webp",
    title: "Website Smk Plus Pelita Nusantara",
    desk: "Sebuah website yang saya buat untuk sekolah yang sedang saya tempati sekarang yaitu Smk Plus Pelita Nusantara",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
      {
        img: "/img/javascript.svg",
        alt: "project-javascript",
      },
    ],
  },
  {
    image: "/img/project-5.webp",
    title: "Pecel lele",
    desk: "Sebuah project yang saya buat pada saat pertamakali belajar html css. yaitu membuat website pecel lele",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
    ],
  },
  {
    image: "/img/project-13.webp",
    title: "Netflix Clone",
    desk: "Sebuah Cloningan website Netflix yang saya buat untuk mengimplementasikan pemahaman saya tentang i18next",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-reactjs",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-11.webp",
    title: "Game Listing",
    desk: "Sama seperti E-commerce, website ini dibuat untuk mengasah logika saya dalam pemanggilan API menggunakan ReactJS",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-reactjs",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
  {
    image: "/img/project-1.webp",
    title: "Modern Landing Page",
    desk: "Simple modern website yang dibuat menggunakan html dan css",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
    ],
  },
  {
    image: "/img/project-8.webp",
    title: "Movie DB",
    desk: "Website yang dibuat untuk menampilkan daftar movie menggunakan API",
    tech: [
      {
        img: "/img/html.svg",
        alt: "project-html",
      },
      {
        img: "/img/css.svg",
        alt: "project-css",
      },
      {
        img: "/img/javascript.svg",
        alt: "project-javascript",
      },
    ],
  },
  {
    image: "/img/project-9.webp",
    title: "Simple ToDoList",
    desk: "Website ini dibuat agar saya juga tidak lupa saat saat harus melakukan sesuatu",
    tech: [
      {
        img: "/img/reactjs.svg",
        alt: "project-reactjs",
      },
      {
        img: "/img/tailwind.svg",
        alt: "project-tailwind",
      },
    ],
  },
];
