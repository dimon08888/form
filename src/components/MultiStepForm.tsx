import { useState } from 'react';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function MultiStepForm() {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [step, setStep] = useState<'login' | 'email' | 'password'>('login');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const passwordErrorMsg = validatePassword(password);
    setPasswordError(passwordErrorMsg);
    if (!passwordErrorMsg) {
      window.alert(JSON.stringify({ login, email, password }, null, 2));
    }
  };

  function next() {
    if (step === 'login') {
      const loginErrorMsg = validateLogin(login);
      setLoginError(loginErrorMsg);
      if (!loginErrorMsg) {
        setStep('email');
      }
    } else if (step === 'email') {
      const emailErrorMsg = validateEmail(email);
      setEmailError(emailErrorMsg);
      if (!emailErrorMsg) {
        setStep('password');
      }
    }
  }

  function back() {
    if (step === 'email') {
      setStep('login');
    } else if (step === 'password') {
      setStep('email');
    }
  }

  return (
    <div className="flex justify-center border-2 w-52 h-52">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1>Multi step form</h1>
        <div className="flex flex-col">
          {step === 'login' ? (
            <>
              <h1>Login</h1>
              <input
                type="text"
                placeholder="login"
                className="border-2 border-solid border-black rounded block"
                onChange={e => setLogin(e.target.value)}
                value={login}
                required
              />
              {loginError ? <div className="text-red-500">{loginError}</div> : null}
              <button
                type="button"
                className="bg-blue-500 rounded text-white px-2 py-2 disabled:bg-blue-300"
                onClick={next}
                disabled={login.length === 0}
              >
                Next
              </button>
            </>
          ) : step === 'email' ? (
            <>
              <h1>Email</h1>
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
              />
              {emailError ? <div className="text-red-500">{emailError}</div> : null}
              <button
                type="button"
                className="bg-blue-500 rounded text-white px-2 py-2"
                onClick={back}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-blue-500 rounded text-white px-2 py-2 disabled:bg-blue-300"
                onClick={next}
                disabled={email.length === 0}
              >
                Next
              </button>
            </>
          ) : (
            <>
              <h1>Password</h1>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
              />
              {passwordError ? <div className="text-red-500">{passwordError}</div> : null}
              <button
                type="button"
                className="bg-blue-500 rounded text-white px-2 py-2"
                onClick={back}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 rounded text-white px-2 py-2 disabled:bg-blue-300"
                disabled={password.length === 0}
              >
                Submit
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

// TODOS:
// 1. password repeat
// 2. persist state in local storage (works after refresh)
// 3. auto focus input if it is empty on next step.
// 4. add circles that indicate steps, active circle is bright, inactive dull
// 5. click on a circle, goes to a step
