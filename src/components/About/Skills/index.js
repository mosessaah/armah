import backend_image  from './images/backend.png'
import frontend_image  from './images/front-end.png'
import sa_image  from './images/solution-architect.png'
import Devops_image  from './images/devops.png'
import './index.scss';



function Skills() {

    return (
        <>
            <div class="my-skills" id="border">
                <div>
                    <img src={frontend_image} alt="frontend_image "/>
                    <h1>Front-End</h1>
                    <p className='sp'>html | css | JS | React | Figma | BootStrap</p>
                </div>
                <div>
                    <img src={backend_image} alt="backend_image"/>
                    <h1>Backend</h1>
                    <p className='sp'>NodeJs | Django | MongoDb | MySql | APIs | Flask</p>
                </div>
                <div>
                    <img src={Devops_image} alt="Devops_image"/>
                    <h1>DevOps</h1>
                    <p className='sp'>Jenkins | Docker | Kubernetes | Terraform | Figma | BootStrap</p>
                </div>
                <div>
                    <img src={sa_image} alt="sa_image"/>
                    <h1>Cloud</h1>
                    <p className='sp'>html | css | JS | React | Figma | BootStrap</p>
                </div>
            </div>
        </>  
    );
}
export default Skills;
