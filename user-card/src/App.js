import React from 'react';
import './App.css';
import Followers from './Components/followers'
import Card from './Components/card'
import styled from 'styled-components'

const UserCardList = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: space-between;
  justify-content: center
`

const Subtitle = styled.div`
  margin: 10px;
  width: 100px;
  padding: 15px; 
  text-align: center;
  border-radius: 0.75rem;
  box-shadow:  0 8px 15px 4px rgba(102,95,85,0.26);
`

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

  handleChange = () => {
    
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
      <>
      <UserCardList>
      <Card key={this.state.userData.login} {...this.state.userData} />
      <Subtitle>
      <p>Pssst! Did you know that {this.state.userData.login} has {this.state.userData.followers} followers?</p>
      <p>➠ ➢ ⇨ → ➡</p>
      <p> ➤ ➼ ➡️</p>
      </Subtitle>
      <Followers followers={this.state.followers}/>
      </UserCardList>
      </>
    );
  }
  
}

export default App;
