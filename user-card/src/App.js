import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: {},
      followers: []
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/justinelai`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <>
      </>
    );
  }
  
}

export default App;
