import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";
import data from "./data.json";
function ContentCard({ activeSection }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (activeSection === "Vision") setIndex(0);
    else if (activeSection === "Message") setIndex(1);
    else setIndex(2);
  }, [activeSection]);
  return (
    <div className="w-[70%] md:w-[80%] lg:w-[60%] 2xl:w-[53%] bg-white flex justify-between items-center gap-12 p-8 rounded-2xl mt-8">
      <section className="flex-col gap-4">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`title-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heading className="text-dark-green ">{data[index].title}</Heading>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`description-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Paragraph className="text-justify">
              {data[index].description}
            </Paragraph>
          </motion.div>
        </AnimatePresence>
      </section>
      <div className="w-10/12 xl:w-auto flex justify-end">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={data[index].picture}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ContentCard;
