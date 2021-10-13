import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppWrapper from './components/AppWrapper/AppWrapper';
import LoggedStateButton from './components/LoggedStateButton/LoggedStateButton';

const App = () => {
    const [isLogged, setLogged] = useState(false);
    return (
        <AppWrapper>
            <Navbar isLogged={isLogged} />
            <LoggedStateButton handleClick={() => setLogged(!isLogged)} />
        </AppWrapper>
    );
};

export default App;
