import './NewSkillForm.css'

export default function NewSkillForm() {

    return (
        <form className='NewSkillForm'>
            <label> Skill<input type="text" /> </label>
            <select> 
                <label> Level </label>
                <option value="1">1 </option>
                <option value="2">2 </option>
                <option value="3">3 </option>
            </select>
            <button>ADD SKILL</button>
        </form>

    )
}