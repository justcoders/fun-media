import React, { Component } from 'react';
import '../styles/login.css';

class LoginPage extends Component {
  componentDidMount(){
    this.props.auth.lock.show();
  }

  render() {
    return (
        <div id="lock-container">Loading</div>
    );
  }
}

export default LoginPage;