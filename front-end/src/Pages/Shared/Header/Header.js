import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/appointment'>Appointment</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
    </>

    const html = document.getElementsByTagName('html')[0];

    return (
        <header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl no-animation p-0 m-0">Doctor's Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn" onClick={() => {
                        html.getAttribute('data-theme') === 'dark' ?
                            html.setAttribute('data-theme', 'light')
                            :
                            html.setAttribute('data-theme', 'dark')
                    }}>Get started</button>
                </div>
            </div>
        </header>
    );
};

export default Header;