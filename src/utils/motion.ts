// export const staggerContainer = () =>
//   //   staggerChildren: number
//   //   delayChildren: number
//   ({
//     hidden: {},
//     show: {
//       transition: {
//         //   staggerChildren,
//         //   delayChildren,
//       },
//     },
//   });

export const textVariant = (delay?: number) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
