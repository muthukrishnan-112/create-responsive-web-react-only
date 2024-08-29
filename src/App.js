import React  from "react";
import"./App.css";
import{Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import Footer from "./components/Footer";




function App() {
  return(
    <div className="App"> 
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="menu" element={<Menu/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
     
     
     
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App;
