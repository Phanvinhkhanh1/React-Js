function App() {

    const handleClick = () => {
        console.log('Added animal');
    }

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
        </div>
    );
}

export default App;