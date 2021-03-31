import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
  
    return (<div className={s.content}>
        <div className={s.contact, s.block__element_1}  >контакти</div>
         <div className={s.logo, s.block__element_2} >лого</div>
         <div className={s.map, s.block__element_3} >Карта</div>
    </div>)
}


export default Footer;


