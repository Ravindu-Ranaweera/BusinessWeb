import Member from './Member'

function sectionSix() {
    return (
        <div className='container m-auto px-12 flex flex-row justify-center mt-20'>
            <Member path={'./img/team01.jpg'} name={'Brian B. Rooney'}/>
            <Member path={'./img/team02.jpg'} name={'Raymond N. Gill'}/>
            <Member path={'./img/team03.jpg'} name={'Michelle C. Ward'}/>
        </div>
    )
}

export default sectionSix
