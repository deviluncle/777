import React from 'react';
import auth from './utils/auth'
import Login from './views/login'
import Home from './views/home'


class App extends React.Component {

  loginSuccessed() {
    auth.setToken('789789')
    window.location.reload()
  }

  logout() {
    auth.clearToken()
    window.location.reload()
  }

  render() {
    const isLogined = auth.isLogined();
    if (isLogined) {
      return(
        <Home logout={this.logout} />
      )
    } else {
      return(
        <Login loginSuccessed={this.loginSuccessed} />
      )
    }
  }
};

export default App;