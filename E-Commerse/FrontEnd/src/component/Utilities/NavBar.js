import React, { useState } from "react";
import "../Styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { useSelector } from "react-redux";
import LanguageSelector from "./LanguageSelector";

function NavBar() {
    const { t, i18n } = useTranslation();

    const state = useSelector((state) => state.handleCart)
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <NavLink to="/" className="nav__brand">
                <span style={{ color: '	aqua' }}>D O</span>L L<span style={{ color: 'aqua' }}>A B Y</span></NavLink>
            <ul className={active}>
                <li className="nav__item">
                    <NavLink to="/" className="nav__link"> <i className="fa-solid fa-house"></i>  {t('Home')}</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/products" className="nav__link"  > <i className="fa-solid fa-shirt"></i> {t('Product')} </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/cart" className="nav__link"> <i className="fa fa-shopping-cart me-1"></i> {t('Cart')} {state.length} </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/review' className="nav__link"><i class="fa-solid fa-star"></i>{t('Reviews')}</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to='/login' className="nav__link"><i className="fa fa-sign-in me-1"></i>   {t('SignIn')} </NavLink>
                </li>
               <li className="nav__item .nav__link mx-5"> <LanguageSelector /></li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );

}

export default NavBar;