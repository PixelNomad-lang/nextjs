"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "../Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div>
          <Stairs/>
        </div>
        <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-event-none " initial={{opacity:1}} animate={{opacity:0,transition:{delay: 1, duration:0.4,ease : "easeInOut"}}}/>
      </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition;
