import Paragraph from "../../SharedComponents/Paragraph";
import ReadMore from "./ReadMore";

// eslint-disable-next-line react/prop-types
function NewsCard({ id, title, brief, picture, date }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <img
          src={picture}
          className="mb-8 w-max h-max hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-[#0000009E] font-bold">{date}</p>
      <Paragraph className="text-primary font-extrabold mb-2">
        {title}
      </Paragraph>
      <Paragraph className="font-bold text-justify mb-4">{brief}</Paragraph>
      <ReadMore id={id} />
    </div>
  );
}

export default NewsCard;
