import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';


const RightCard = (props) => {
    return (
        <div class="p-div">
            <div class="p-div1">
                <div class="hightlight"></div>
                <img class="img-hover" src={props.img} alt="Project"/>
            </div>    

            <div class="p-div2">
                <h1 class="p-greenTitle">{props.type}</h1>
                <a href="#keeper"><h2>{props.title}</h2></a>
                <div class="project-info">
                    <p>{props.description}</p>
                </div>
                <p class="p-tools"> {props.framework}</p>
                <div class="link-github">
                    <a href=""><FontAwesomeIcon icon={faGithub} fade style={{color: "#63E6BE",}}/></a>
                    <a href=""><FontAwesomeIcon icon={faLinkSlash} style={{color: "gray",}} /></a>
                </div>
            </div>
        </div>
    );
}

export default RightCard;