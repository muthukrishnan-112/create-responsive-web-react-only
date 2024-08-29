import React ,{useState} from "react"
import { Link } from "react-router-dom"
import Logo from "../assets1/Pizza.png"
import '../style/Navbar.css';
import { IoReorderFour } from "react-icons/io5";




function Navbar() {
  const [openLinks,setOpenLinks]=useState(false)

 

  return ( 
    <div className="navbar">
    <div className="LeftSide" id={openLinks ? "open" : "close"}>
      <img src={Logo} alt=""/>
    </div>  
    {openLinks && <div className="hiddenLinks">
       <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

    </div>
    }
    <div className="RightSide">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <button  className="hiddenLink" onClick={()=>setOpenLinks(!openLinks)}><IoReorderFour /></button>
 </div>
</div>
  )
}

export default Navbar