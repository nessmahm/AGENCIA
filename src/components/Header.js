import React from 'react'
import { useState ,useContext ,useEffect} from 'react';
import NavModal from '../modals/NavModal';
import NavLinks from './NavLinks';
import Reserver from './Reserver';
function Header() {
  const [menuIsOpen,setMenu]=useState(false);
  const [menuClass,setMenuClass]=useState("menu-icon");
  const handleMenu =  () => {
    setMenu(!menuIsOpen)
    if(menuClass=="menu-icon" ) 
    setMenuClass("menu-icon menu-change");
    else setMenuClass("menu-icon")
  };
  
  return (
  <div className="header">
    
    <div className="logo">AGENCIA</div>

    
    <div className={menuClass  } onClick={handleMenu }>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
    <NavLinks/>
   {  menuIsOpen &&   <NavModal />   } 

  </div> 
   
  )
}

export default Header