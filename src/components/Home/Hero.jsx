import React from "react";
import Carousel from "nuka-carousel";

const Hero = () => {
  return (
    <div className="w-full pt-24 md:px-10 px-5 text-white bg-[#212121] z-40 md:top-0 py-16">
        <div className="roundContainer">
          <span className="round"></span>
          <span className="round"></span>
          <span className="round"></span>
          <span className="round"></span>
        </div>


      <Carousel
        autoplay="true"
        autoplayInterval={3000}
        cellAlign="center"
        dragging="true"
        pauseOnHover="true"
        wrapAround={true}
        slidesToShow={1}
        disableEdgeSwiping={false}
        speed={1500}
        withoutControls={true}
      >
        <div className="h-60 md:h-[50vh] flex justify-center items-center ease-in transition duration-300">
          <img src="/assets/carousel/five.jpg" alt="..." />
        </div>
        <div className="h-60 md:h-[50vh] flex justify-center items-center ease-in transition duration-300">
          <img src="/assets/carousel/three.jpg" alt="..." />
        </div>
        <div className="h-60 md:h-[50vh] flex justify-center items-center ease-in transition duration-300">
          <img src="/assets/carousel/six.jpg" alt="..." />
        </div>
        <div className="h-60 md:h-[50vh] flex justify-center items-center ease-in transition duration-300">
          <img src="/assets/carousel/four.jpg" alt="..." />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
