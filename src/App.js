import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Alan Turing é conhecido como ____',
			answerOptions: [
				{ answerText: 'Pai da biologia', isCorrect: false },
				{ answerText: 'Pai da física', isCorrect: false },
				{ answerText: 'Pai da computação', isCorrect: true },
				{ answerText: 'Pai da matemática', isCorrect: false },
			],
		},
		{
			questionText: 'A máquina de Turing ajudou a _____?',
			answerOptions: [
				{ answerText: 'Acessar a internet', isCorrect: false },
				{ answerText: 'Decifrar os códigos criptografados', isCorrect: true },
				{ answerText: 'Jogar jogos', isCorrect: false },
				{ answerText: 'Fritar batata', isCorrect: false },
			],
		},
		{
			questionText: 'A máquina que Turing criou é considerada o ______',
			answerOptions: [
				{ answerText: 'Primeiro computador', isCorrect: true },
				{ answerText: 'Melhor video game', isCorrect: false },
				{ answerText: 'Primeiro robô', isCorrect: false },
				{ answerText: 'Smartphone', isCorrect: false },
			],
		},
		{
			questionText: 'Alan Turing nasceu em _____',
			answerOptions: [
				{ answerText: '1911', isCorrect: false },
				{ answerText: '1900', isCorrect: false },
				{ answerText: '1841', isCorrect: false },
				{ answerText: '1912', isCorrect: true },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
