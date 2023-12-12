

const LeftJobs = ({handlchange,handldate}) =>{
    const now=new Date()
    const twentyfourhoursage=new Date(now - 24 * 60 *60 *1000)
    const sevendayage=new Date(now - 7*24 * 60 *60 *1000)
    const thritydayage=new Date(now - 30*24 * 60 *60 *1000)
    
    // convart to string
    const twentyfourhoursagedate=twentyfourhoursage.toISOString().slice(0,10)
    const  sevendayagedate=sevendayage.toISOString().slice(0,10)
    const thritydayagedate=thritydayage.toISOString().slice(0,10)
   

    return (
        <div>
            <h1 className='text-xl font-bold py-3'>Filters</h1>
            {/* location filter by data */}
            <h1 className="py-1 font-semibold">Location</h1>
            <ul className='p-2'>
                <li><input type='radio' onChange={handlchange} name='location' value=""/><span>{" "}All</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="London"/><span> {" "}London</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="Brussels"/><span> {" "}Brussels</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="Boston"/><span> {" "}Boston</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="Seattle"/><span> {" "}Seattle</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="San Francisco"/><span> {" "}San Francisco</span></li>
                <li><input type='radio' onChange={handlchange} name='location' value="Bangladesh"/><span> {" "}Bangladesh</span></li>
            </ul>
             {/* Salary filter by data */}
             <h1 className="py-1 font-semibold">Salary</h1>
            <ul className='p-2'>
                <li><input type='radio' onChange={handlchange} name='Salary' value=""/><span>{" "}All</span></li>
                <li><input type='radio' onChange={handlchange} name='Salary' value="30"/><span> {" "}30$</span></li>
                <li><input type='radio' onChange={handlchange} name='Salary' value="50"/><span> {" "} 50$</span></li>
                <li><input type='radio' onChange={handlchange} name='Salary' value="80"/><span> {" "}80$</span></li>
                <li><input type='radio' onChange={handlchange} name='Salary' value=" 10"/><span> {" "} 10$</span></li>
            </ul>
             {/* Date of posting filter by data */}
             <h1 className="py-1 font-semibold"> Date of posting</h1>
            <ul className='p-2'>
                <li><input type='radio' onChange={handldate} name='postingdate' value=""/><span>{" "}All time</span></li>
                <li><input type='radio' onChange={handldate} name='postingdate' value={twentyfourhoursagedate}/><span> {" "}Last 24 hours</span></li>
                <li><input type='radio' onChange={handldate} name='postingdate' value={sevendayagedate}/><span> {" "} Last 7 days</span></li>
                <li><input type='radio' onChange={handldate} name='postingdate' value={thritydayagedate}/><span> {" "}Last 30 days</span></li>
            </ul>
             {/* Type of employment filter by data */}
             <h1 className="py-1 font-semibold">Type of employment</h1>
            <ul className='p-2'>
                <li><input type='radio' onChange={handlchange} name='employment' value="Full-time"/><span> {" "}Full-time</span></li>
                <li><input type='radio' onChange={handlchange} name='employment' value="Temporary"/><span> {" "} Temporary</span></li>
                <li><input type='radio' onChange={handlchange} name='employment' value="Part-time"/><span> {" "}Part-time</span></li>
            </ul>
        </div>
    );
};

export default LeftJobs;