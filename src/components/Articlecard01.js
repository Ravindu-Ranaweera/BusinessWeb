import React from 'react'

function Articlecard01({path, name}) {
    return (
        <div className='flex-1'>
            <div className ='relative overflow-hidden w-96 h-104 rounded-md m-auto '>
                <img src = {path} className='w-full h-full object-cover transform transition duration-1000 ease-in-out hover:scale-110' alt = "" />
                <div className='absolute bottom-0.5 p-5'>
                    <h3 className='text-3xl font-bold text-white p-2'>{name} </h3>
                </div>
            </div>  
        </div>
    )
}

export default Articlecard01
