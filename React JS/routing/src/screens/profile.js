import React from 'react'
import {useParams} from 'react-router-dom'

const Profile = () => {

    const param = useParams()

  return (
    <div>

        <h1>Welcome To {param.id}</h1>

      
    </div>
  )
}

export default Profile
