import Member from './Member'
import Topic from './Topic'

function sectionSix() {
    return (
        <div>
            <div className='container m-auto px-12 flex flex-row justify-center mt-20'>
            <Topic title={'Our Team'} description={'We explore some of the latest trends and strategies'}/>
        </div>
        <div className='container m-auto px-12 flex flex-row justify-center mt-5'>
            <Member path={'./img/team01.jpg'} name={'Brian B. Rooney'}/>
            <Member path={'./img/team02.jpg'} name={'Raymond N. Gill'}/>
            <Member path={'./img/team03.jpg'} name={'Michelle C. Ward'}/>
        </div>
        </div>
    )
}

export default sectionSix
