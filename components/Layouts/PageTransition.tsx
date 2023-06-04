import { motion } from "framer-motion";

export default function PageTransition(props: { children: React.ReactNode }) {
  return <motion.div
    initial={{ y: 150, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 300, opacity: 0 }}
    transition={{
      type: "keyframes",
      duration: 0.5,
      stiffness: 260,
      damping: 20,
    }}>
    <div className="min-h-screen">{props.children}</div>
  </motion.div>
}