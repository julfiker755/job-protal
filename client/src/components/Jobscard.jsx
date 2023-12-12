import React from 'react';
import { MdOutlineLocationOn,MdOutlineAttachMoney,MdOutlineDateRange  } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const Jobscard = ({data}) => {
    const {_id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,employmentType,description}=data
   
    return (
        <div className='bg-[white] p-3 rounded-md flex gap-3'>
           <img className='w-fit h-fit hidden lg:block' src={companyLogo} alt="" />
           <div>
             <h1 className='text-base lg:text-xl'>{companyName}</h1>
             <h1 className='text-2xl lg:text-3xl font-semibold lg:py-1'>{jobTitle}</h1>
             {/* phone tablet use...xs,sm,md.... */}
             <div className='flex items-center gap-6 lg:hidden'>
             <ul className='flex-row justify-between text-[#696868] py-2'>
                <li className='flex gap-[1px] items-center'><MdOutlineLocationOn/>{jobLocation}</li>
                <li className='flex gap-[1px] items-center'><IoTimeOutline />{employmentType}</li>
                <li className='flex gap-[1px] items-center'><MdOutlineAttachMoney/>{minPrice}-{maxPrice}</li>
                <li className='flex gap-[1px] items-center'><MdOutlineDateRange/>{postingDate}</li>
             </ul>
             <img className='w-fit h-fit border p-2 rounded-md' src={companyLogo} alt="" />
             </div>
             {/* laptop use lg,xl...  */}
             <ul className='hidden lg:flex justify-between text-[#696868] py-2'>
                <li className='flex gap-[1px] items-center'><MdOutlineLocationOn/>{jobLocation}</li>
                <li className='flex gap-[1px] items-center'><IoTimeOutline />{employmentType}</li>
                <li className='flex gap-[1px] items-center'><MdOutlineAttachMoney/>{minPrice}-{maxPrice}</li>
                <li className='flex gap-[1px] items-center'><MdOutlineDateRange/>{postingDate}</li>
             </ul>
             <p className='text-[#696868]'>{description}</p>
           </div>
        </div>
    );
};

export default Jobscard;