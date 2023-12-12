import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Container from '../shared/Container';
import { CiLocationOn } from "react-icons/ci";

const Banner = ({handlesubmit,setquery}) => {
  return (
    <Container>
      <div className='py-5 lg:py-10'>
        <h1 className='text-2xl lg:text-4xl font-semibold pb-1'>
          Find your <span className='text-[#3575E2]'>new job</span> today
        </h1>
        <p className='pb-2 lg:pb-5'>
          Thousands of jobs in the computer, engineering, and technology sectors are waiting for you
        </p>
        <form onSubmit={handlesubmit} className='flex-row space-y-2 lg:space-y-0 lg:flex'>
          <div className='relative w-full'>
            <input
            onChange={(e)=>setquery(e.target.value)}
              name="name"
              className='w-full focus:outline-none border p-2 pl-8'
              type='text'
              placeholder='What position are you looking for ?'
            ></input>
            <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
              <CiSearch className='text-gray-400' />
            </div>
          </div>
          <div className='relative w-full'>
            <input
              className='w-full focus:outline-none border p-2 pl-8'
              type='text'
              placeholder='Location'
            ></input>
            <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
              <CiLocationOn className='text-gray-400' />
            </div>
          </div>
          <button className='bg-[#3575E2] text-white py-2 w-full lg:w-[200px] rounded-sm'>Search job</button>
        </form>
      </div>
    </Container>
  );
};

export default Banner;
