import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(0)
    
    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }
    
    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const handleLogout = async () => {
        try {
            // Call logout API
            await fetch('http://localhost:3002/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            
            // Clear user data from localStorage
            localStorage.removeItem('user');
            
            // Redirect to frontend (Zerodha clone homepage)
            window.location.href = 'http://localhost:3000';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    const menuClass = "menu"
    const activeMenuClass= "menu selected"

  return (
    <div className='menu-container'>
        <img src="kite-logo.svg" style={{width: "50px"}} alt="Logo" />
        <div className='menus'>
            <ul>
                <li>
                    <Link style={{textDecoration:"none"}} to="/" onClick={()=> handleMenuClick(0)}>
                        <p className={selectedMenu===0 ? activeMenuClass: menuClass}>Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none"}} to="/orders" onClick={()=> handleMenuClick(1)}>
                        <p className={selectedMenu===1 ? activeMenuClass: menuClass}>Orders</p>
                    </Link>
                </li>
                <li>
                    <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=> handleMenuClick(2)}>
                        <p className={selectedMenu===2 ? activeMenuClass: menuClass}>Holdings</p>
                    </Link>
                </li>
                <li>
                    <p><Link style={{textDecoration:"none"}} to="/positions" onClick={()=> handleMenuClick(3)}>
                        <p className={selectedMenu===3 ? activeMenuClass: menuClass}>Positions</p>
                    </Link></p>
                </li>
                <li>
                    <p><Link style={{textDecoration:"none"}} to="/funds" onClick={()=> handleMenuClick(4)}>
                        <p className={selectedMenu===4 ? activeMenuClass: menuClass}>Funds</p>
                    </Link></p>
                </li>
                <li>
                    <p><Link style={{textDecoration:"none"}} to="/apps" onClick={()=> handleMenuClick(5)}>
                        <p className={selectedMenu===5 ? activeMenuClass: menuClass}>Apps</p>
                    </Link></p>
                </li>
            </ul>
            <hr />
            <div className='profile' onClick={handleLogout} style={{cursor: 'pointer'}}>
                <div className='avatar'>🚪</div>
                <p className='username'>LOGOUT</p>
            </div>
        </div>

    </div>
  )
}

export default Menu;