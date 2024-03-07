import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div  className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl  text-white z-10 relative'>
        <div className='text uppercase border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden items-center font-semibold'>
        
            <motion.h1
             initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration:5}}
             className='text-[19vw] leading-none tracking-tighter -mt-10 pr-10'>we are ochi</motion.h1>
            <motion.h1
             initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity , duration:5}}
             className='text-[19vw] leading-none tracking-tighter -mt-10'>we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee