import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './services/Auth'
import { Redirect, Route } from 'react-router-dom'

class App extends Component {






  state = {
    jwt: "",
    isLoggedIn: false,
    user: {

    }
  }
  componentDidMount() {
    this.login({username: "johannkerr", password: "learnlovecode"})
  }

  login(loginParams) {
    Auth.login(loginParams)
    .then((json) => {
      localStorage.setItem('jwt', json.jwt)
      this.setState({
        jwt: json.jwt,
        isLoggedIn: true
      })
    })

  }

  currentUser() {
    Auth.currentUser()
      .then((user) => {
        console.log(user)
        this.setState({
          user: user
        })
        console.log(this.state.user)

      })
  }



  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>


        { this.state.isLoggedIn ? <Route path='/' component={Home}/> : <Redirect to="/login"/> }

        { this.state.isLoggedIn ? <p>Hey thanks for logging in</p> : <p>Please log in</p>}

      </div>
    );
  }
}

const Home = () => <p>Welcome</p>

export default App;
