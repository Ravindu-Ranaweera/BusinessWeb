import React from 'react'

function Articlecard02({path,title,text}) {
    return (
        
        <div className='flex-1'>
            <div className='a2 w-96 h-104  bg-white rounded-lg overflow-hidden filter drop-shadow-xl m-auto ' >
            <div className='w-96 h-80  overflow-hidden  '>
            <img  className='w-full h-full   object-cover  transform transition duration-1000 ease-in-out hover:scale-110 ' src={path} />
            </div>
            <div>
                <h3 className='text-2xl font-medium p-5'>{title}</h3>
                <p className='text-sm px-5'>{text}</p>
            </div>

        </div>
        </div>
    )
}

export default Articlecard02
