import './NewSkillForm.css'

//import to app
import { useState } from 'react'

export default function NewSkillForm({handleAddNewForm}) {

    // 
    const [newForm, setNewForm] = useState({
        name: '',
        level: 3
    })

    function handleChange(e){
        setNewForm({...newForm, [e.target.name] : e.target.value})

    }
    


    function handleSubmit(e){
        e.preventDefault()
        handleAddNewForm(newForm);
    
    }

    return (
        <form className='NewSkillForm' onSubmit={handleSubmit}>
            <label> Skill </label><input name='name' type="text" value={newForm.name} onChange={handleChange} />

            <label>Level </label> <select name='level' value={newForm.level} onChange={handleChange}> 
                <option value={1}>1 </option>
                <option value={2}>2 </option>
                <option value={3}>3 </option>
                <option value={4}>4 </option>
                <option value={5}>5 </option>
            </select>
            <button>ADD SKILL  </button>
        </form>

    )
}