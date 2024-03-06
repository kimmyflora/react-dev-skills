import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the skill list component 
import SkillList from "./SkillList/SkillList"
import NewSkillForm from './New/NewSkillForm'

function App() {

  
  const form = ['form']

  const [skills, setSkills] = useState([
 { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])
   
  


  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skillList={skills} />
      <hr />
       <NewSkillForm  />

    


    </div>



  )
}

export default App
