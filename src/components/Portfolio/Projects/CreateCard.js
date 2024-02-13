
import LeftCard from "./Left";
import RightCard from "./Right";


function CreateCard (Project_Info) {
    // Now, the object data to the chosen card
    if (Project_Info.id % 2 === 1 ) {
        return (
            <>
                <LeftCard
                    key = {Project_Info.id}
                    img = {Project_Info.imgURL} 
                    type = {Project_Info.type}
                    title =  {Project_Info.title}
                    description = {Project_Info.description}
                    framework = {Project_Info.frameworks}
                />
            </>
        )
    } else {
        return (
            <>
                <RightCard
                    key = {Project_Info.id +1}
                    img = {Project_Info.imgURL} 
                    type = {Project_Info.type}
                    title =  {Project_Info.title}
                    description = {Project_Info.description}
                    framework = {Project_Info.frameworks}
                />
            </>
        )
    }
}

export default CreateCard;