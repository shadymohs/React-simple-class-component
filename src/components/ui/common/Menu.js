import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from "react-router-dom";
import {isLogged, handleLogOut} from '../../services/handler/SessionHandler';

class Menu extends React.Component{  
  logOutAction(){
    handleLogOut();
  }
  render(){
    const t = this.props.t;
    // eslint-disable-next-line
    const myClassName = localStorage.getItem('lng') == 'en'? 
      'w3-bar-item w3-button w3-hide-small w3-hover-white' : 
      'w3-bar-item-ar w3-button w3-hide-small w3-hover-white';
    // eslint-disable-next-line
    const myClassNameHome = localStorage.getItem('lng') == 'en'? 
      'w3-bar-item w3-button w3-teal' : 
      'w3-bar-item-ar w3-button w3-teal';
    if(isLogged()){
      return (
        <div>
          <Link className={myClassNameHome} to="/">{t('menu.home')}</Link>
          <Link className={myClassName} to="/about">{t('menu.about')}</Link>
          <Link className={myClassName} to="/contact">{t('menu.contact')}</Link>
          <button className={myClassNameHome} onClick={this.logOutAction}>
            {t('menu.logout')}
          </button>
         </div>
      )
    }else{
      return(
        <div>
          <Link className={myClassNameHome} to="/login">{t('menu.login')}</Link>
        </div>
      )
    }
  }
}

export default withNamespaces() (Menu);
