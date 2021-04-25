import React from 'react';
import { withNamespaces } from 'react-i18next';

class Contact extends React.Component{
  render(){
    const { t } = this.props;
    document.title = t('menu.contact');
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
      'w3-col m7' : 
      'w3-col-ar m7';
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
          <div className={myClassName2}>
            <div className="w3-padding-16">
              <span className="w3-xlarge w3-border-teal w3-bottombar">{t('menu.contact')}</span>
            </div>
            <h3>{t('contact.address')}</h3>
            <p>{t('contact.content')}</p>
            <p><i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>{t('contact.city')}</p>
            <p><i className="fa fa-phone w3-text-teal w3-xlarge"></i>{t('contact.mobile')}</p>
            <p><i className="fa fa-envelope-o w3-text-teal w3-xlarge"></i>{t('contact.email')}</p>
          </div>
          <div className={myClassName3}>
            <form className={myClassName4} submit="sendContactMessage">
              <div className="w3-section">      
                <label>{t('contact.name')}</label>
                <input className="w3-input" type="text" name="Name"/>
              </div>
              <div className="w3-section">      
                <label>{t('contact.messageEmail')}</label>
                <input className="w3-input" type="text" name="Email"/>
              </div>
              <div className="w3-section">      
                <label>{t('contact.message')}</label>
                <input className="w3-input" type="text" name="Message"/>
              </div>
              <button className={myClassName5}>{t('contact.send')}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces() (Contact);
