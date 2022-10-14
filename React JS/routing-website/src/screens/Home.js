import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

  const[list,setList] = useState([
    {
      id:1,
      name:'Ehtisham',
      age:30
    },{
      id:2,
      name:'Zeeshan',
      age:30
    },{
      id:3,
      name:'Aneeq',
      age:18
    },{
      id:4,
      name:'Abdullah',
      age:30
    },

  ])


  let navigate = useNavigate()
  let moveData = (data) => {
    navigate('/contact',{
      state:data
    })
  }
  return (
    <div>
         Home
        {/* <button onClick={moveData()} >Move To Contact With Data</button>       */}

        {
          list.map((e,i)=>
          <p key={i} onClick={()=>moveData(e)} >{e.name}</p>
          )
        }


    </div>
  )
}

export default Home