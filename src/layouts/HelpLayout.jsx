import {NavLink, Outlet}  from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt veritatis ullam error, culpa praesentium et esse sapiente dolor quod adipisci dignissimos atque blanditiis nihil vitae ipsam aspernatur, hic veniam!</p>
    
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
    
    <Outlet/>
    </div>
  )
}

export default HelpLayout
