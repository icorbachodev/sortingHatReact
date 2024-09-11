import React, { createContext, useState } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
    const [scores, setScores] = useState({
        g: 0,
        r: 0,
        h: 0,
        s: 0,
    });

    const addScore = (house, points) => {
        setScores(prevScores => ({
            ...prevScores,
            [house]: prevScores[house] + points,
        }));
    };

    return (
        <ScoreContext.Provider value={{ scores, addScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export { ScoreContext, ScoreProvider };
