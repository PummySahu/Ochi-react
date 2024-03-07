import React from 'react'

const Cards = () => {
    return (

        
        <div className='w-full h-screen relative bg-zinc-300 flex items-center px-16 gap-5'>
            <div className='cardcontainer w-1/2 h-[55vh] '>
                <div className='relative rounded-xl  card w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-3 py-1 rounded-full border-2 border-[#CDEA68] left-5 bottom-6 text-[#CDEA68]'>&copy; 2019-2020</button>
                </div>

            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[55vh]'>
                <div className='relative rounded-xl card w-1/2 h-full bg-zinc-900 flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    {/* <img className="bg-gray-200 entered loaded" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" height="150" width="150" data-src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" data-ll-status="loaded" style=""></img> */}
                    <button className='absolute px-3 py-1 rounded-full border-2 border-white left-5 bottom-6 text-white uppercase'>Rating 5.0 om clutch</button>
                </div>
                <div className='relative rounded-xl card w-1/2 h-full bg-zinc-900 flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-3 py-1 rounded-full border-2 border-white left-5 bottom-6 text-white'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>

        </div>
    )
}

export default Cards