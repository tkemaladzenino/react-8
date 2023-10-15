import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [pageLoaded, setPageLoaded] = useState(false);

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

}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);


























