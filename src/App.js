import logo from './logo.svg';
import './App.css';
import Field from './components/Field';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="log-in-form">
          <p>
            Для входа в систему необходимо авторизоваться
          </p>
          <Field type="text" id="user-name" className="log-in-form__name" placeholder="Введите логин"></Field>
          <Field type="password" id="user-password" className="log-in-form__password" placeholder="Введите пароль"></Field>

          <Button  value="Вход"></Button>
        </div>
      </header>
    </div>
  );
}

export default App;
