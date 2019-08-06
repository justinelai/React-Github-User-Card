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
    const urls = [
      'https://api.github.com/users/justinelai',
      'https://api.github.com/users/justinelai/followers'
    ]
    Promise.all(urls.map(url => fetch(url)
        .then(res => res.json())
        .catch(err => console.error('Request failed', err))
    ))
    .then(data => this.setState({
      userData: data[0],
      followers: data[1]
    }))
    
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
