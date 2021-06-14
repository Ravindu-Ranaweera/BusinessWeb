import Left from './Left';
import Right from './Right';
import Center from './Center';

function SectionEight() {
    return(
        <div className='container m-auto px-12 flex flex-row justify-center mt-20'>
            <Left/>
            <Center/>
            <Right/>
        </div>
    );

}

export default SectionEight;