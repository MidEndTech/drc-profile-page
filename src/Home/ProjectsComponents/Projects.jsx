import first from "/assets/Home/ProjectsSection/1.svg";
import second from "/assets/Home/ProjectsSection/2.svg";
import third from "/assets/Home/ProjectsSection/3.svg";
import forth from "/assets/Home/ProjectsSection/4.svg";
import { motion } from "framer-motion";

const projects = [
  { id: 1, image: first },
  { id: 2, image: second },
  { id: 3, image: third },
  { id: 4, image: forth },
];

function Projects() {
  const projectVariants = {
    offscreen: {
      opacity: 0,
      y: 300,
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
  return (
    <>
      <div className=" py-8 px-4 flex flex-col items-center text-right mb-[71.75px]">
        <div className="w-full max-w-screen-lg">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            className="text-[#9D6636] text-right font-bold text-4xl my-5"
          >
            مشاريعنا
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            className="text-[#2C4D51] text-right my-5 text-2xl"
          >
            في دار الرحمة، نقدم خدمات هندسية شاملة تشمل التصميم، الإشراف، وإدارة
            المشاريع، ملتزمين بأعلى معايير الجودة والسلامة بفضل فريقنا الخبير،
            نجحنا في تنفيذ مشاريع متميزة تعزز مكانتنا كشركة رائدة.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 max-w-screen-lg">
          {/* Left column */}
          <div className="flex flex-col gap-6 ">
            <motion.div
              variants={projectVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              {" "}
              {/*w-[440px] h-[430px]/*/}
              <img
                src={projects[0].image}
                className="w-full h-full object-cove pt-10 pb-10 pr-10"
              />
            </motion.div>
            <motion.div
              variants={projectVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              {" "}
              {/*w-[520px] h-[500px]/*/}
              <img
                src={projects[2].image}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={projectVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}

              // style={{ width: "520px", height: "500px" }}
            >
              <img
                src={projects[1].image}
                className="w-full h-full object-cover pb-10 "
              />
            </motion.div>
            <motion.div
              variants={projectVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="relative overflow-hidden "
              // style={{ width: "470px", height: "430px" }}
            >
              <img
                src={projects[3].image}
                className="w-full h-full object-cover pl-5"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
