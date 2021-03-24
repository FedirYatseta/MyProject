import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./nav.module.css"

const Nav = () => {

    return (
        <div className={s.hamburger_menu}>
            <input id={s.menu__toggle} type="checkbox" />
            <label className={s.menu__btn} htmlFor={s.menu__toggle}>
                <span></span>
            </label>
            <div className={s.menu__box}>
                <div> <NavLink to="/main" activeClassName={s.menu__item}>Главная</NavLink></div>
                <div> <NavLink to="/project" activeClassName={s.menu__item}>Проекти</NavLink></div>
                <div> <NavLink to="/teams" activeClassName={s.menu__item}>Команда</NavLink></div>
                <div> <NavLink to="/blog" activeClassName={s.menu__item}>Блог</NavLink></div>
                <div> <NavLink to="/contact" activeClassName={s.menu__item}>Контакты</NavLink></div>
            </div>
        </div>
    )
}
export default Nav;