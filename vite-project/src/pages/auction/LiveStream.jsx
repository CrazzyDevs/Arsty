import React from 'react'
import live from './live.png'

import { AiFillEye } from 'react-icons'
import { FiX } from 'react-icons'

const LiveStream = () => {
  return (
    <>
<div style={{
  backgroundImage: `url(${live})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}}  className='w-full h-screen'>
    <div>
{/* <header> 
    <p>Tag: Lost or Wither</p>
    <div>
         <div>LIVE</div>
            <div><span><AiFillEye /></span>1.8k</div>
            <div><FiX /></div>
    </div>
</header> */}
    </div>
</div>

    </>
  )
}

export default LiveStream