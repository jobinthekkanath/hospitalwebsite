import React,{useState} from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import scrollclick from '../pages/ScrollClick/ScrollClick'


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <div className="navbar-outer">
      <div className="nav-center">
        <div className="navbar-toggle" onClick={toggleMenu}>☰</div> {/* Toggle button */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="navbar-logo-img"/>
        </div>
        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu-ul">
            <li ><Link to='/' className="navbar-menu-ul-home" onClick={() => {scrollclick(); closeMenu();}}>Home</Link></li>
            <li><Link to='/services' className="navbar-menu-ul-home" onClick={() => {scrollclick(); closeMenu();}} >Services</Link></li>
            <li><Link to='/docters' className="navbar-menu-ul-home" onClick={() => {scrollclick(); closeMenu();}} >Docters</Link></li>
            <li><Link to='/contact' className="navbar-menu-ul-home"  onClick={() => {scrollclick(); closeMenu();}}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="navbar-appoinment-btn">
          <Link to="/appoinment" className="navbar-appoinment-btn-link" onClick={scrollclick}  >
            Book Appoinment
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;
