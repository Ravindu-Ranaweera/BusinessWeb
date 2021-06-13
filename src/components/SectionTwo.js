import Card from './Card'
import Text from './Text'

function SectionTwo() {
    return (    
        <div className='container m-auto px-12 flex flex-row justify-center mt-20'>
            <div className='flex-2 m-auto'><Text /></div>
            <div className='flex-1 '>
            <div className='mb-10 mt-14'><Card text={'HR Consultancy & Solutions'} path={'./img/1.jpg'}/></div>
            <div className='mb-10'><Card text={'Customized Talent Acquisition'} path={'./img/2.jpg'}/></div>
            </div>
            <div className='flex-1 ml-5'> 
            <div className='mb-10'><Card text={'HR On-Demand Subscription'} path={'./img/3.jpg'}/></div>
            <div className='mb-10'><Card text={'Training & Development'} path={'./img/4.jpg'}/></div>
            </div>
        </div>
    )
}

export default SectionTwo
