import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';


const LeftCard = (props) => {
    return (
        <div class="p-div">  
            <div class="p2-div1">
                <div class="hightlight"></div>
                <img class="img-hover" src={props.img} alt="left project"/>
            </div> 
            <div class="card-2-div1">
                <h1 class="p2-greenTitle">{props.type}</h1>
                <a href="#keeper"><h2>{props.title}</h2></a>
                <div class="project-info2">
                    <p>{props.description}</p>
                </div>
                <p class="p-tools2">{props.framework}</p>
                <div class="link-github2">
                <a href=""> <FontAwesomeIcon icon={faGithub} fade style={{color: "#63E6BE",}} /></a>
                <a href=""> <FontAwesomeIcon icon={faLinkSlash} style={{color: "gray",}} /></a>
                </div>
            </div> 
       </div>
    )
}

export default LeftCard;