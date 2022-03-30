import { useState } from 'react';
import { useLocalState } from '../utils/hooks';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function SubmitForm() {
  const [login, setLogin] = useLocalState('SubmitForm:login', '');
  const [errorLogin, setErrorLogin] = useState('');

  const [email, setEmail] = useLocalState('SubmitForm:email', '');
  const [errorEmail, setErrorEmail] = useState('');

  const [password, setPassword] = useLocalState('SubmitForm:password', '');
  const [errorPassword, setErrorPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useLocalState(
    'SubmitForm:repeatPassword',
    '',
  );
  const [errorRepeat, setErrorRepeat] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorLogin(validateLogin(login));
    setErrorEmail(validateEmail(email));
    setErrorPassword(validatePassword(password));
    setErrorRepeat(password !== repeatPassword);
  }

  return (
    <div className="bg-stone-300 rounded hover:shadow-black shadow-md transition-shadow duration-500">
      <form className="flex flex-col px-2 py-2" onSubmit={onSubmit}>
        <h2 className="text-center my-2 font-bold">Form Validation 1</h2>
        <label>
          <div>Login</div>
          <input
            type="text"
            onChange={e => setLogin(e.target.value)}
            value={login}
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          />
          {errorLogin ? <div className="text-red-500">{errorLogin}</div> : null}
        </label>
        <label>
          <div>E-mail</div>
          <input
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          />
          {errorEmail ? <div className="text-red-500">{errorEmail}</div> : null}
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          {errorPassword ? <div className="text-red-500">{errorPassword}</div> : null}
        </label>
        <input
          type="password"
          placeholder="Repeat password"
          className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          onChange={e => setRepeatPassword(e.target.value)}
          value={repeatPassword}
        />
        {errorRepeat ? <div className="text-red-500">Password dont match</div> : null}

        <button
          type="submit"
          className="border-2 border-solid border-gray-900 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors duration-400"
        >
          Registration
        </button>
      </form>
    </div>
  );
}
