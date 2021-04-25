import React from 'react';
import { withNamespaces } from 'react-i18next';

class Footer extends React.Component{
  render(){
    const { t } = this.props;
    return (
      <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
        <p>{t('footer.content')}</p>
      </footer>
    )
  }
}

export default withNamespaces() (Footer);
