"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const duration = 0.55;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const inViewProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.2 } as const,
};

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = CommonProps & {
  delay?: number;
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const transition = { duration, ease, delay };
  const initial = { opacity: 0, y: 16 };
  const target = { opacity: 1, y: 0 };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={target}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type StaggerListProps = CommonProps & {
  as?: "ul" | "ol" | "div";
  amount?: number;
};

export function StaggerList({
  children,
  className,
  as = "ul",
  amount = 0.15,
}: StaggerListProps) {
  const props = {
    className,
    variants: staggerParent,
    ...inViewProps,
    viewport: { once: true, amount },
  };

  if (as === "ol") return <motion.ol {...props}>{children}</motion.ol>;
  if (as === "div") return <motion.div {...props}>{children}</motion.div>;
  return <motion.ul {...props}>{children}</motion.ul>;
}

type StaggerItemProps = CommonProps & {
  as?: "li" | "div";
};

export function StaggerItem({ children, className, as = "li" }: StaggerItemProps) {
  if (as === "div") {
    return (
      <motion.div className={className} variants={fadeUp}>
        {children}
      </motion.div>
    );
  }
  return (
    <motion.li className={className} variants={fadeUp}>
      {children}
    </motion.li>
  );
}
