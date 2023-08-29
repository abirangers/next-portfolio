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

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-10%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const bounce = () => ({
  hidden: {
    top: -198,
    opacity: 1,
  },
  show: {
    top: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      duration: 1.25,
      delay: 0.75,
      ease: "easeOut",
    },
  },
});