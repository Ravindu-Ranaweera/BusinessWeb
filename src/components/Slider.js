

function Slider() {
    return (
        <div >
            <div  className='relative' >
            <img className='absolute w-1/4 top-64 object-cover ' src={'./img/floating_image_04.png'}/>
            <img className='absolute w-1/2  right-1/3  -top-72 object-cover ' src={'./img/floating_image_01.png'}/>
            <img className='absolute w-5/12    top-56 right-8 object-cover ' src={'./img/floating_image_02.png'}/>
            </div>
            <div  className='relative w-full h-screen  -z-1' >
                <img className='absolute w-full h-full object-cover' src={'./img/slider.jpg'}/>
            </div>
            
            
            
            
        </div>
        
    )
}

export default Slider
