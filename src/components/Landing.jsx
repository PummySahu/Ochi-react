import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-screen pt-1 '>
      <div className="textstructure mt-52 px-20">
        <div className='masker'>
          <h1 className="heading uppercase text-8xl leading-[6vw] tracking-tighter font-semibold "> We create</h1>
        </div>
        <div className='masker w-fit flex items-center relative'>
          <motion.div
            initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="w-[8vw] h-[5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover rounded-md mr-[1vw]"></motion.div>
          <h1 className="uppercase text-8xl leading-[6vw] font-[gilroy] tracking-tighter font-semibold ">eye-opening</h1>
        </div>
        <div className='masker'>
          <h1 className="uppercase text-8xl leading-[6vw] tracking-tighter font-semibold ">presentations</h1>
        </div>
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center justify- gap-5'>
          <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase'>
            <h1>Start the Project</h1>
          </div>
          <div className='w-10 h-10 border-zinc-500 rounded-full border-[2px] flex items-center justify-center'><MdOutlineArrowOutward /></div>
        </div>
      </div>
    </div>
  )
}

export default Landing

