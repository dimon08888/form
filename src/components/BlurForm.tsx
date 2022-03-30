import { useState } from 'react';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function BlurForm() {
  const [login, setLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorRepeat, setErrorRepeat] = useState(false);

  function handleBlurLogin() {
    setErrorLogin(validateLogin(login));
  }

  function handleBlurEmail() {
    setErrorEmail(validateEmail(email));
  }

  function handleBlurPassword() {
    setErrorPassword(validatePassword(password));
  }

  function handleBlurRepeatPassword() {
    setErrorRepeat(password !== repeatPassword);
  }

  return (
    <div className="bg-stone-300 rounded hover:shadow-black shadow-md transition-shadow duration-500">
      <form className="flex flex-col px-2 py-2">
        <h2 className="text-center my-2 font-bold">Form Validation 2</h2>
        <label>
          <div>Login</div>
          <input
            type="text"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={e => setLogin(e.target.value)}
            onBlur={handleBlurLogin}
          />
          {errorLogin ? <div className="text-red-500">{errorLogin}</div> : null}
        </label>
        <label>
          <div>E-mail</div>
          <input
            type="text"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={e => setEmail(e.target.value)}
            onBlur={handleBlurEmail}
          />
          {errorEmail ? <div className="text-red-500"> {errorEmail}</div> : null}
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={e => setPassword(e.target.value)}
            onBlur={handleBlurPassword}
          />
          {errorPassword ? <div className="text-red-500">{errorPassword}</div> : null}
        </label>
        <input
          type="password"
          placeholder="Repeat password"
          className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          onChange={e => setRepeatPassword(e.target.value)}
          onBlur={handleBlurRepeatPassword}
        />
        {errorRepeat ? <div className="text-red-500">Password dont match</div> : null}
        <button className="border-2 border-solid border-gray-900 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors duration-400">
          Registration
        </button>
      </form>
    </div>
  );
}
