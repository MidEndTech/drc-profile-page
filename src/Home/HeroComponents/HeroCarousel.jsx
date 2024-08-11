import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import data from "./field.json";

// eslint-disable-next-line react/prop-types
function HeroCarousel({ sliderRef }) {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 5000, min: 1280 },
      items: 2,
      partialVisibilityGutter: 60,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    taplet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      partialVisibilityGutter: 18,
    },
  };

  return (
    <div>
      <Carousel
        ref={sliderRef}
        rtl
        itemClass="px-1 md:px-2 xl:px-4"
        infinite
        autoPlay
        autoPlaySpeed={4000}
        customTransition="all 1.3s ease-in-out"
        transitionDuration={1500}
        partialVisbile
        arrows={false}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        pauseOnHover={false}
      >
        {data.map((item, index, arr) => (
          <img
            key={index}
            src={arr[(index + 1) % arr.length].smallPicture}
            className="h-11/12 lg:h-full"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
