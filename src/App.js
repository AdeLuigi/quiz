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
				{ answerText: '1840', isCorrect: false },
				{ answerText: '1912', isCorrect: true },
			],
		},
		{
			questionText: 'Alan Turing era noivo de _____',
			answerOptions: [
				{ answerText: 'Beyoncé', isCorrect: false },
				{ answerText: 'Anitta', isCorrect: false },
				{ answerText: 'Adele', isCorrect: false },
				{ answerText: 'Joan Clarke', isCorrect: true },
			],
		},
		{
			questionText: 'Alan Turing era _____',
			answerOptions: [
				{ answerText: 'bissexual', isCorrect: false },
				{ answerText: 'panssexual', isCorrect: false },
				{ answerText: 'Homossexual', isCorrect: true },
				{ answerText: 'intersexual', isCorrect: false },
			],
		},
		{
			questionText: 'Alan Turing era _____',
			answerOptions: [
				{ answerText: 'Muçulmano', isCorrect: false },
				{ answerText: 'Cristão', isCorrect: false },
				{ answerText: 'Ateu', isCorrect: true },
				{ answerText: 'budista', isCorrect: false },
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
					Você acertou {score} de {questions.length} questões
					<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
						<h3>Respostas</h3>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>1 - Alan Turing é conhecido como pai da ciencia da computação</h5>
						<p>Matemático e cientista, Alan Turing nasceu em Londres em 23 de junho de 1912 e é conhecido como o pai da computação e da inteligência artificial.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>2 - A máquina de Turing ajudou a decifrar os códigos criptografados</h5>
						<p>A máquina eletromecânica que ele inventou durante a Segunda Guerra, a "máquina de Turing", ajudou a decifrar os códigos criptografados pela máquina Enigma, usada pela marinha da Alemanha nazista. A invenção de Turing é apontada como um dos motivos da vitória dos Aliados e é considerada um fator para guerra não ter se estendido ainda por mais anos — o que causaria ainda mais mortes.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>3 - A máquina que Turing criou é considerada o primeiro computador</h5>
						<p>Turing refinou os conceitos de Babbage e Von Neumann ao teorizar unidades de armazenamento, desenvolveu o Colossus, o primeiro computador digital programável do mundo, e publicou trabalhos sobre Inteligência Artificial, tendo proposto o teste para definir se uma IA é capaz de se passar por um humano.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>4 - Alan Turing nasceu em 1912</h5>
						<p>23 de junho de 1912, Maida Vale, Londres, Reino Unido</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>5 - Alan Turing era noivo de Joan Clarke</h5>
						<p>Foi na Hut 8 que Turing conheceu Joan Clarke, com qem teve um noivado de curtíssima duração — ele revelou para ela que era homossexual. Mesmo com o fim do noivado, Joan continuou amiga de Turing até a morte dele, em 1954. Ele se matou com cianureto, antes de completar 42 anos</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>6 - Alan Turing era homessexual</h5>
						<p>Somente em 2009, o primeiro ministro do Reino Unido, Gordon Brown, pediu desculpas publicamente em nome do governo britânico. “Alan e muitos outros milhares de homens gays que foram condenados por leis homofóbicas foram tratados terrivelmente”, disse Brown</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>7 - Alan Turing era ateu</h5>
						<p>Alan Turing era ateu, homossexual e foi o pai da ciência da computação, isso nos mostra o quanto o preconceito só gera um atraso para a humanidade, caso este homem estivesse vivo talvez nós teríamos avançado bem mais como civilização.</p>
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pergunta {currentQuestion + 1}</span>/{questions.length}
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
