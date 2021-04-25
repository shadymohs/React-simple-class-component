import React from 'react';
import { withNamespaces } from 'react-i18next';

class Home extends React.Component{
  render(){
    const { t } = this.props;
    document.title = t("menu.home");
    return (
      <div>
        <p>{t('home.content')}</p>
      </div>
    )
  }
}
export default withNamespaces() (Home);
