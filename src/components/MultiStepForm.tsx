import { useState } from 'react';
import { validateLogin, validateEmail, validatePassword } from '../utils/validators';

export default function MultiStepForm() {
  // const [login, setLogin] = useState('');
  // const [loginError, setLoginError] = useState('');

  // const [password, setPassword] = useState('');
  // const [passwordError, setPasswordError] = useState('');

  // const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setLoginError(validateLogin(login));
  //   setPasswordError(validatePassword(password));
  //   setEmailError(validateEmail(email));
  // }

  const [step, setStep] = useState<'login' | 'email' | 'password'>('login');

  function next() {
    if (step === 'login') {
      setStep('email');
    } else if (step === 'email') {
      setStep('password');
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
      <div className="flex flex-col">
        {step === 'login' ? (
          <Login onNext={next} />
        ) : step === 'email' ? (
          <Email onNext={next} onBack={back} />
        ) : (
          <Password onBack={back} />
        )}
      </div>
      {/* <form className="flex flex-col" onSubmit={e => handleSubmit(e)}>
        <h1>Multi step form</h1>
        <input
          type="text"
          placeholder="login"
          className="border-2 border-solid border-black rounded block"
          onChange={e => setLogin(e.target.value)}
          value={login}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-600"
        >
          Next
        </button>
      </form> */}
    </div>
  );
}

function Login({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h1>Login</h1>
      <button className="bg-blue-500 rounded text-white px-2 py-2" onClick={onNext}>
        Next
      </button>
    </div>
  );
}

function Email({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div>
      <h1>Email</h1>
      <button className="bg-blue-500 rounded text-white px-2 py-2" onClick={onBack}>
        Back
      </button>
      <button className="bg-blue-500 rounded text-white px-2 py-2" onClick={onNext}>
        Next
      </button>
    </div>
  );
}

function Password({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <h1>Password</h1>
      <button className="bg-blue-500 rounded text-white px-2 py-2" onClick={onBack}>
        Back
      </button>
      <button className="bg-blue-500 rounded text-white px-2 py-2">Submit</button>
    </div>
  );
}
