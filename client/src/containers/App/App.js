import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    Axios.get('/users')
    .then(response => response.data)
    .then(users => {
      this.setState({ users });
    });
  }

  renderUsers = () => {
    let users = [];
    this.state.users.forEach((user, i) => users = [
      ...users, 
      <div key={i}>
        {user.id}, {user.firstName}, {user.lastName}, {user.email}, {user.facebookUrl}, {user.instagramUrl}, {user.twitterUrl}, {user.password}
      </div>]);
    return users;
  }

  postAUser = () => {
    const data = { 
      firstName: 'test',
      lastName: 'entry',
      email: 'test@example.com',
      facebookUrl: 'facebook.com/test',
      instagramUrl: 'instagram.com/test',
      twitterUrl: 'twitter.com/test',
      password: '1234567890',
    }

    fetch('/users', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(jsonRes => {
      this.setState((prevState) => {
        return { users: [...prevState.users, jsonRes] };
      });
    });
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <div>Users</div>
        <div>{this.renderUsers()}</div>
        <div onClick={this.postAUser}>Test Post</div>
      </div>
    );
  }
}

export default App;
