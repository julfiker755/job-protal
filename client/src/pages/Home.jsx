import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import usePublicIncaptor from '../Hooks/usePublicIncaptor';
import Jobscard from '../components/Jobscard';
import Jobs from './Jobs';
import Container from '../shared/Container';
import LeftJobs from '../components/LeftJobs';
import Rightjobs from '../components/Rightjobs';

const Home = () => {
    const [query,setquery]=useState("")
    const [selectedquery,setselectquery]=useState("")
    const [selectdate,setselectdate]=useState("")
    const [jobs,setjobs]=useState([])
    const [loading,setloading]=useState(false)
    const axiospublic=usePublicIncaptor()

    const handlesubmit=e=>{
        e.preventDefault()
       setquery(e.target.name.value)
    }

    const handlchange=e=>{
        setselectquery(e.target.value)
    }
    
    const handldate=e=>{
        setselectdate(e.target.value)
    }
    
    // how to fetch data for website 
    useEffect(()=>{
        (async()=>{
            setloading(true)
           const {data}=await axiospublic.get("/jobs")
           setjobs(data)
           setloading(false)
        })()
        
    },[])
 

    // search jobs all select items
    const filterjob=jobs.filter(j=>j.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    


    // all search ----------------------------------start
    function filterdata(joball,selected,queryall,selectdate){
        let filterJobs=joball
        //button submit data for jobs
        if(queryall){
            filterJobs=filterjob
        }
        // set the selected data for site
        if(selected){
            filterJobs= filterJobs.filter(({jobLocation,maxPrice,salaryType,employmentType})=>(
               jobLocation.toLowerCase() === selected.toLowerCase() || parseInt(maxPrice) <= parseInt(selected) || salaryType.toLowerCase() === selected.toLowerCase() ||  employmentType.toLowerCase() === selected.toLowerCase()
             
            ))
        }
        // date filter 
        if(selectdate){
            filterJobs= filterJobs.filter(({postingDate})=> postingDate >= selectdate )
        }

    return filterJobs.map((data,i)=><Jobscard key={i} data={data}></Jobscard>)

    }
     // all search ----------------------------------end

    // filter function data call
    const jobresult=filterdata(jobs,selectedquery,query,selectdate)

    return (
        <div>
            <Banner setquery={setquery} handlesubmit={handlesubmit}></Banner>
            <div className='bg-[#FAFAFA] py-5 lg:py-10'>
            <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* left side */}
             <div className='hidden md:block'><LeftJobs handldate={handldate} handlchange={handlchange}></LeftJobs></div>



            {/* middle jobs */}
            <div className='col-span-1 lg:col-span-2 space-y-3'> 
            {loading ? (<h1 className='font-semibold text-xl'>Loading.......</h1>) : jobresult.length > 0 ? <Jobs result={jobresult}></Jobs> : <div className='bg-[white] p-4 space-y-2'>
                <h1 className='text-2xl'>{jobresult.length} Jobs</h1>
                <h1 className='text-[#171616] font-semibold'>Data not found</h1>
                </div>}
            
            </div>


            {/* right side */}
            <div className='md:hidden lg:block'><Rightjobs></Rightjobs></div>
            </div>
            </Container>
            </div>
        </div>
    );
};

export default Home;