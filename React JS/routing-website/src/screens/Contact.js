import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div>
        Contact  
        <p>{location.state.name}</p>

    </div>
  )
}

export default Contact
