import React from 'react'
import live from './live.png'
import '../../Components/styles/Live.css'

import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { RiSendPlaneFill } from 'react-icons/ri'

import comment from './comment.png'

const LiveStream = () => {
  return (
    <>
<div style={{
  backgroundImage: `url(${live})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}}  className='w-full h-screen'>
    <div>
<header className='flex justify-between pt-8 pl-3 pr-4 relative'> 
    <p className='live-heading text-white'>Tag: Lost or Wither</p>
    <div className='flex justify-around items-center w-40 '>
         <div className='ilve-indicat flex justify-center items-center cursor-pointer'>LIVE</div>
            <div className='flex justify-between items-center w-14 eye-cont cursor-pointer px-1.5 '><span ><AiFillEye /></span><p>1.8k </p></div>
            <div className='text-2xl text-white cursor-pointer'><FiX /></div>
    </div>
</header>
{/* foter start */}
<footer className=' absolute bottom-0 w-full'>
    {/* comment section */}
        <div className='text-white comment-stack  pb-3 pl-5 '>

        <div className='flex items-center  mb-2 gap-3'><div className='w-9 h-9  rounded-3xl' style={{
            backgroundImage: `url(${comment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}> </div> <div><p className='text-xl font-medium'>chidera</p> <p className='text-xs font-normal'>hello crazzyDev</p></div></div>

        <div className='flex items-center mb-2 gap-3'><div className='w-9 h-9  rounded-3xl' style={{
            backgroundImage: `url(${comment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}> </div> <div><p className='text-xl font-medium'>chidera</p> <p className='text-xs font-normal'>hello crazzyDev</p></div></div>


        <div className='flex items-center mb-2 gap-3'><div className='w-9 h-9  rounded-3xl' style={{
            backgroundImage: `url(${comment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}> </div> <div><p className='text-xl font-medium'>chidera</p> <p className='text-xs font-normal'>hello crazzyDev</p></div></div>


        <div className='flex items-center mb-2 gap-3'><div className='w-9 h-9  rounded-3xl' style={{
            backgroundImage: `url(${comment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}> </div> <div><p className='text-xl font-medium'>chidera</p> <p className='text-xs font-normal'>hello crazzyDev</p></div></div>

        <div className='flex items-center mb-2 gap-3'><div className='w-9 h-9  rounded-3xl' style={{
            backgroundImage: `url(${comment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}> </div> <div><p className='text-xl font-medium'>chidera</p> <p className='text-xs font-normal'>hello crazzyDev</p></div></div>

        </div>
{/* comment section end */}
    <div className='w-full pl-5 flex items-center text-white text-2xl gap-4 input-group'>

        <div className='flex input-set items-center gap-2 pl-2 pr-4 '><input type="text" placeholder='Join coversasion...' /> <span className='text-2xl cursor-pointer text-white'><RiSendPlaneFill /></span></div>
        <div className='likes-btn'><AiFillHeart /></div>
    </div>
</footer>
{/* footer ends */}
    </div>
</div>

    </>
  )
}

export default LiveStream