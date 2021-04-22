import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './Sidebar_2.css';
import { push as Menu } from 'react-burger-menu';

let Navbar = (props) => {
  return (
    <div className='container slide'>
      <Menu {...props} >
        <NavLink to="/main" className='menu-item'>Головна</NavLink>
        <NavLink to="/project" className='menu-item'>Проекти</NavLink>
        <NavLink to="/teams" className='menu-item'>Команда</NavLink>
        <NavLink to="/blog" className='menu-item'>Блог</NavLink>
        <NavLink to="/contact" className='menu-item'>Контакти</NavLink>
        <NavLink to="/users" className='menu-item'>Студенти</NavLink>
      </Menu>
    </div>

  );
}

export default Navbar;