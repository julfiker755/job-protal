import React from 'react';

const Jobs = ({result}) => {
    return (
        <>
            <h1 className='text-2xl font-semibold'>{result.length} Jobs</h1>
            {result}
        </>
    );
};

export default Jobs;