import React from 'react'

function Middleimg({path}) {
    return (
        <div>
            <div  className='relative' >
            <img className='absolute w-1/4 top-16 object-cover ' src={'./img/floating_image_02.png'}/>
            <img className='absolute w-5/12  top-56 right-8 object-cover ' src={'./img/floating_image_01.png'}/>
            </div>
            <div  className='relative w-full h-screen  -z-1' >
                <img className='absolute w-full h-full object-cover' src={path}/>
            </div>
        </div>
    )
}

export default Middleimg
