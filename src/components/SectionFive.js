import Articlecard01 from './Articlecard01'
import Articlecard02 from './Articlecard02'
import Topic from './Topic'

function SectionFive() {
    return (
        <div>
            <div>
            <div className='container m-auto px-12 flex flex-row justify-center mt-20'>
                <Topic title={'Latest Articles'} description={'We explore some of the latest trends and strategies'}/>
            </div>
        </div>
        <div className='container flex flex-col justify-center px-12 mt-20'>
            <div className='flex  flex-row justify-center flex-1 px-8 my-12'>
                <Articlecard02  path={'./img/a1.jpg'} title={'Why Purpose-Driven Employers Succeed'} text={'Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive.'}/>
                <Articlecard01 path={'./img/a2.jpg'} name={'What Does The Future Of Recruitment Look Like?'}/>
                <Articlecard02 path={'./img/a3.jpg'} title={'Statistics You Need to Share With Your Leaders'} text={'Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.'}/>

            </div>

            <div className='flex  flex-row justify-center flex-1 px-8'>
                <Articlecard01 path={'./img/a4.jpg'} name={'The 4 Most Effective Incentives for Employees'}/>
                <Articlecard02 path={'./img/a5.jpg'} title={'How Employer Teams Can Respond to a Crisis'} text={'Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with'}/>
                <Articlecard01 path={'./img/a6.jpg'} name={'Coping Under the Current Economic Climate'}/>

            </div>
            
        </div>
        </div>
    )
}

export default SectionFive
