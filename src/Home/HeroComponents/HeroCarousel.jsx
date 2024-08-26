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
      partialVisibilityGutter: 45,
    },
    taplet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div>
      <Carousel
        ref={sliderRef}
        rtl
        itemClass="md:px-2 xl:px-6 2xl:px-0 xl:pt-20 2xl:pt-0"
        infinite
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
            className="h-full sm:h-[90%] w-full sm:pt-14"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
