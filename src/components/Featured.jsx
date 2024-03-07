import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Power4 } from 'gsap/all'
import { GoDotFill } from "react-icons/go";

const Featured = () => {

    const [ishovering, sethovering] = useState(false)
    const [issechovering, setsechovering] = useState(false)
    const [isthihovering, setthihovering] = useState(false)
    const [isfouhovering, setfouhovering] = useState(false)


  return (
    <div className='w-full py-20 relative'>
        <div className='w-full px-20 border-b-[1px] border-zinc-300 pb-14'>
            <h1 className='text-7xl tracking-tight '>Featured projects</h1>
        </div>

        <div className='px-12 relative mb-14'>
            <div className='cards w-full flex gap-5 mt-10 relative'>
    
                <div className='cardcontainer w-1/2'> 
                <h1 className='flex items-center font-semibold mb-5'><GoDotFill /> FYDE</h1>
                <div onMouseEnter={()=>sethovering(true)} 
                onMouseLeave={()=>sethovering(false)}
                className='mb-5 h-[80vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter'>
                        {"FYDE".split('').map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate={ishovering ? {y:0} : {y:"100%"}} transition = {{ease: Power4.easeInOut , delay: index*.06}} className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                   
                    <div className= 'w-full h-full rounded-2xl overflow-hidden'>
                        <img className={ishovering? 'w-full h-full bg-cover scale-105 ease-in-out duration-300': 'w-full h-full bg-cover ease-out duration-300'} src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>AUDIT</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>COPYWRITING</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>SALES DECK</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3'>SLIDES DESIGN</button>
                </div>

                <div className='cardcontainers w-1/2'>
                    <h1 className='flex items-center font-semibold mb-5'><GoDotFill />VISE</h1>
                <div onMouseEnter={()=>setsechovering(true)} 
                onMouseLeave={()=>setsechovering(false)} 
                className='mb-5 h-[80vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter'>
                       {"VISE".split('').map((item,index)=>(
                           <motion.span initial={{y:"100%"}} animate={issechovering ? {y:0} : {y:"100%"}} transition = {{ease: Power4.easeInOut , delay: index*.06}}  key={index}>{item}</motion.span>))}
                    </h1>
                    <div className='w-full h-full bg-green-600 rounded-2xl overflow-hidden  rounded-2xl'>
                        <img className={issechovering? 'w-full h-full bg-cover scale-105 ease-in-out duration-300': 'w-full h-full bg-cover ease-out duration-300'} src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>AGENCY</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3'>COMPANY PRESENTATION</button>
                </div>

                



            </div>
        </div>




        <div className='px-12 relative mb-5'>
            <div className='cards w-full flex gap-5 mt-10 relative'>
    
                <div className='cardcontainer w-1/2'> 
                <h1 className='flex items-center font-semibold mb-5'><GoDotFill /> TRAMA</h1>
                <div onMouseEnter={()=>setthihovering(true)} 
                onMouseLeave={()=>setthihovering(false)}
                className='mb-5 h-[80vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-semibold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter'>
                        {"TRAMA".split('').map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate={isthihovering ? {y:0} : {y:"100%"}} transition = {{ease: Power4.easeInOut , delay: index*.06}} className='inline-block'>{item}</motion.span>
                        ))}
                    </h1>
                   
                    <div className= 'w-full h-full rounded-2xl overflow-hidden'>
                        <img className={isthihovering? 'w-full h-full bg-cover scale-105 ease-in-out duration-300': 'w-full h-full bg-cover ease-out duration-300'} src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </div>
                </div>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>BRAND IDENTITY</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3 mr-3'>DESIGN RESEARCH</button>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3'>INVESTOR DECK</button>
                </div>

                <div className='cardcontainers w-1/2'>
                    <h1 className='flex items-center font-semibold mb-5'><GoDotFill />PREMIUM BLEND</h1>
                <div onMouseEnter={()=>setfouhovering(true)} 
                onMouseLeave={()=>setfouhovering(false)} 
                className='mb-5 h-[80vh] relative'>
                    <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter'>
                       {"PREMIUM BLEND".split('').map((item,index)=>(
                           <motion.span initial={{y:"100%"}} animate={isfouhovering ? {y:0} : {y:"100%"}} transition = {{ease: Power4.easeInOut , delay: index*.06}}  key={index}>{item}</motion.span>))}
                    </h1>
                    <div className='w-full h-full bg-green-600 rounded-2xl overflow-hidden  rounded-2xl'>
                        <img className={isfouhovering? 'w-full h-full bg-cover scale-105 ease-in-out duration-300': 'w-full h-full bg-cover ease-out duration-300'} src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                    </div>
                </div>
                <button className='rounded-3xl border-[1px] border-zinc-700 p-1 px-3'>BRANDED TEMPLATE</button>
                </div>

            

            </div>
        </div>



         <button className='flex gap-10 p-5 bg-black text-white rounded-full items-center top-10 left-[50%] relative -translate-x-2/4'>VIEW ALL CASE STUDY  <GoDotFill /></button>

    </div>
  )
}

export default Featured

