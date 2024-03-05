import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import the skill list component 
import SkillList from '../SkillList/SkillList'
import NewSkillForm from '../New/NewSkillForm'

function App() {

  const list = ['skill list item']
  const form = ['form']


  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skillList={list} />
      <hr />
       <NewSkillForm  />

    


    </div>



  )
}

export default App
