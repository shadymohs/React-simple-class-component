import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Contact from './components/ui/common/Contact';
import Footer from './components/ui/common/Footer';
import Home from './components/ui/common/Home';
import About from './components/ui/common/About';
import Login from './components/ui/common/Login';
import Header from './components/ui/common/Header';
import { isPageAuthorized ,isLogged } from './components/services/handler/SessionHandler';

const history = createBrowserHistory();   

class App extends React.Component{

  render(){
    return (
      <Router history={ history }>
        <div>
          <Header/>
          <Route exact path="/">
            {isLogged() ? <Home/> : <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            {isPageAuthorized("/about") ? <About/> : <Redirect to="/login" />}
          </Route>
          <Route path="/contact">
            {isPageAuthorized("/contact") ? <Contact/> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isLogged() ? <Login/> : <Redirect to="/" />}
          </Route>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
