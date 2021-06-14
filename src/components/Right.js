import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Right() {
    return(
        <div className='flex-1 p-5'>
          <h3 className=' text-lg font-medium text-gray-600 p-2'>Connect</h3>

          <div className='p-2'>
                        <i className='mx-2'><FacebookIcon /></i>
                        <i className='mx-2'><LinkedInIcon /></i>
                        <i className='mx-2'><TwitterIcon /></i>
                   </div>
          <p className=' text-base font-medium text-gray-600 p-2'>We bring the years, global experiance, stamina to guide our clients through new and often disruptive realities</p>
        </div>
    );
}

export default Right;