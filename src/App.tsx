import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [login, setLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorRepeat, setErrorRepeat] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorLogin(login.length < 3 || login.length > 32);
    setErrorEmail(!email.includes('@'));
    setErrorPassword(password.length < 8);
    setErrorRepeat(password !== repeatPassword);

    // if (login.length < 3 || login.length > 32) {
    //   setErrorLogin(true);
    // } else {
    //   setErrorLogin(false);
    // }

    // if (!email.includes('@')) {
    //   setErrorEmail(true);
    // } else {
    //   setErrorEmail(false);
    // }

    // if (password.length < 8) {
    //   setErrorPassword(true);
    // } else {
    //   setErrorPassword(false);
    // }

    // if (password !== repeatPassword) {
    //   setErrorRepeat(true);
    // } else {
    //   setErrorRepeat(false);
    // }
  }

  return (
    <div className="h-screen flex justify-center gap-5 items-center">
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
            {errorLogin ? <div className="text-red-500">Login min 3 max 32</div> : null}
          </label>
          <label>
            <div>E-mail</div>
            <input
              type="text"
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
            {errorEmail ? (
              <div className="text-red-500">Please enter correct email</div>
            ) : null}
          </label>
          <label>
            <div>Password</div>
            <input
              type="password"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            {errorPassword ? (
              <div className="text-red-500">Password must be 8 symbols</div>
            ) : null}
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
      <div className="bg-stone-300 rounded hover:shadow-black shadow-md transition-shadow duration-500">
        <form className="flex flex-col px-2 py-2">
          <h2 className="text-center my-2 font-bold">Form Validation 2</h2>
          <label>
            <div>Login</div>
            <input
              type="text"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <label>
            <div>E-mail</div>
            <input
              type="text"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <label>
            <div>Password</div>
            <input
              type="password"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <input
            type="password"
            placeholder="Repeat password"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          />
          <button className="border-2 border-solid border-gray-900 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors duration-400">
            Registration
          </button>
        </form>
      </div>
      <div className="bg-stone-300 rounded hover:shadow-black shadow-md transition-shadow duration-500">
        <form className="flex flex-col px-2 py-2">
          <h2 className="text-center my-2 font-bold">Form Validation 3</h2>
          <label>
            <div>Login</div>
            <input
              type="text"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <label>
            <div>E-mail</div>
            <input
              type="text"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <label>
            <div>Password</div>
            <input
              type="password"
              className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
            />
          </label>
          <input
            type="password"
            placeholder="Repeat password"
            className="border-2 border-solid border-gray-900 mb-2 px-2 rounded"
          />
          <button className="border-2 border-solid border-gray-900 rounded bg-emerald-500 hover:bg-emerald-600 transition-colors duration-400">
            Registration
          </button>
        </form>
      </div>
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

export default App;
