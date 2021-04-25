import React from 'react';
import { withNamespaces } from 'react-i18next';
import {loginhandler} from '../../services/handler/SessionHandler'

class Contact extends React.Component{
  state = {
    userName : "",
    password : ""
  };

  setUserName = e => {
    this.setState({ ...this.state, userName:e.currentTarget.value} );
  }
  setPassword = e => {
    this.setState({ ...this.state, password:e.currentTarget.value });
  }
  loginAction = e => {
    e.preventDefault(); 
    if(!loginhandler(this.state.userName, this.state.password))
      alert(this.props.t('login.faild'));
  }
  render(){
    const { t } = this.props;
    document.title = t('menu.login');
    // eslint-disable-next-line
    const myClassName = localStorage.getItem('lng') == 'en'? 
      'w3-container w3-padding-64 w3-theme-l5' : 
      'w3-container-ar w3-padding-64 w3-theme-l5';
    // eslint-disable-next-line
    const myClassName2 = localStorage.getItem('lng') == 'en'? 
      'w3-col m5' : 
      'w3-col-ar m5';
    // eslint-disable-next-line
    const myClassName3 = localStorage.getItem('lng') == 'en'? 
      'm7 login' : 
      'w3-col-ar m7 login';
    // eslint-disable-next-line
    const myClassName4 = localStorage.getItem('lng') == 'en'? 
      'w3-container w3-card-4 w3-padding-16 w3-white' : 
      'w3-container-ar w3-card-4 w3-padding-16-ar w3-white';
    // eslint-disable-next-line
    const myClassName5 = localStorage.getItem('lng') == 'en'? 
      'w3-button w3-right w3-theme' : 
      'w3-button-ar w3-left w3-theme';      
    return (
      <div className={myClassName} id="contact">
        <div className="w3-row">
          <div className={myClassName3}>
            <form className={myClassName4} onSubmit={this.loginAction}>
              <div className="w3-section">      
                <label>{t('login.userName')}</label>
                <input className="w3-input" type="text" value={this.state.userName} onChange={this.setUserName}/>
              </div>
              <div className="w3-section">      
                <label>{t('login.password')}</label>
                <input type="password" className="w3-input" value={this.state.password} onChange={this.setPassword}/>
              </div>
              <button className={myClassName5}>{t('login.login')}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces() (Contact);