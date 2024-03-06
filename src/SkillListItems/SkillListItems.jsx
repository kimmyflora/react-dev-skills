// import to skill list
import './SkillListItems.css'

export default function SkillListItem({skill}){
    // key list, is defined in the parents component
	// when the component is being rendered, 
	// refer SkillList, and look for the word list
 
   

    return (
        <li className='SkillListItem'>
            {skill.name}  
            <span className='level'> Level  {skill.level}</span>
           
        
        </li>
        
    )
}