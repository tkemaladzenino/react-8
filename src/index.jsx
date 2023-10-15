import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [pageLoaded, setPageLoaded] = useState(false);
    const [number, setNumber] = useState(0);


    const increaseNumber = () => {
        setNumber(number + 1);
        setTimeout(() => {
            window.alert('გვერდზე დაფიქსირდა განახლება');
        }, 1);

    };

    useEffect(() => {
        if (!pageLoaded) {
            const reloaded = window.performance.navigation.type === 1;
            const message = reloaded ? 'გვერდზე დაფიქსირდა განახლება' : 'გვერდი ჩაიტვირთა';
            window.alert(message);
            setPageLoaded(true);
        }

        const unloadHandler = () => {
            if (pageLoaded) {
                window.alert('გვერდზე დაფიქსირდა განახლება');
            }
        };

        window.addEventListener('beforeunload', unloadHandler);

        return () => {
            window.removeEventListener('beforeunload', unloadHandler);
        };
    }, [pageLoaded]);

    return (
        <div className="App">
            <p style={{ color: 'red' }}>რიცხვი: {number}</p>
            <button style={{ color: 'green', border: '4px solid green', backgroundColor: 'yellow', borderRadius: '10px', height: '40px' }} onClick={increaseNumber}>დააკლიკე რიცხვის ერთით გასაზრდელად</button>
        </div >
    );

}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);


























