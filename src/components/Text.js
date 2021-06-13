import ControlCameraIcon from '@material-ui/icons/ControlCamera';

function Text() {
    return (
        <div className='p-24'>
            <p className='text-5xl font-bold mb-10'>HR Solutions for Your Company</p>
            <p className='text-2xl mb-10'>We are a young and creative company and we offer you fresh HR ideas.</p>
            <p className='text-base mb-10'>Nifty team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions in the pursuit of making your business work better.</p>
            <ul className='list-none'>
            <li className='text-base my-4'><i className='text-yellow-600 mr-5'><ControlCameraIcon/></i>Valuation Services</li>
            <li className='text-base my-4'><i className='text-yellow-600 mr-5'><ControlCameraIcon/></i>Development of Financial Models</li>
            <li className='text-base my-4'><i className='text-yellow-600 mr-5'><ControlCameraIcon/></i>Corporate Financial Advisory</li>
            <li className='text-base my-4'><i className='text-yellow-600 mr-5'><ControlCameraIcon/></i>Deal Structuring</li>
            </ul>
        </div>
    )
}

export default Text
