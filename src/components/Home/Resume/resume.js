
import './resume.scss';
import Armah from '../Profile_Image/images/Yeah.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faPray,
    faPlaneArrival,
    faSoccerBall,
    faComputer,
    faDatabase,
    faCloud,
    faTools
  } from '@fortawesome/free-solid-svg-icons';


const Resume = () => {

    return (
 
        <section>
            <div className='resume'>
                <div class="left-side">
                    <br/>
                    <div class="content">
                        <h3>Address</h3>
                        <p>74133 Tulsa, Ok  United Kingdom</p>
                    </div>
                    <br/>
                    <img src={Armah} width="100%" class="profile-img" alt="profile head shot"/>
                    <div class="content">
                        <h2>CONTACT</h2>
                        <h4>Phone</h4>
                        <p>+9183501264</p>
                        <h4>Email</h4>
                        <p>mosessaah@oru.edu</p>
                        <h4>Website</h4>
                        <p>armah.github.io</p>
                    </div>

                    <div class="content">
                        <h2>REFERENCE</h2>
                        <h4>Stephen Wheat</h4>
                        <p>Department Chairman | Oral Roberts<br/>
                        T: +3334-3484-3223</p>
                    </div>

                    <div class="content">
                        <h2>HOBBIES</h2>
                        <ul className='ex1'>
                            <li><FontAwesomeIcon icon={faPlaneArrival} color="#4d4d4e" /><span>Travel</span></li>
                            <li><FontAwesomeIcon icon={faMusic} color="#4d4d4e" /><span>Music</span></li>
                            <li><FontAwesomeIcon icon={faSoccerBall} color="#4d4d4e" /><span>Soccer</span></li>
                            <li><FontAwesomeIcon icon={faPray} color="#4d4d4e" /><span>Praying</span></li>
                        </ul>
                    </div>
                    <br/><br/>
                </div>
                <div class="right-side">
                    <div class="rightside-content">
                        <h1 className='rh1'>ARMAH <br/><strong>SAAH JR</strong></h1>
                        <br></br>
                        <p class="para">SOFTWARE / DEVOPS ENGINEER</p>
                        
                        <h2>ABOUT ME</h2>
                        <p class="para1">I am a passionate and dedicated yound man orinally for Liberia. 
                            For some reason it was always my dream to come to America and get educated. 
                            Today, with what I've so far, I find joy in creating and finding solutions to problems. </p>
                  
                        <h2>EDUCATION</h2>
                        <h4 class="sub-heading">B.S.C, COMPUTER SCIENCE </h4>
                        <p class="para1">Oral Robert University Address: 7777 S Lewis Ave, Tulsa, OKlahoma 74171 May 2024</p>
                        
                        <h4 class="sub-heading">Cloud Solution Architect </h4>
                        <p class="para1">AWS Coursera online March 2024</p>

                        <h4 class="sub-heading">IBT CERTIFIED DevOps Engineer Professional</h4>
                        <p class="para1">IBT Learning, Fort Worth, TEXAS August 2023</p>

                        <h2>RELATED EXPERIENCE </h2>
                        <h4 class="sub-heading">N-MRS Oral Roberts University</h4>
                        <p class="para2"><span>Present</span> FULL STACK DEVELOPER</p>
                        <p class="para1"> Leading a team of three members that will develop a 
                        well-tested and data sharing based Medical Record System that will enhance and secure patient-doctor 
                        relationship in the nation Nigerian.</p>

                        <h4 class="sub-heading"> AMAZON FULLFILLMENT CENTER</h4>
                        <p class="para2"><span>2022 - Present</span> FC Associate I, L1</p>
                        <p class="para1">Tulsa OK</p>

                        <br/>

                        <h2>EXPERTISE</h2>
                        <ul class="ex2">
                            <li><FontAwesomeIcon icon={faComputer} color="#4d4d4e" /><span>FRONTEND</span></li>
                            <li><FontAwesomeIcon icon={faDatabase} color="#4d4d4e" /><span>BACKEND</span></li>
                            <li><FontAwesomeIcon icon={faTools} color="#4d4d4e" /><span>DEVOPS</span></li>
                            <li><FontAwesomeIcon icon={faCloud} color="#4d4d4e" /><span>AWS</span></li>
                        </ul>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>

        </section>
        
    );

};

export default Resume;
