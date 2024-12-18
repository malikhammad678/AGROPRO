import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Menu } from 'lucide-react'
const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const [sticky,setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 80){
          setSticky(true)
        }else{
          setSticky(false)
        }
      })
    })

    const togglemenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <div className={`header ${sticky ? 'active' : ''}`}>
      <a href="#" className="logo">AGRO<span>PRO</span></a>
      <nav className={`navbar ${openMenu ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <Menu size={32} onClick={togglemenu} className='menu' style={{color:'#333'}} />
    </div>
  )
}

export default Navbar
