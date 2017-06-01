import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { API_URL } from '../constants';

class Ping extends Component {
  constructor(props){
    super(props);
    const { authFetch, isAuthenticated } = this.props.auth;
    this.authFetch = authFetch;
    this.isAuthenticated = isAuthenticated;
  }
  componentWillMount() {
    this.setState({ message: '' });
  }
  ping() {
    this.authFetch(`${API_URL}/`)
      .then(data => this.setState({ message: data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
  securedPing() {
    this.authFetch(`${API_URL}/private`)
      .then(data => this.setState({ message: data.message }))
      .catch(error => this.setState({ message: error.message }));
  }
  render() {
    const { message } = this.state;
    return (
      <div className="container">
        <h1>Make a Call to the Server</h1>
        <Button bsStyle="primary" onClick={this.ping.bind(this)}>Ping</Button>
        {' '}
        <Button bsStyle="primary" onClick={this.securedPing.bind(this)}>
          Call Private
        </Button>
        <h2>{message}</h2>
      </div>
    );
  }
}

export default Ping;
