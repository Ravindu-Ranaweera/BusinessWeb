
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Topbar() {
    return (
        <div className='bg-black h-12 px-20 '>
            <div className='container mx-auto flex flex-row justify-center p-2'>
                <div className='flex-1'>
                    <h1 className='text-white inline-block mx-2'><span><LocationOnIcon /></span>310 West 14th North Street, NY</h1>
                    <h1 className='text-white inline-block mx-2'><span><PhoneAndroidIcon /></span>(+1) 88 700 600</h1>
                </div>

                <div className='flex-1 '>
                   <div className='float-right'>
                        <i className='text-white mx-2'><FacebookIcon /></i>
                        <i className='text-white mx-2'><LinkedInIcon /></i>
                        <i className='text-white mx-2'><TwitterIcon /></i>
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
