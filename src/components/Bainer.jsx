import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { FaChartPie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";



const Bainer = () => {
  const inputRef = useRef(null);

  const handleseach = () => {
    inputRef.current.classList.toggle('opacity-0')
    inputRef.current.classList.toggle('transform-y-0')
    inputRef.current.style.transition = 'all 1s ease-in-out'
    
  }

  return (
    <div className=' w-full min-h-screen bg-[#FFFFFF] '>
       <div className='secrch-bar fixed  h-10 top-40    right-10 flex  '>
       

         <input ref={inputRef} className=' rounded-full w-50 h-10 transform-y-full px-5 border opacity-0 border-blue-700 active:border-blue-700 mt-1   ' type="text" placeholder='Search here' />
         <button onClick={()=>{handleseach()}} className='absolute w-12 h-12 border rounded-full  right-0 top-0 flex justify-center items-center bg-blue-700 text-white'>
          <CiSearch style={{ fontSize: "1.5rem" }} />
         </button>

       </div>
       <div className='whatsapp fixed   bottom-20  w-15 object-cover h-15 rounded-full overflow-hidden right-5 flex  '>
        <img src="https://static.vecteezy.com/system/resources/previews/021/495/946/original/whatsapp-logo-icon-free-png.png" alt="whatsapp" />

       </div>
       <div className='whatsapp fixed  bottom-5 bg-[#00E510]   text-white w-15 h-15 rounded-full  right-5 flex  '>
        <div className=' w-10 h-10  absolute left-4 rounded-lg rotate-158 bg-[#00E510] top-[-5px]'></div>
        <AiFillMessage style={{ fontSize: "1.5rem", zIndex: 1 , marginTop: "15px"  , marginLeft: "15px" }} />
       </div>

      <div className='pt-15 w-full flex justify-center items-center gap-10  '>
        <div className=' flex flex-col gap-2 items-center'>
          <h1 className='text-4xl font-bold pl-10 text-[#41464C]'>SCIENTIFICALLY PLAN YOUR CAREER</h1>
          <h3 className='text-lg font-semibold text-[#5C6873]'>FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS</h3>
        </div>
        <span className=''>
          <img src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png" alt="img" />
        </span>
      </div>


      <div className='w-full flex justify-center items-center gap-10 mt-10'>

        <div className=' h-150 w-90  border-[#32C5D2] border-3 flex flex-col Justify-between items-center p-7'>

         <div className='flex flex-col justify-between items-center '>
         <h3 className='text-sm font-[600] text-zinc-700 bg-[#32C5D2] px-3 py-1 '>CAREER REPORT</h3>

         <h2 className=' text-5xl opacity-70 font-bold flex mt-10 cursor-pointer line-through hover:text-[#32c5d2]    '>1999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "lighter", fontSize: "1.5rem" }} /></span></h2>

         <h3 className=' text-2xl font-semibold opcity-70 cursor-pointer text-red-500 mt-2 mr-5   '>50% Off</h3>

         <div className=' text-5xl text-white opacity-70 font-bold flex mt-10 cursor-pointer px-12  py-3 bg-[#32C4D0] rounded-lg  '>999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "600", color: "white", fontSize: "1.5rem" }} /></span></div>
         </div>

         <div className='flex flex-col justify-between items-center gap-3 pt-10'>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaPuzzlePiece style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600  hover:text-[#32C4D0]  '> <span className='font-semibold text-lg'>1</span> Psychometric Career Test  </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaChartPie style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]    '> <span className='font-semibold text-lg'>1</span>  Psychometric Career Report   </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]   '> E-BOOK SELF CAREER COUNSELLING  </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>

         </div>

         <button  className=' border-2 px-10 py-2 font-medium text-lg flex mt-10  '>Get Started <span className='pt-2'><MdKeyboardDoubleArrowRight/> </span></button>

        </div>

        <div className=' h-180 w-90 border-[#32C5D2] border-3 p-7 flex flex-col justify-center items-center'>

        <div className='flex flex-col justify-between items-center '>
         <h3 className='text-md font-[600] text-zinc-700 bg-[#32C5D2] px-3 py-1 '>CAREER REPORT</h3>

         <h2 className=' bainer-box text-5xl opacity-70 font-bold flex mt-10 cursor-pointer line-through hover:text-[#32c5d2]  '>5,999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "lighter", fontSize: "1.5rem" }} /></span></h2>

         <h3 className=' text-2xl font-semibold opcity-70 cursor-pointer text-red-500 mt-2 mr-5   '>16% Off</h3>

         <div className=' text-5xl text-white opacity-70 font-bold flex mt-10 cursor-pointer px-12  py-3 bg-[#32C4D0] rounded-lg  '>4,999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "600", color: "white", fontSize: "1.5rem" }} /></span></div>
         </div>

         <div className='flex flex-col justify-between items-center gap-3 pt-10'>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaPuzzlePiece style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600  hover:text-[#32C4D0]  '> <span className='font-semibold text-lg'>2</span> Psychometric Career Test  </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaChartPie style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]    '> <span className='font-semibold text-lg'>1</span>  Psychometric Career Report   </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaPlay style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]    '> <span className='font-semibold text-lg'>3</span> VIDEO  CAREER COUNSELLING SESSION   </h3>
         
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaMapMarkedAlt style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]    '> PERSONALISED ROADMAP SESSION   </h3>
         
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 

           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]   '> E-BOOK SELF CAREER COUNSELLING  </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-[#32C4D0]   '> E-BOOK NEW AGE CAREER </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>

         </div>

         <button  className=' border-2 px-10 py-2 font-medium text-lg flex mt-10  '>Get Started <span className='pt-2'><MdKeyboardDoubleArrowRight/> </span></button>

        </div>

        <div className=' h-170 w-90 bg-[#32C5D2] border-3 border-[#32C5D2] P-10 mt-10 flex flex-col justify-center items-center'>

        <div className='flex flex-col justify-between items-center '>
         <h3 className='text-sm font-[600] text-zinc-700 bg-white px-3 py-1 '>CAREER REPORT</h3>

         <h2 className=' text-5xl opacity-70 font-bold flex mt-10 cursor-pointer line-through hover:text-white  '>12,999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "lighter", fontSize: "1.5rem" }} /></span></h2>

         <h3 className=' text-2xl font-semibold opcity-70 cursor-pointer text-red-500 mt-2 mr-5   '>24% Off</h3>

         <div className=' text-5xl text-[#32c4d0]  font-bold flex mt-10 cursor-pointer px-12  py-3 bg-white rounded-lg  '>9,999 <span><MdOutlineCurrencyRupee style={{ fontWeight: "600", color: "#32c4d0", fontSize: "1.5rem" }} /></span></div>
         </div>

         <div className='flex flex-col justify-between items-center gap-3 pt-10'>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaPuzzlePiece style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600  hover:text-white  '> <span className='font-semibold text-lg'>3</span> Psychometric Career Test  </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaChartPie style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white    '> <span className='font-semibold text-lg'>3</span>  Psychometric Career Report   </h3>
          < LuExternalLink  style={{ fontSize: "1rem", color: "gray" }} />
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaPlay style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white    '> <span className='font-semibold text-lg'>3</span> VIDEO  CAREER COUNSELLING SESSION   </h3>
         
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white   '> E-BOOK SELF CAREER COUNSELLING  </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white   '> E-BOOK NEW AGE CAREER </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white   '> E-BOOK NEW AGE TACHNOLOGY  </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>
          <div className=' w-full' > 
           <li  className='flex justify-start items-center gap-2'>
           <FaBook style={{ fontSize: "1rem", color: "gray" }} />
          <h3 className='text-sm font-[600] text-zinc-600 hover:text-white   '> E-BOOK DEGITAL CAREER </h3>
          
           </li>
          <hr className=' w-full border-gray-700 border-1' />
          </div>

         </div>

         <button  className=' border-2 px-10 py-2 font-medium text-lg flex mt-10  '>Get Started <span className='pt-2'><MdKeyboardDoubleArrowRight/> </span></button>
        </div>

      </div>

      
    </div>
  )
}

export default Bainer
