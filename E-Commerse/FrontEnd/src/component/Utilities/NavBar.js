import { useState } from "react";
import "../Styles/NavBar.css";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import LanguageSelector from "./LanguageSelector";




function NavBar() {
    const { t, i18n } = useTranslation();
    const state = useSelector((state) => state.handleCart);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                <span style={{ color: 'aqua' }}>D O</span>L L<span style={{ color: 'aqua' }}>A B Y</span>
            </a>

            <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        
                <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
            </button>
            <div className={`navigation-menu ${isNavExpanded ? 'expanded' : ''}`}>
                <ul>
                    <li>
                        <a href="/" className="nav__link"> <i className="fa-solid fa-house"></i>  {t('Home')}</a>
                    </li>
                    <li>
                        <a href="/products" className="nav__link"  > <i className="fa-solid fa-shirt"></i> {t('Product')} </a>
                    </li>
                    <li>
                        <a href="/cart" className="nav__link"> <i className="fa fa-shopping-cart me-1"></i> {t('Cart')} {state.length} </a>
                    </li>
                    <li>
                        <a href='/review' className="nav__link"><i className="fa-solid fa-star"></i>{t('Reviews')}</a>
                    </li>
                    <li>
                        <a href='/login' className="nav__link"><i className="fa fa-sign-in me-1"></i>   {t('SignIn')} </a>
                    </li>
                    <li>
                    <LanguageSelector />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;