import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return <input type="number" min={5} max={10} style={{border : '1px solid red', background : 'green'}}/>
}

root.render(<App />);