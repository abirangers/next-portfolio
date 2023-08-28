export type ROUTE = {
  href: string;
  name: string;
};

export const ALL_ROUTES: ROUTE[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/skills", name: "Skills" },
  { href: "/contact", name: "Contact" },
];

const allowHrefs = ["/", "/about", "/skills", "/contact"];

export const NAVBAR_ROUTES = ALL_ROUTES.filter((route) =>
  allowHrefs.includes(route.href)
);
