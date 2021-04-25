import React from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

class LanguageHandler extends React.Component{
  render(){    
    const { t } = this.props;
    const changeLanguage = () => {
      // eslint-disable-next-line
      if(localStorage.getItem('lng') == 'ar'){
        i18n.changeLanguage('en');
        localStorage.setItem('lng', 'en');
        localStorage.setItem('dir', 'ltr');
      }else{
        i18n.changeLanguage('ar');
        localStorage.setItem('lng', 'ar');
        localStorage.setItem('dir', 'rtl');
      }    
    }
    if(localStorage.getItem('lng') == null){
      i18n.changeLanguage('ar');
      localStorage.setItem('lng', 'ar');
      localStorage.setItem('dir', 'rtl');
    }
    document.getElementsByTagName('html')[0].setAttribute("dir", localStorage.getItem('dir'));
    // eslint-disable-next-line
    const myClassName = localStorage.getItem('lng') == 'en'? 
      'w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal' : 
      'w3-bar-item w3-button w3-hide-small w3-left w3-hover-teal';
    return (
      <button className={myClassName} onClick={() => changeLanguage()}>{t('lang')}</button>
    )
  }
}

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default withNamespaces() (LanguageHandler);