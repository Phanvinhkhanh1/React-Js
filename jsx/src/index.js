import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    let message = "Hi Phan Vinh Khanh";

    if (Math.random() > 0) {
        message = "Hello your visa : PANK";
    }

    return <h1>{message}</h1>;
}

root.render(<App />);