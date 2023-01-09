import React from "react";
// import { Carousel } from "antd";

function Carosuel({auctionProduct}) {
console.log(auctionProduct)
//   const contentStyle = {
//     height: "160px",
//     color: "#fff",
//     lineHeight: "160px",
//     textAlign: "center",
//     background: "#364d79",
//   };

  return (
    // <Carousel autoplay effect="fade" dots={false}>
        
    // </Carousel>
    <div>
          {auctionProduct.map(data => (
        <div className="" key={data.id}>
          <img src={data.imageUrl} alt="img"/>
        </div>
      ))}
    </div>
  );
}

export default Carosuel;
