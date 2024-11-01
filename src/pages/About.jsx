import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {
  const [user, setUser] = useState("mario")

  if (!user){
    return <Navigate to="/" replace={true}/>
  }
  return (
    <div className='About'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ut pariatur excepturi blanditiis sunt autem voluptatum sit officia recusandae aperiam enim, expedita nostrum ipsa id magni! Provident fuga incidunt quibusdam!</p>
    
    <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
