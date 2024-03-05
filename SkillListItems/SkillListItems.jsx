// import to skill list


export default function SkillListItem({list}){
    // key list, is defined in the parents component
	// when the component is being rendered, 
	// refer SkillList, and look for the word list
    return (
        <li className='SkillListItem'>{list}</li>
        
    )
}