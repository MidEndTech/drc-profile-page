import { useState } from "react";
import Heading from "../../SharedComponents/Heading";
import ContentCard from "./ContentCard";
import NavItem from "./NavItem";

function Vision() {
  const [activeSection, setActiveSection] = useState("Vision");

  const handleSwitch = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="overflow-hidden mb-[71.75px]">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <main className="w-10/12 mx-auto flex flex-col items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            className="text-center mb-12"
          >
            <Heading className="text-dark-green">تعرف على</Heading>
            <Heading className="text-primary">رؤيتنا ورسالتنا وهدفنا</Heading>
          </div>
          <section
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <nav className="w-full">
              <ul className="flex gap-4 justify-center">
                <NavItem
                  title="رؤيتنا"
                  active={activeSection === "Vision"}
                  handleSwitch={() => handleSwitch("Vision")}
                />
                <NavItem
                  title="رسالتنا"
                  active={activeSection === "Message"}
                  handleSwitch={() => handleSwitch("Message")}
                />
                <NavItem
                  title="هدفنا"
                  active={activeSection === "Goal"}
                  handleSwitch={() => handleSwitch("Goal")}
                />
              </ul>
            </nav>
            <ContentCard activeSection={activeSection} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Vision;
