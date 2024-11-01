import { Outlet } from "react-router-dom"

const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa esse nulla, excepturi nobis, dignissimos assumenda molestias accusamus doloremque, magni quasi veniam illo beatae ut tempora omnis laboriosam asperiores! Voluptas.</p>
        
        <Outlet>
            
        </Outlet>
        </div>
  )
}

export default CareersLayout