import React from 'react';
import s from './Footer.module.css';
import logo from '../../icon/logo192.png'
import facebook from '../../icon/facebook.png'
import instagram from '../../icon/instagram.png'
import youtube from '../../icon/youtube.png'

const Footer = () => {
    return (
        <div className={s.content}>
            <div className={s.block__element_1} >Відгуки</div>
            <div className={s.block__element_2} >
                <a href="https://uk.reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="" srcSet="" />  </a>
            </div>

            <div className={s.block__element_3} >
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" srcSet="" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" srcSet="" /></a>
                    <a href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="" srcSet="" /></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;