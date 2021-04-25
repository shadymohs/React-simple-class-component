import React from 'react';
import { withNamespaces } from 'react-i18next';

class About extends React.Component{
  render(){
    const { t } = this.props;
    document.title = t('menu.about');
    return (
      <div>
        <p>{t('about.content')}</p>
      </div>
    )
  }
}

export default withNamespaces() (About);