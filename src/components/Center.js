import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';

function Center() {
    return(
        <div className='flex-1'>
            <h3><span><PhoneForwardedIcon/></span> 1-800-700-600</h3>
            <h3><span><DraftsIcon/></span> info@hr-themes.com</h3>
            <h3><span><HomeIcon/></span> 60 East 2nd Street Colombo 9</h3>
        </div>
    );
}

export default Center;