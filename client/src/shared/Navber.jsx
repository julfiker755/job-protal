import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import { IoMenuSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

const Navber = () => {
    const [toggle,setoggle]=useState(false)
    const navdata=[
        {id:1, title:"Home", path:"/"},
        {id:2, title:"Jobs list", path:"/jobs"},
        {id:3, title:"Salary estimate", path:"/salary"},
        {id:4, title:"Post A Job", path:"/postjob"}
    ]
    return (
      <div className='relative lg:sticky lg:bg-[#f5f5f5] lg:z-[99999] lg:top-0 lg:left-0'>
         <Container>
         <div className='flex justify-between  items-center py-2'>
            <a className='flex items-center gap-2 text-bold text-2xl' href="/"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4" />
                <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
            </svg>Job Protal</a>
            <ul className='hidden lg:flex space-x-3 items-center'>
               {navdata?.map(({id,title,path})=><li key={id}><NavLink className={({isActive})=> isActive? 'text-[red]':'text-[black]'}  to={path}>{title}</NavLink></li>)}
            </ul>
            <div className='hidden lg:flex gap-3'>
                <button className='py-1 px-3 rounded-sm border'>Log In</button>
                <button className='bg-[#1786E7] text-white py-1 px-3 rounded-sm'>Sign Up</button>
            </div>
            {/* mobile icon */}
            <div onClick={()=>setoggle(!toggle)} className='block lg:hidden cursor-pointer'>
                {toggle ? <LiaTimesSolid size={25}/>:<IoMenuSharp size={25}/>}
            </div>
        </div>
       </Container>

        {/* mobie / tablet  menu device */}
        <div className={`${toggle ? 'bg-[#d5d4d4]  static origin-top [transform:scaleY(1)] [transition:0.5s] lg:hidden py-4':'bg-[#d5d4d4] absolute w-full  [transform:scaleY(0)] origin-top [transition:0.5s]'}`}>
        <Container>
        <ul className='flex-row lg:hidden space-y-2 items-center py-2'>
               {navdata?.map(({id,title,path})=><li key={id}><NavLink className={({isActive})=> isActive? 'text-[red]':'text-[black]'}  to={path}>{title}</NavLink></li>)}
        </ul>
        <div className='flex lg:hidden gap-3'>
                <button className='py-1 px-3 rounded-sm border'>Log In</button>
                <button className='bg-[#1786E7] text-white py-1 px-3 rounded-sm'>Sign Up</button>
            </div>
        </Container>
        </div>
      </div>
    );
};

export default Navber;