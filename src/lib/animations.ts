import type { Variants } from "framer-motion";

// Cubic bezier suave para entradas
export const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp = (duration = 0.6, baseDelay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay: baseDelay, ease },
  },
});

// Variante com stagger custom — usada com custom prop
export const fadeUpStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.11,
      ease,
    },
  }),
};
