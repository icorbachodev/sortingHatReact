import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Chat from './components/Chat';
import { ScoreProvider } from './components/ScoreContext';

const App = () => {
    return (
        <ScoreProvider>
            <GlobalStyles />
            <Chat />
        </ScoreProvider>
    );
};

export default App;
