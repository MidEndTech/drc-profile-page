export function SettingsSlider(onChange = () => {}) {
    return {
      className: "center",
      centerMode: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      afterChange: (current) => onChange(current),  // Call the onChange function with the current slide
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: false,
            slidesToShow: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
                },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
                },
        },
      ],
    };
  }
  
  export default SettingsSlider;
  