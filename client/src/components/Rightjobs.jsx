import React from 'react';

const Rightjobs = () => {
    return (
        <div className='py-11 space-y-6'>
           <div className='bg-white rounded-sm p-4'>
           <h1 className='text-xl capitalize font-bold'>📨 Email me for jobs</h1>
            <p className='py-3'>Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo ea foes.</p>
            <div className='space-y-3'>
             <h1><input className='w-full border p-2 rounded-sm focus:outline-none' type="text" placeholder='name@mail.com' /></h1>
            <button className='bg-[#3575F4] text-white py-2 w-full'>Subcribe</button>
            </div>
           </div>
           <div className='bg-white rounded-sm p-4'>
           <h1 className='text-xl capitalize font-bold'>🚀 Get noticed faster</h1>
            <p className='py-3'>Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure quis cupidatat in.</p>
            <div className='space-y-3'>
            <button className='bg-[#3575F4] text-white py-2 w-full'>Upload your resumc</button>
            </div>
           </div>
        </div>
    );
};

export default Rightjobs;