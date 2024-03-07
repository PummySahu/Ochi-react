import React from 'react'

const Clients = () => {
  return (
    <div className='w-full relative pb-20'>

        <h1 className='text-6xl pl-20 mb-10'>Client's reviews</h1>

        <div className='border-t-[1px] border-b-[1px] border-zinc-300 w-full flex px-20 pt-5 pb-20'>
            <div className='w-1/2 flex'>
                <div  className='w-1/2 '><h1 className='text-xl'>Karman Ventures</h1></div>
                <div  className='w-1/2'>
                    <h1 className='text-xl'>Services:</h1>
                </div>
            </div>
            <div className='w-1/2 flex justify-between'>
                <div className='w-[65%]'>
                <h1 className='text-xl' >William Barnes</h1>
                <div className='w-[7vw] h-[15vh] bg-red-600 relative rounded-xl mt-16 mb-10 overflow-hidden'>
                    <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                </div>
                <h1>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</h1>
                </div>
                <h1 >READ</h1>
            </div>

        </div>

        <div className='relative whitespace-nowrap flex justify-between items-center w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[18%]'>Planetly</h1>
            <h1 className='w-[10]'>Nina Walloch</h1>
            <h1>Read</h1>
        </div>
        <div className='flex whitespace-nowrap justify-between  w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[20%]'>Workiz Easy</h1>
            <h1 className='w-[10%]'>Tomer Levy</h1>
            <h1>Read</h1>
        </div>
        <div className='flex whitespace-nowrap justify-between w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[20%]'>Premium Blend</h1>
            <h1 className='w-[10%]'>Ellen Kim</h1>
            <h1>Read</h1>
        </div>
        <div className='flex whitespace-nowrap justify-between w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[20%]'>Hypercare Systems</h1>
            <h1 className='w-[10%]'>Brendan Goss</h1>
            <h1>Read</h1>
        </div>
        <div className='flex whitespace-nowrap justify-between w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[20%]'>Officevibe</h1>
            <h1 className='w-[10%]'>Raff Labrie</h1>
            <h1>Read</h1>
        </div>
        <div className=' relative whitespace-nowrap flex justify-between w-full border-b-[1px] border-zinc-300 py-5 px-20 text-xl'>
            <h1 className='w-[20%]'>Orderlion</h1>
            <h1 className='w-[10%]'>Stefan Strohmer</h1>
            <h1>Read</h1>
        </div>


    </div>
  )
}

export default Clients