// 1) import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) get a reference to the div this ID root
const el = document.getElementById('root');

// 3) tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a React Component
// function App() {
    // let message = 'Phan Vinh Khanh';
    // if (Math.random() > 1) {
    //     message = 'Google';

    // }

    // new Date().toLocaleDateString()
    // const fullName = 'Phan Vinh Khanh';
    // const age = 26;

    // <div>
    //     <div>My name is {fullName}</div>
    //     <div>I'm {age} years old</div>
    // </div>

    // const inputType = 'number';
    // const minValue = 5;
    // const maxValue = 10;

    // <input type={inputType} min={minValue} max={maxValue} style={{'background': 'green'}}/>


//     return <textarea autoFocus={true}/>;
// }

// 5) show the component on the screen
root.render(<App />);