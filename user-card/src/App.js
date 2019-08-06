import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      followers: []
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch("https://api.github.com/users/justinelai")
    .then(res => res.json())
    .then(res => {
      console.log("Fetching user", res)
      this.setState({ userData: res })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <p>{this.state.userData.login}</p>
      </div>
    );
  }
  
}

export default App;
