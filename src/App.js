import logo from './logo.svg';
import React from 'react';
import './App.css';
import Field from './components/Field';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.authorize = this.authorize.bind(this);

    this.state = { userName: 'Bob', password: 'Bob' };
  }
  handleUserNameChange(userName) {
    console.log(userName);
    this.setState({ userName: userName });
  }
  handlePasswordChange(password) {
    this.setState({ password: password });
  }

  authorize(event) {
    fetch('/api/LoginApi/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        Username: "bob",
        Password: "bob"
      })
    }).then((responce) => {
      console.log(responce);
      return responce.text()
    }).then(a => { alert(a); });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="log-in-form">
            <p>
              Для входа в систему необходимо авторизоваться
            </p>

            <Field type="text"
              id="user-name"
              className="log-in-form__name"
              value={this.state.userName}
              onValueChange={this.handleUserNameChange}
              placeholder="Введите логин"></Field>

            <Field type="password"
              id="user-password"
              value={this.state.password}
              onValueChange={this.handlePasswordChange}
              className="log-in-form__password"
              placeholder="Введите пароль"></Field>

            <Button onClick={this.authorize} value="Вход"></Button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
