import React, { useEffect, useState } from 'react'
import { GoDotFill } from "react-icons/go";


const Eyesec = () => {
    
    const [rotate, setrotate] = useState(0)


    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)

            setrotate(angle-180)
        })
    })

  return (
    <div className='w-full bg-[#CDEA68] flex gap-10 flex-col items-center p-40  relative'>
         <h1 className='text-[10vw] leading-none tracking-tighter font-bold text-center'>READY <br />TO START <br />THE PROJECT ?</h1>
    

         <button className='flex gap-10 px-5 py-4 bg-black text-white rounded-full items-center '>START THE PROJECT <GoDotFill /></button>
         <button className='flex gap-10 px-5 py-4 border-[1px] border-zinc-700 text-black text-white rounded-full items-center uppercase'>HELLO&copy;ochi.design <GoDotFill /></button>


         {/* <div data-scroll data-scroll-speed="-.7" className="absolute w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"> */}
            <div data-scroll data-scroll-speed=".2" className='absolute top-48 flex gap-10'>
                <div className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7  '>
                           <div className='w-7 h-7 rounded-full bg-zinc-300'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[12vw] h-[12vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center'>
                        <div  style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 '>
                           <div className='w-7 h-7 rounded-full bg-zinc-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}

    </div>
  )
}

export default Eyesec