import '../../styles/autoSlider.css'
import { Images } from '../../data/images';


function Entites() {
    const allImages = Images.flatMap(img => img.src);

    return (
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#9D6636] font-bold text-center my-4">جهات معتمدة لديها دار الرحمة للاستشارات</h1>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...allImages, ...allImages].map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`img ${index + 1}`} 
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain mx-4 sm:mx-6 md:mx-8 lg:mx-10 "
              />
            ))}
          </div>
        </div>
      </div>
    );
  };


export default Entites;
