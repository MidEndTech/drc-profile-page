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
    <div className="overflow-hidden">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <Heading className="text-dark-green">تعرف على</Heading>
          <Heading className="text-primary">رؤيتنا ورسالتنا وهدفنا</Heading>
        </div>
        <nav className="w-full px-8">
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
      </div>
    </div>
  );
}

export default Vision;
