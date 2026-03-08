import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  ...rest
}: Props) => {
  const d = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: d.x * distance, y: d.y * distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
