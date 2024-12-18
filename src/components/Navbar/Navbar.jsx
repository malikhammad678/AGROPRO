import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation(); // Get the current route

  // Check if the current route is a specific page where you want to hide the navbar
  const shouldHideNavbar = location.pathname !== '/';

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const togglemenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`header ${sticky ? 'active' : ''} ${shouldHideNavbar ? 'hidden' : ''}`}>
      <a href="/" className="logo">AGRO<span>PRO</span></a>
      <nav className={`navbar ${openMenu ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <Menu size={32} onClick={togglemenu} className='menu' />
    </div>
  );
}

export default Navbar;
