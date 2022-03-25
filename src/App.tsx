import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="h-screen flex justify-center gap-5 items-center">
      <SubmitForm />
      <BlurForm />
      <ChangeForm />
    </div>
  );
}

function validateLogin(login: string): string {
  const minLength = 3;
  const maxLength = 32;

  if (login.length < minLength) {
    return 'Login mast be more 3 symbols';
  }
  if (login.length > maxLength) {
    return 'Login mast be less 32 symbols';
  }

  return '';
}

function validateEmail(email: string): string {
  if (!email.includes('@')) {
    return 'Please correct E-mail';
  }
  return '';
}

function validatePassword(password: string): string {
  const minLength = 10;
  const maxLength = 64;

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long.`;
  }

  if (!/\d/.test(password)) {
    return `Password must have at least one digit character.`;
  }

  if (password.length > maxLength) {
    return `Password must be at most ${maxLength} characters long.`;
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must have at least one uppercase character';
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must have at least one lowercase character';
  }
  return '';
}

function SubmitForm() {
  const [login, setLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
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

function BlurForm() {
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

function ChangeForm() {
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

// function App2() {
//   const [name, setName] = useState('');
//   const [greeting, setGreeting] = React.useState('');

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button type="button" onClick={() => setGreeting(name)}>
//         Greet
//       </button>
//       {greeting ? <div>Hello, {greeting}!</div> : null}
//     </form>
//   );
// }

// function App22() {
//   const nameRef = React.useRef<HTMLInputElement>(null);
//   const [greeting, setGreeting] = React.useState('');

//   return (
//     <form>
//       <input ref={nameRef} type="text" placeholder="Enter name" />
//       <button type="button" onClick={() => setGreeting(nameRef.current!.value)}>
//         Greet
//       </button>
//       {greeting ? <div>Hello, {greeting}!</div> : null}
//     </form>
//   );
// }

// function App3() {
//   const [color, setColor] = useState('black');

//   useEffect(() => {
//     const COLORS = ['yellow', 'red', 'green', 'blue'];

//     for (var i = 0; i < COLORS.length; i++) {
//       setTimeout(
//         (function (iLocal) {
//           return () => setColor(COLORS[iLocal]);
//         })(i),
//         1000 * (i + 1),
//       );
//     }
//   }, []);

//   return (
//     <div>
//       <div style={{ width: 50, height: 50, backgroundColor: color }}></div>
//       <button onClick={() => setColor('red')}>Make red</button>
//     </div>
//   );
// }

// function App4() {
//   const [label, setLabel] = useState('Click');

//   return (
//     <button onClick={() => setLabel(label === 'Click' ? 'Cliked' : 'Click')}>
//       {label}
//     </button>
//   );
// }

// function App5() {
//   const [showModal, setShowModal] = React.useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Click</button>
//       {showModal ? <div>Text here</div> : null}
//     </div>
//   );
// }

let password2 = 'david12_H^^--';
let password2Valid = true;

export default App;
