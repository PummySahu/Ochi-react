import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-5xl w-[80vw] px-20 leading-[3.7vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
   
        
        <div className='w-full border-t-[1px] border-b-[1px] border-zinc-700 mt-20 flex relative px-20 pb-32 pt-5'>

          <div className='w-1/2 relative'>
            <h1>What you can expect:</h1>

          </div>
          <div className='w-1/2 relative flex gap-28'>
            <div className='w-1/2'>
              <h1>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1> <br />
              <h1>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
            </div>

            <div className='flex flex-col text-left pt-10'>
              <h1 className='mb-5'>S: </h1>
              <h2>Instagram</h2>
              <h2>LinkdIn</h2>
              <h2>Behance</h2>
              <h2>Facebook</h2>
            </div>

          </div>


        </div>

        <div className='w-full flex gap-5 mt-20 px-20 py-10'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our Approach:</h1>
                <button className='px-8 py-5 bg-zinc-900 mt-10 rounded-full text-white flex gap-10 items-center uppercase'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className="w-1/2 h-[65vh] rounded-2xl bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-center bg-cover"></div>
        </div>
    </div>
  )
}

export default About