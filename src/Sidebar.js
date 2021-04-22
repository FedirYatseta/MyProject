import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


class Example extends React.Component {
    showSettings (event) {
      event.preventDefault();
     
    }
render() {
    return (
        <div>
            <Menu>
                <NavLink to="/main" className='menu-item'>Головна</NavLink>
                <NavLink to="/project" className='menu-item'>Проекти</NavLink>
                <NavLink to="/teams" className='menu-item'>Команда</NavLink>
                <NavLink to="/blog" className='menu-item'>Блог</NavLink>
                <NavLink to="/contact" className='menu-item'>Контакти</NavLink>
                <NavLink to="/test" className='menu-item'>test</NavLink>
            </Menu>
        </div>

    );
}}

export default Example