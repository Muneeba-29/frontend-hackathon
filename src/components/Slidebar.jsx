import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://www.tudungruffle.com/cdn/shop/files/Banner_Website_-_Fleur.jpg?v=1730968581&width=5760",
  "https://www.modishhijab.com/cdn/shop/files/Copy_of_Copy_of_Copy_of_Website_banner_3.jpg?v=1752601876&width=3200",
  "https://thehijabcompany.pk/cdn/shop/collections/Website_Slider_-_Mobile_-_2x_Size_1080_x_1100_px_1_1200x1200.jpg?v=1742318636",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-[500px]">
        <img
          src={images[currentIndex]}
          alt="Hijab Banner"
          className="w-full h-full "
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        <FaChevronLeft className="text-2xl text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow hover:bg-opacity-100"
      >
        <FaChevronRight className="text-2xl text-gray-700" />
      </button>
    </div>
  );
}

export default ImageSlider;
