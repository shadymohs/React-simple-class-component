import React from 'react';
import Menu from './Menu';
import LanguageHandler from '../../services/handler/LanguageHandler';

class Header extends React.Component{
  render(){
    //const { t } = this.props;
    return (
      <div className="w3-bar w3-theme-d2 w3-left-align">
        <LanguageHandler/>
        <Menu/>
      </div>
    )
  }
}

export default Header;
