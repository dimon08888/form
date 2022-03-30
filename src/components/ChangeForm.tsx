import { useState } from 'react';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function ChangeForm() {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);

  function onLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setLogin(value);
    setLoginError(validateLogin(login));
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setEmail(value);
    setEmailError(validateEmail(email));
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPassword(value);
    setPasswordError(validatePassword(value));
  }

  function onPasswordRepeatChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setRepeatPassword(value);
    setRepeatPasswordError(password !== value);
  }

  return (
    <div className="bg-stone-300 rounded hover:shadow-black shadow-md transition-shadow duration-500">
      <form className="flex flex-col px-2 py-2">
        <h2 className="text-center my-2 font-bold">Form Validation 3</h2>
        <label>
          <div>Login</div>
          <input
            type="text"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={onLoginChange}
          />
          {loginError ? <div className="text-red-500">{loginError}</div> : null}
        </label>
        <label>
          <div>E-mail</div>
          <input
            type="text"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={onEmailChange}
          />
          {emailError ? <div className="text-red-500">{emailError}</div> : null}
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={onPasswordChange}
          />
          {passwordError ? <div className="text-red-500">{passwordError}</div> : null}
        </label>
        <input
          type="password"
          placeholder="Repeat password"
          className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          onChange={onPasswordRepeatChange}
        />
        {repeatPasswordError ? (
          <div className="text-red-500">Password dont match</div>
        ) : null}
        <button className="border-2 border-solid border-gray-900 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors duration-400">
          Registration
        </button>
      </form>
    </div>
  );
}
