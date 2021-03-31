import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


export default props => {
    return (
        <div>
            <Menu>
                <NavLink to="/main" className='menu-item'>Головна</NavLink>
                <NavLink to="/project" className='menu-item'>Проекти</NavLink>
                <NavLink to="/teams" className='menu-item'>Команда</NavLink>
                <NavLink to="/blog" className='menu-item'>Блог</NavLink>
                <NavLink to="/contact" className='menu-item'>Контакти</NavLink>
            </Menu>
        </div>

    );
};