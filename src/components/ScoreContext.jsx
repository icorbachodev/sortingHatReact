import React, { createContext, useState } from 'react';

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
    const [scores, setScores] = useState({
        Gryffindor: 0,
        Hufflepuff: 0,
        Ravenclaw: 0,
        Slytherin: 0,
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
