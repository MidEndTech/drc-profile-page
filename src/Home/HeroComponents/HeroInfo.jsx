import data from "./field.json";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";

// eslint-disable-next-line react/prop-types
function HeroInfo({ currentIndex, isNext }) {
  const nextVariants = {
    animate: { opacity: 1, y: [150, -35, 0], transition: { duration: 1 } },
    exit: { opacity: 0, y: -150, transition: { duration: 0.3 } },
  };
  const prevVariants = {
    animate: { opacity: 1, y: [-150, 35, 0], transition: { duration: 1 } },
    exit: { opacity: 0, y: 150, transition: { duration: 0.3 } },
  };
  return (
    <section className="flex flex-col z-10 gap-2 w-full lg:w-3/5 xl:w-1/2 2xl:w-2/3 overflow-y-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`title-${currentIndex}`}
          animate="animate"
          exit="exit"
          variants={isNext ? nextVariants : prevVariants}
        >
          <Heading className=" bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text m-2 md:m-4 md:mb-0 md:mr-8 lg:mr-20">
            {data[currentIndex].title}
          </Heading>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={`description-${currentIndex}`}
          animate="animate"
          exit="exit"
          variants={isNext ? nextVariants : prevVariants}
        >
          <Paragraph className=" text-white text-justify m-2 md:m-4 md:mr-8 lg:mr-20">
            {data[currentIndex].description}
          </Paragraph>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default HeroInfo;
