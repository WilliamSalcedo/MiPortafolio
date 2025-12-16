import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950">
      <motion.img
        src="/logoBlanco.svg"
        alt="WSL logo"
        className="w-36"
        initial={{
          opacity: 0,
          scale: 0.6,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.85,
        }}
        transition={{
          duration: 1,
          ease: [0.80, 2, 0.36, 2],
        }}
      />
    </div>
  );
}
