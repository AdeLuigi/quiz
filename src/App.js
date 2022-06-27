import React, { useState } from 'react';

import IMG5 from "./pergunta5.png"

export default function App() {
	const questions = [
		{
			questionText: 'Tales calculou a altura de uma pirâmide, utilizando uma relação de proporcionalidade entre:',
			answerOptions: [
				{ answerText: 'Feixe de retas paralelas.', isCorrect: false },
				{ answerText: 'Três triângulos.', isCorrect: false },
				{ answerText: 'Dois quadriláteros.', isCorrect: false },
				{ answerText: 'Dois triângulos.', isCorrect: true },
			],
		},
		{
			questionText: 'Outra propriedade que foi importante para que Tales pudesse calcular a altura da pirâmide foi a semelhança de triângulos. Essa propriedade determina que dois triângulos são semelhantes quando: ',
			answerOptions: [
				{ answerText: 'Seus ângulos são diferentes mas seus lados têm o mesmo tamanho.', isCorrect: false },
				{ answerText: 'Seus ângulos são iguais e seus lados são ordenadamente proporcionais.', isCorrect: true },
				{ answerText: 'Seus ângulos são iguais e seus lados têm o mesmo tamanho.', isCorrect: false },
				{ answerText: 'Seus ângulos são diferentes e seus lados são de tamanhos diferentes.', isCorrect: false },
			],
		},
		{
			questionText: 'Além do teorema que leva seu nome, Proclo também atribui a Tales de Mileto outras proposições matemáticas como:',
			answerOptions: [
				{ answerText: 'O Teorema de Pitágoras', isCorrect: false },
				{ answerText: 'A lei dos senos', isCorrect: false },
				{ answerText: 'A congruência entre ângulos opostos por um vértice', isCorrect: true },
				{ answerText: 'O teorema de sanduíche (Teorema do confronto)', isCorrect: false },
			],
		},
		{
			questionText: 'Agora que já sabemos quem foi Tales de Mileto, e sua importância para a matemática, só nos resta aprender a aplicar seu teorema. Mas que graça tem medir uma piramide que nunca vimos na vida não é mesmo? Então vamos medir o Cristo Redentor, sabendo que em determinado momento do dia, uma pessoa de 1,75m forma no solo uma sombra de 1,20m, e que neste mesmo momento, o Cristo forma no solo uma sombra de aproximadamente 26m, qual será então a altura do Cristo.',
			answerOptions: [
				{ answerText: '38m', isCorrect: true },
				{ answerText: '53m', isCorrect: false },
				{ answerText: '29m', isCorrect: false },
				{ answerText: '42m', isCorrect: false },
			],
		},
		{
			questionText: 'Dado o triângulo a seguir e sabendo que o segmento DE é paralelo à base CB e que AC mede 10 cm, AD mede 4 cm e AE é igual a 5 cm, então podemos afirmar que o segmento BE mede:',
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

	function chamaImg(index){
		if (index == 4) {
			return <img src={IMG5} width={400}  />
		}
	}

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
						<h5>1 - Tales calculou a altura de uma pirâmide, utilizando uma relação de proporcionalidade entre</h5>
						<p>Em sua Vida dos Filósofos Ilustres, Diógenes Laércio (que viveu por volta do século III) é mais explícito quanto ao que Tales teria feito; segundo ele ninguém o instruiu mas, tendo ido ao Egito, passou um tempo próximo aos sacerdotes de lá. Hieronimus nos diz que mediu as pirâmides a partir de suas sombras, observando quando nossas sombras são iguais a nós mesmos.
Do nosso ponto de vista, o que Tales fez foi usar a semelhança entre os triângulos retângulos. Entretanto, àquela altura, é quase certo que esta propriedade não fosse conhecida de ninguém. Infelizmente, nada no registro histórico nos permite determinar como Tales teria chegado à conclusão sobre a igualdade das sombras. O melhor que podemos fazer é tentar criar uma hipótese plausível que, ainda que não seja historicamente justificável, nos ajuda a entender como ele pode ter tido a ideia certa. 
	Uma possibilidade é que Tales tenha usado uma argumentação baseada nas áreas dos dois triângulos pois os egípcios já sabiam como medir estas áreas. Segundo esta interpretação, Tales teria preenchido o triângulo cuja altura é igual à da pirâmide com várias cópias do triângulo cuja altura coincide com a do próprio Tales. Tendo feito isto, teria observado que a altura da pirâmide, medida em termos da altura de Tales, é igual ao comprimento da sombra da pirâmide, medido em termos da sombra de Tales. Escolhendo o momento em que sua sombra tem o mesmo comprimento de sua altura, este argumento permitiria a Tales concluir que o mesmo tem que valer para a sombra e a altura da pirâmide. 
	Embora esta ideia de como Tales teria procedido seja bastante atraente, é importante insistir que não há nenhum documento histórico que nos permita determinar se foi mesmo isto que aconteceu.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>2 - Outra propriedade que foi importante para que Tales pudesse calcular a altura da pirâmide foi a semelhança de triângulos. Essa propriedade determina que dois triângulos são semelhantes quando seus ângulos são iguais e seus lados são ordenadamente proporcionais. </h5>
						<p>Dados dois triângulos ABC e A’B’C’, vamos dizer que eles são semelhantes se, e somente se, os ângulos correspondentes são congruentes na mesma ordem, ou seja, se os ângulos são iguais e se os lados correspondentes são ordenadamente proporcionais.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>3 - Além do teorema que leva seu nome, Proclo também atribui a Tales de Mileto outras proposições matemáticas como a congruência entre ângulos opostos por um vértice </h5>
						<p>Proclus atribui a Tales haver afirmado ou demonstrado pela primeira vez que um ângulo inscrito numa semicircunferência é reto; que os ângulos opostos pelo vértice são iguais; que os ângulos da base de um triângulo isósceles são iguais; que um círculo é dividido igualmente pelo seu diâmetro; que se dois triângulos são tais que dois ângulos e um lado de um são iguais respectivamente a dois ângulos e um lado do outro, então os triângulos são congruentes.</p>
					</div>
					<div style={{display:'flex', flexDirection:'column'}}> 
						<h5>4 - Agora que já sabemos quem foi Tales de Mileto, e sua importância para a matemática, só nos resta aprender a aplicar seu teorema. Mas que graça tem medir uma piramide que nunca vimos na vida não é mesmo? Então vamos medir o Cristo Redentor, sabendo que em determinado momento do dia, uma pessoa de 1,75m forma no solo uma sombra de 1,20m, e que neste mesmo momento, o Cristo forma no solo uma sombra de aproximadamente 26m, qual será então a altura do Cristo.</h5>
						<p>42m</p>
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

						{chamaImg(currentQuestion+1)}

						{console.log(questions[currentQuestion])}
						
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
