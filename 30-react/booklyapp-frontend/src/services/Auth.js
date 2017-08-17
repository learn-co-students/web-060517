

class Auth {


  /*

  // in my App.js
    login()





  */
  static login(loginParams) {
    return fetch('https://web-060517.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginParams)

    })
    .then((res) => {
      return res.json()
    })
  }


  static currentUser() {
    return fetch('https://web-060517.herokuapp.com/api/v1/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }

    })
    .then((res) => {
      return res.json()
    })
  }


  static logout() {
    localStorage.removeItem('jwt')
  }


}


export default Auth
