import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%", // Ensure it's starting at the top
  },
  animate: {
    top: "100%", // Animate to the bottom
  },
  exit: {
    top: ["100%", "0%"], // Reverse the animation for exit
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const totalSteps = 6;

const reverseIndex = (index) => {
  return totalSteps - index - 1;
};

const Stairs = () => {
  console.log("Stairs rendering"); // To ensure the component is rendering

  return (
    <div className="relative h-screen w-screen"> {/* Ensure the parent div takes up full screen */}
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1, // Staggered delay for each stair
          }}
          className="h-full w-full bg-gray-100 relative" // Replace bg-white with bg-gray-100 to distinguish layers
        />
      ))}
    </div>
  );
};

export default Stairs;
