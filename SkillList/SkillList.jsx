// Defining and exporting a component from this file
// to be rendered by another component

import SkillListItem from "../SkillListItems/SkillListItems"

export default function SkillList({skillList}) {

    const skillLi = skillList.map((item, idx) => {
        return(<SkillListItem key={idx} list={item} />)


    })

    return(
        <ul>
            {skillLi}
            {skillLi}
            {skillLi}
        </ul>
    )






}