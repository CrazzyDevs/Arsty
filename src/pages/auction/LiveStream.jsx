import React from 'react'
import live from './live.png'

import { AiFillEye } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

const LiveStream = () => {
  return (
    <>
<div style={{
  backgroundImage: `url(${live})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}}  className='w-full h-screen'>
    <div>
<header> 
    <p>Tag: Lost or Wither</p>
    <div className='hidden'>
         <div>LIVE</div>
            <div><span><AiFillEye /></span>1.8k</div>
            <div><FiX /></div>
    </div>
</header>
    </div>
</div>

<h1>76oto76tfy6fyu</h1>
    </>
  )
}

export default LiveStream