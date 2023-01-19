import React from "react";
import { auctionProduct } from "../../pages/auction/AuctionData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carosuel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 110,
    },
  };

  return (
    <div>
      <div className="lg:block md:block hidden pt-12">
        <Carousel
          partialVisible={true}
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          customTransition="all 1s linear"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          containerClass="carousel-container"
          responsive={responsive}
        >
          {auctionProduct.map(({ id, imageUrl }) => {
            return (
              <div className="pt-12 space-y-8" key={id}>
                <div className="w-72 h-72 overflow-hidden">
                  <img src={imageUrl} alt="img" className="w-full h-full" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="md:hidden lg:hidden place-items-center justify-center items-center grid mt-[34px]">
        <img
          src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043051/stackimg2_a1xvc6.png"
          alt="stacked image"
        />
      </div>
    </div>
  );
}

export default Carosuel;
