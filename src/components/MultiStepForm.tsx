import { useState } from 'react';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function MultiStepForm() {
  const [login, setLogin] = useState('');
  const [loginError, setLoginError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);

  const [step, setStep] = useState<'login' | 'email' | 'password'>('login');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const passwordErrorMsg = validatePassword(password);
    if (passwordErrorMsg !== passwordRepeat) {
      setPasswordRepeatError(true);
    }
    setPasswordError(passwordErrorMsg);
    if (!passwordErrorMsg && passwordRepeatError) {
      window.alert(JSON.stringify({ login, email, password }, null, 2));
      setPasswordRepeatError(false);
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

  function onStepClick(nextStep: typeof step) {
    switch (nextStep) {
      case 'login': {
        setStep(nextStep);
        break;
      }
      case 'email': {
        if (!validateLogin(login)) {
          setStep(nextStep);
        }
        break;
      }
      case 'password': {
        if (!validateEmail(email)) {
          setStep(nextStep);
        }
        break;
      }
    }
  }

  return (
    <div>
      <div className="relative border-2 rounded bg-orange-100 hover:shadow-lg shadow-emerald-400 transition-shadow duration-500 w-54 h-72">
        <form className="flex flex-col h-full" onSubmit={handleSubmit}>
          <h1 className="font-bold text-center py-2">Multi step form!</h1>
          <div className="flex flex-col flex-grow justify-center">
            {step === 'login' ? (
              <>
                <h1 className="pl-2 font-bold">Login:</h1>
                <input
                  type="text"
                  className="border-2 border-solid border-emerald-300 rounded block my-1 mx-1 pl-1 focus:outline-none "
                  onChange={e => setLogin(e.target.value)}
                  value={login}
                  required
                />
                {loginError ? (
                  <div className="text-red-500 text-center">{loginError}</div>
                ) : null}

                <button
                  type="button"
                  className="bg-blue-500 rounded text-white px-4 py-2 disabled:bg-blue-300 cursor-pointer my-2 "
                  onClick={next}
                  disabled={login.length === 0}
                >
                  Next
                </button>
              </>
            ) : step === 'email' ? (
              <>
                <h1 className="font-bold pl-2">Email:</h1>
                <input
                  className="border-2 border-solid border-emerald-300 rounded my-2 mx-2 focus:outline-none pl-1"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {emailError ? (
                  <div className="text-red-500 text-center">{emailError}</div>
                ) : null}
                <div className="between my-2 mx-2">
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 rounded text-white px-2 py-2 "
                      onClick={back}
                    >
                      Back
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 rounded text-white px-2 py-2 disabled:bg-blue-300 "
                      onClick={next}
                      disabled={email.length === 0}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="font-bold pl-2">Password:</h1>
                <input
                  type="password"
                  className="border-2 border-solid border-emerald-300 mx-2 my-2 pl-1 rounded focus:outline-none"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <input
                  type="password"
                  className="border-2 border-solid border-emerald-300 mx-2 my-2 pl-1 rounded focus:outline-none"
                  placeholder="password repeat"
                  onChange={e => setPasswordRepeat(e.target.value)}
                  value={passwordRepeat}
                  required
                />
                {passwordError ? (
                  <div className="text-red-500 text-center mb-1 px-2 w-48">
                    {passwordError}
                  </div>
                ) : null}
                {passwordRepeatError ? (
                  <div className="text-red-500 text-center mb-1 px-2 w-48">
                    Passwords don't match
                  </div>
                ) : null}
                <div className="between mx-2 mb-2">
                  <div>
                    <button
                      type="button"
                      className="bg-blue-500 rounded text-white px-2 py-2"
                      onClick={back}
                    >
                      Back
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 rounded text-white px-2 py-2 disabled:bg-blue-300"
                      disabled={password.length === 0 || passwordRepeat.length === 0}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-row gap-2 justify-center mt-3">
        <button
          className={`w-2 h-2 bg-black rounded opacity-30 ${
            step === 'login' ? 'opacity-100' : ''
          }`}
          onClick={() => onStepClick('login')}
        ></button>
        <button
          className={`w-2 h-2 bg-black rounded  opacity-30 ${
            step === 'email' ? 'opacity-100' : ''
          }`}
          onClick={() => onStepClick('email')}
        ></button>
        <button
          className={`w-2 h-2 bg-black rounded  opacity-30 ${
            step === 'password' ? 'opacity-100' : ''
          }`}
          onClick={() => onStepClick('password')}
        ></button>
      </div>
    </div>
  );
}

// TODOS:
// 1. password repeat [OK]
// 2. persist state in local storage (works after refresh)
// 3. auto focus input if it is empty on next step.
// 4. add circles that indicate steps, active circle is bright, inactive dull [OK]
// 5. click on a circle, goes to a step [OK]
