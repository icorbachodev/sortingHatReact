import React from 'react';
import { useContext } from 'react';
import { ScoreContext } from './ScoreContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Question = ({ question, nextQuestion }) => {
    const { addScore } = useContext(ScoreContext);

    const handleAnswer = (answer) => {
        console.log('Answer selected:', answer);
        const scoresArray = Object.values(answer.scores)
        // Sumar puntos a las casas correspondientes
        scoresArray.forEach(score => {
            addScore(score.house, score.points);
        });

        // Avanzar a la siguiente pregunta
        nextQuestion();
    };

    return (
        <QuestionContainer>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2>{question.title}</h2>
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

const Button = styled.button`
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #ddd;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #ccc;
    }
`;
