/*
import Armah from '../../assets/images/armah.png';
*/
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import './index.scss';
import Home_Data from '../Data/Data';
import Profile_Image from './Profile_Image';

const Home = () => {
  return (
    <div className="container home-page">
        <Link to="/resume" target='_blank' className="resume_button">MY RESUME</Link>
        <div className="text-zone">
            
            <h1> 
                <p className='greetings'>{Home_Data.greetings}</p>
                {Home_Data.last_name}
                <p className ='ideas'> {Home_Data.welcome_note} </p>
            </h1>
            <p className = 'note'> {Home_Data.content} </p>
            <h2>{Home_Data.titles}</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
        <Profile_Image/>
        <Loader type="pacman" />
    </div>  
  )
}

export default Home;
