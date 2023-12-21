// LanguageSelector.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/LanguageSelectors.css';

 function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
 <div class="dropdown">
  <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Lan
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button" onClick={() => changeLanguage('en')}>English</button>
    <button class="dropdown-item" type="button" onClick={() => changeLanguage('ar')}>العربية</button>
  </div>
</div> 



  // {/* <button class="dropdown-item" type="button" onClick={() => changeLanguage('en')}>English</button>
  //  <button class="dropdown-item" type="button" onClick={() => changeLanguage('ar')}>العربية</button> */}

  );
}

export default LanguageSelector;
