import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
      this.setState({ users });
    });
  }

  renderUsers = () => {
    let users = [];
    this.state.users.forEach((user, i) => users = [...users, <div key={i}>{user.id}, {user.username}</div>]);
    return users;
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <div>Users</div>
        <div>{this.renderUsers()}</div>
      </div>
    );
  }
}

export default App;
