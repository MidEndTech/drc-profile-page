import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";
import news from "./news.json";

function CompleteNewsPage() {
  return (
    <div className="mt-24 pb-12 ">
      <p className="text-[#0000009E] font-bold">{news[0].date}</p>
      <section className="flex flex-col items-center gap-4 sm:gap-8">
        <img src={news[0].picture} className="w-1/2 sm:w-1/3 lg:w-auto mb-2" />
        <Heading className="text-primary">{news[0].title}</Heading>
        <Paragraph className="text-justify">{news[0].details}</Paragraph>
      </section>
    </div>
  );
}

export default CompleteNewsPage;
