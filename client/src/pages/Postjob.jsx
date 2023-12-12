import React, { useState } from 'react';
import Container from '../shared/Container';
import { useForm } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import Creatable from 'react-select/creatable';
const animatedComponents = makeAnimated();

// icons
import { MdFacebook } from "react-icons/md";

const Postjob = () => {
    const [selectskill,setselectskill]=useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.skill=selectskill
        console.log(data)
    }

    const options=[
        {value:'Javascript',label:'Javascript'},
        {value:'c++',label:'c++'},
        {value:'HTML',label:'HTML'},
        {value:'CSS',label:'CSS'},
        {value:'React js',label:'React js'},
        {value:'Express js',label:'Express js'},
        {value:'Node js',label:'Node js'},
    ]
    return (
        <Container>
            <div className='py-5'>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* left input */}
             <div className='space-y-3'>
              <div>
              <label  className="block mb-2 text-[17px]">JobTitle</label>
				<input {...register("jobTitle",)}  type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
              </div>
              <div>
              <label  className="block mb-2 text-[17px]">Maximum Salary</label>
				<input {...register("maxPrice",)}  type="text" className="w-full px-3 py-2 border rounded-md focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
              </div>
              <div>
              <label  className="block mb-2 text-[17px]">Salary Type</label>
                <select {...register("salaryType")}  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                 <option value=""  disabled selected>Choose Salary Type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
                </select>
              </div>

              <div>
              <label  className="block mb-2 text-[17px]">Posting Date</label>
				<input {...register("postingDate",)}  type="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
              </div>
              <div>
              <label  className="block mb-2 text-[17px]">Company Logo</label>
				<input {...register("companyLogo",)} placeholder='example::https://i.ibb.co/7KcLqGp/23-11-2023.png'  type="url" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
              </div>
              
              <div>
              <label  className="block mb-2 text-[17px]">Required Skill Sets:</label>
                            <Creatable
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                onChange={setselectskill}
                                isMulti
                                options={options}
                            />
              </div>
             </div>
             
             {/* right input */}
             <div className='space-y-3'>
            <div>
                <label  className="block mb-2 text-[17px]">Company Name</label>
				<input {...register("companyName",)}  type="text" className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
            </div>
            <div>
                <label  className="block mb-2 text-[17px]">Minimum Salary</label>
				<input {...register("minPrice",)}  type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
            </div>
            <div>
            <label  className="block mb-2 text-[17px]">Job Location</label>
                <input {...register("jobLocation",)}  type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
            </div>
            
            <div>
              <label  className="block mb-2 text-[17px]">Experience Level</label>
                <select {...register("experienceLevel")}  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                 <option value=""  disabled selected>Choose experience level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
                </select>
              </div>
              
              <div>
            <label  className="block mb-2 text-[17px]">Employment Type</label>
            <select {...register("employmentType")}  className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                 <option value=""  disabled selected>Choose Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
                </select>
            </div>
            <div>
              <label  className="block mb-2 text-[17px]">Job Posted by Email</label>
				<input {...register("email")}   type='email' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring" required/>
              </div>
             </div>
             {/* submit button use for side */}
             <div className='col-span-1 lg:col-span-2'>
             <label  className="block mb-2 text-[17px]">Description</label>
             <textarea defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" {...register("description")} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:ring">
                
                </textarea>
             </div>
            <button className='btn btn-primary col-span-1 lg:col-span-2'>add</button>
            </div>
           </form>
        </div>
          
        </Container>
    );
};

export default Postjob;