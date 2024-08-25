import "./autoSlider.css";
import { Images } from "./images.json";
import { motion } from "framer-motion";

function Entites() {
  const entitiesVariants = {
    offscreen: {
      opacity: 0,
      y: 150,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  const allImages = Images[0].src;

  return (
    <div className="container mx-auto px-8 py-15 pb-[100px] pt-[100px]">
      <motion.h1
        variants={entitiesVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl text-[#9D6636] font-bold text-center my-4 pb-10"
      >
        جهات معتمدة لديها دار الرحمة للاستشارات
      </motion.h1>
      <motion.div
        variants={entitiesVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="overflow-hidden"
      >
        <div className="flex animate-scroll">
          {[...allImages, ...allImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img ${index + 1}`}
              className="h-10 sm:h-11 md:h-13 lg:h-15 xl:h-17 object-contain px-4 sm:px-6 md:px-8 lg:px-10"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Entites;
