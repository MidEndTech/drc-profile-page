import React, { useEffect, useState } from "react";
import cardInfoObj from "./servicesCardInfo.json";

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
};

function CardInfo(props) {
  const [cardOfInfo, setCardOfInfo] = useState([...cardInfoObj]);
  const [imagesLoaded, setImagesLoaded] = useState(false);


  useEffect(() => {
    const imageUrls = cardOfInfo.map((item) => [
      item.card,
    ]);
    preloadImages(imageUrls).then(() => {
      setImagesLoaded(true);
    });
  });

  return (
    <>
      <div
        key={props.index}
        className="overflow-hidden pt-20 pr-3 pb-3 pl-2"
      >
        <div className="md:w-[515.83px] md:h-[586.52px]">
          <img
            src={cardOfInfo[props.index].card}
            alt=""
            className="w-[230px] h-[380px] md:w-[390px] md:h-[492px] rounded-[30px] rotate-[3deg]"
          />
        </div>
      </div>
    </>
  );
}

export default CardInfo;