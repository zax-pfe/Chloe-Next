import { motion, AnimatePresence } from "framer-motion";

export default function Inner({ children }: { children: React.ReactNode }) {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div {...anim(opacity)} className="page">
      {children}
    </motion.div>
  );
}
