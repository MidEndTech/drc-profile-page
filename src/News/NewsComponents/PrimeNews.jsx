import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";
import news from "./news.json";
import ReadMore from "./ReadMore";
function PrimeNews() {
  return (
    <>
      <main
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once={true}
        className="mt-24 pb-12 flex gap-8"
      >
        <img
          src={news[0].picture}
          className="w-1/4 sm:w-1/3 lg:w-auto hover:scale-110 transition-transform duration-300"
        />
        <section className="flex flex-col gap-2 md:w-1/2 mb-12">
          <p className="text-[#0000009E] font-bold">{news[0].date}</p>
          <Heading className="text-primary">{news[0].title}</Heading>
          <Paragraph className="font-bold text-justify">
            {news[0].brief}
          </Paragraph>
          <ReadMore id={news[0].id} />
        </section>
      </main>
      <div className="w-full border-b-2 bg-[#00000024] mb-16"></div>
    </>
  );
}

export default PrimeNews;
