import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full h-140 bg-gray-100 mt-20 p-10 flex justify-center items-center gap-20'>

      <div className='w-160 h-130 border'>
        <video className=' w-full h-full object-cover autuPlay loop muted ' src="https://www.youtube.com/1b33570d-33a6-44e3-aa50-d179350383cb" controls  ></video>

      </div>
      <div className='w-120 h-120 border p-10  ' >
      <h3 className='text-sm font-[600] text-zinc-100 bg-[#32C5D2] px-1 py-1 inline-block '>SCIENTIFICALLY PLAN YOUR CAREER</h3>
      <h2 className=' text-3xl opacity-70 font-[600] uppercase mt-5 hover:text-[#32c5d2]'>A Career Counsellor Can Change Your Life</h2>
      <p className='text-base font-light text-zinc-700 mt-5 uppercase '>Investing in Career Guidance & Career counselling helps you understand yourself and your career options better, making it easier to make decisions. It also helps you learn more about the job market, be happier in your career, and succeed in the long run. </p>

      <div className='flex justify-center items-center '>
      <button className='border-1 border-black px-5 bg-[#ADB52E] py-2 font-normal text-white text-base shadow-md mt-10 w-38 '> VIEW PRICEING</button>
      </div>

      

      </div>
      
    </div>
  )
}

export default Section1
