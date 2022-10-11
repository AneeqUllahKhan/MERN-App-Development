import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  let clickEV =() =>{
    navigate('/')
  }

  let clickEVS =() =>{
    navigate('/about')
  }

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={clickEV} >Go to home</button>
      
      <button onClick={clickEVS} >Go to about</button>
      
    </div>
  )
}

export default Contact
