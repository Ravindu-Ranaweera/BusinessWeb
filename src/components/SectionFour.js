import Middleimg from './Middleimg'
import BottomSlider from './BottomSlider'
import Topwave from './Topwave'

function SectionFour() {
    return (
        <div>
            <Topwave/>
            <Middleimg path={'./img/middle01.jpg'}/>
            <BottomSlider/>
        </div>
    )
}


// SectionFour.defaultProps ={
//     path: '',
// }

export default SectionFour
