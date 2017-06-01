import React, { Component } from 'react';
import Callback from '../components/LoadingOverlay/LoadingOverlay'
import FeedList from "../components/Feed/FeedList";
import { API_URL } from '../constants';
import { Alert } from 'react-bootstrap';

class Home extends Component {
  constructor(props){
    super(props);
    this.authFetch = this.props.auth.authFetch;
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.authFetch(`${API_URL}/feed`)
      .then(data => this.setState({
        loading: false,
        feeds: data
      }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className="container">
        {this.state.error
          ? <Alert bsStyle="warning">{this.state.error}</Alert>
          : null
        }
        {this.state.loading
          ? <Callback/>
          : <FeedList feeds={this.state.feeds} />
        }
      </div>
    );
  }
}

export default Home;
