import React from 'react';
import './App.css';
import MultiStepForm from './components/MultiStepForm';
function App() {
  return (
    <div className="h-screen flex justify-center gap-5 items-center">
      {/* <SubmitForm /> */}
      {/* <BlurForm />
      <ChangeForm /> */}
      <MultiStepForm />
    </div>
  );
}

// function App2() {
//   const [name, setName] = useLocalState('name', '');
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
