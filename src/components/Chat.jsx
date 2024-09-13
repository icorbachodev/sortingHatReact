import React, { useState } from 'react';
import questions from '../questions.json';
import Question from './Question';
import Result from './Result';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Chat = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsComplete(true);
        }
    };

    return (
        <ChatContainer>
            {isComplete ? (
                <Result />
            ) : (
                <Question
                    question={questions[currentQuestion]}
                    nextQuestion={nextQuestion}
                />
            )}
        </ChatContainer>
    );
};

export default Chat;

const ChatContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
`;