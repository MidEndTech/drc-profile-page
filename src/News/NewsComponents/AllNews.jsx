import NewsCard from "./NewsCard";
import PrimeNews from "./PrimeNews";
import news from "./news.json";

function AllNews() {
  return (
    <div>
      <PrimeNews />
      <section
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once={true}
        className="flex flex-col md:flex-row gap-16 md:gap-8"
      >
        {news.map((news, index) => {
          if (index === 0) return;
          else {
            return (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                brief={news.brief}
                picture={news.picture}
                date={news.date}
              />
            );
          }
        })}
      </section>
    </div>
  );
}

export default AllNews;
