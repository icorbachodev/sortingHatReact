import React from 'react';
import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const houseMap = {
    g: 'Gryffindor',
    r: 'Ravenclaw',
    h: 'Hufflepuff',
    s: 'Slytherin'
};

const Question = ({ question, nextQuestion }) => {
    const { addScore } = useContext(ScoreContext);

    const handleAnswer = (answer) => {
        const { scores } = answer;
        // Iterar sobre las casas y sumar los puntos correspondientes
        Object.keys(scores).forEach(key => {
            addScore(houseMap[key], scores[key]);
        });

        // Avanzar a la siguiente pregunta
        nextQuestion();
    };

    return (
        <QuestionContainer>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Title>{question.title}</Title>
                {question.answers.map((answer, index) => (
                    <Button key={index} onClick={() => handleAnswer(answer)}>
                        {answer.title}
                    </Button>
                ))}
            </motion.div>
        </QuestionContainer>
    );
};

export default Question;

const QuestionContainer = styled.div`
    margin: 20px 0;
`;

const Title = styled.h2`
    color: white;
`

const Button = styled.button`
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: block;
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0;
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        background-color: #fff;
    }
`;
