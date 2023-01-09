import React from 'react'
import '../../Components/styles/Auction.css'
import { Link } from 'react-router-dom'
import { auctionProduct } from './AuctionData'

import { BsHeartFill } from 'react-icons/bs'
import { IoIosArrowRoundForward } from 'react-icons/io'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Auction = () => {



 

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 110 
    }
  };

// const id = auctionProduct.filter(open => open.id === 2);

// const handlClick = () =>{
//   console.log(id);
//   }



const bidCard = [
  {
    id: 1,
    icon : <BsHeartFill />,
    imageUrl : 'https://res.cloudinary.com/dpokiomqq/image/upload/v1673043071/image3_c16wly.png',
    prodctStatus : 'in the box',
    higestBid : '0.45 ETH',
    creator : 'tomiwa dev',
    date: '01/01/23',
    currentBid : '0.446 ETH',
  },
  {
    id: 2,
    icon : <BsHeartFill />,
    imageUrl : 'https://res.cloudinary.com/dpokiomqq/image/upload/v1673043076/gurl_kitzch.png',
    prodctStatus : 'out of the box',
    higestBid : '0.45 ETH',
    creator : 'precious crazzyDev',
    date: '12/12/22',
    currentBid : '0.976 ETH',
  },
  {
    id: 3,
    icon : <BsHeartFill />,
    imageUrl : 'https://res.cloudinary.com/dpokiomqq/image/upload/v1673043075/image1_h3mp1a.png',
    prodctStatus : 'in the box',
    higestBid : '0.45 ETH',
    creator : 'agba coder',
    date: '7 / 01 / 23',
    currentBid : '0.609 ETH',
  },
]
  return (
    <>
<div className='pl-2'>
 
 {/* carousel div start here */}
<div className=' break-words font-[switzer] first-cont'>
  <h2>Lorem ipsum dolor sit amet, consectetur bag goods elit. Dolore  </h2>
  <div>
<Carousel  partialVisible={true} containerClass="carousel-container" showDots={true} responsive={responsive}>
  {auctionProduct.map(prodcuCard => (
 <div key={prodcuCard.id} style={{
  backgroundImage: `url(${prodcuCard.imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}} className=' auction-product'>

  <Link to={`/auction/${prodcuCard.id}`}>
  <div className='card-text' ><p>{prodcuCard.title}</p></div>
  </Link>

</div>
  ))}
 
 
</Carousel>
  </div>
</div>
{/* carousel div ends here */}
<div className='w-full mt-10 top-bid pr-2 '>
  <h2>Top bids from popular creators</h2>
  {/* top bids card  group start here */}
    <div className='w-full px-2 mt-7 card-group  grid grid-cols-1 gap-4 md:grid-cols-2'>
      {bidCard.map(bid =>(
        <>
         {/* single card */}
      <div className='top-bid-card'>

<div className='card-img-cont'>
<div className='w-full red-heart flex justify-between'><h2></h2> <div className=' heart-icon '>{bid.icon}</div></div>

<div className='top-bid-img' key={bid.id} style={{
  backgroundImage: `url(${bid.imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}}>
</div>

<div className='w-full name-price flex justify-between'><h2 className='font-semibold'>{bid.prodctStatus}</h2> <h2 className='font-bold '>{bid.higestBid}</h2></div>
</div>

<div className='w-full h-auto '>
<div className='flex flex-col gap-6 p-4 mt-5 mb-5'>
<h2 className='font-bold'><span className='font-normal pr-4'>Creator : </span> {bid.creator}</h2>
<h1 className='font-bold'><span className='font-normal pr-4'>Date :</span>{bid.date}</h1>
</div>

<div className='card-footer flex p-4 justify-between'>
<div className='flex flex-col gap-2'>
<h2>Current bid</h2>
<h1 className='font-bold'>{bid.currentBid}</h1>
</div>
<button>Place bid</button>
</div>
</div>

</div>
{/* sigle card */}
        </>
      ))}
     
      </div>
{/*  top bids cared group ends here*/}

{/* load more button created here */}
<div className='w-full flex justify-center mt-10 '>
  <div className='flex items-center justify-between p-2 w-44'>
    <h2 className='text-1xl cursor-pointer'>Load more</h2>
    <div className='read-more-arrow'>
    <IoIosArrowRoundForward />
    </div>

  </div>
</div>
        </div>
</div>
    </>
  )
}

export default Auction