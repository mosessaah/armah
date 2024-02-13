import Skills from './Skills'
import './index.scss'
import Sidebar from '../Sidebar'
import Loader from 'react-loaders'
import Spinball from './Spinball/Spinball'




const About = () => {

  return (
    <>
      <Sidebar/>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="abt-head"> About Me </h1>
          <p>
            I'm a very ambitious dedicated developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. I enjoy 
            learning new skills, architeching solution and implementing them in real life! 
          </p>
          <p>
            These are some fun activities I also enjoy doing with free time:
          </p>

          <div className='other-activities'>
            <ul>
              <li>Pianist</li>
              <li>Playing Soccer</li>
              <li>Hanging Out</li>
            </ul>

            <ul>
              <li>Praying</li>
              <li>skating</li>
              <li>playing volley Ball</li>
            </ul>
          </div>
          <Spinball/>
          <h2 className='expert'> My area of expertise...</h2>
        </div>
        <Skills/>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
