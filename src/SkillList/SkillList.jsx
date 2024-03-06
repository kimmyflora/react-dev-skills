// Defining and exporting a component from this file
// to be rendered by another component

import SkillListItem from "../SkillListItems/SkillListItems"
import './SkillList.css'

export default function SkillList({skillList}) {




    
    const skillLi = skillList.map((item, idx) => {
        return(<SkillListItem key={idx} skill={item} />)


    })


    return(
        <ul className="App"> 
            {skillLi}
         
        </ul>
    )
z





}