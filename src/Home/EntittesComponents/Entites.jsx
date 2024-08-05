import './autoSlider.css';
import Images from './images.json'

function Entites() {
    const allImages = Images.Images.flatMap(img => img.src); 
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#9D6636] font-bold text-center my-4 pb-10">جهات معتمدة لديها دار الرحمة للاستشارات</h1>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...allImages, ...allImages].map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`img ${index + 1}`} 
                className="h-10 sm:h-11 md:h-13 lg:h-15 xl:h-17 object-contain px-4 sm:px-6 md:px-8 lg:px-10"
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Entites;
