import { useState } from 'react';
import { validateEmail } from '../utils/validators';

export default function MultiStepForm() {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoginError(login.length >= 3);
    setPasswordError(password.length >= 8);
    setEmailError(validateEmail(email));
  }

  return (
    <div className="flex justify-center">
      <form className="flex flex-col" onSubmit={e => handleSubmit(e)}>
        <h1>Multi step form</h1>
        <input
          type="text"
          placeholder="login"
          className="border-2 border-solid border-black rounded block"
          onChange={e => setLogin(e.target.value)}
          value={login}
          required
        />
        {}
        <button
          type="submit"
          className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
}
