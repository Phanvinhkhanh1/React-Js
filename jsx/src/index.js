import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    return <textarea autoFocus={true} style={{border : "solid 1px red",background : "green"}}/>
}

root.render(<App />);