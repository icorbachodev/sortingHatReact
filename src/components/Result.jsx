import React, { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
import styled from 'styled-components';

const Result = () => {
    const { scores } = useContext(ScoreContext);

    const getHouse = () => {
        const sortedHouses = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        return sortedHouses[0];
    };

    return (
        <ResultContainer>
            <h2>¡Felicidades! Estás en {getHouse()}.</h2>
        </ResultContainer>
    );
};

export default Result;

const ResultContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    color: white;
`;
