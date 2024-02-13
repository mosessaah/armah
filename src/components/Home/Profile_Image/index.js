import './index.scss';
import Armah from './images/Yeah.jpeg';



const Profile_Image = () => {
    return (
        <div className='border'>  
             <img src={Armah} alt='Profile head shot'/>
             <div className="box"></div>
        </div>
    );
}

export default Profile_Image;