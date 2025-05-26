import React, { useState } from 'react';
import '../App.css';

const questions = [
  {
    question: 'Qual das seguintes opções é uma técnica eficiente de conservação de água na agricultura?',
    options: ['Irrigação por inundação', 'Gotejamento', 'Cultivo sem cobertura do solo', 'Uso de mangueiras para lavar plantações'],
    answer: 'Gotejamento',
  },
  {
    question: 'Qual o principal benefício do reuso de água em processos industriais?',
    options: ['Aumento do consumo de água potável', 'Redução de custos e menor impacto ambiental', 'Aumento da poluição', 'Necessidade de mais descarte de efluentes'],
    answer: 'Redução de custos e menor impacto ambiental',
  },
  {
    question: 'O que o termo "água cinza" se refere?',
    options: ['Água tratada para consumo humano', 'Água da chuva coletada', 'Água de chuveiros e pias (não sanitária)', 'Água de esgoto industrial'],
    answer: 'Água de chuveiros e pias (não sanitária)',
  },
  {
    question: 'Qual destas tecnologias é usada para remover o sal da água do mar?',
    options: ['Filtragem simples', 'Cloração', 'Dessalinização', 'Filtração de areia'],
    answer: 'Dessalinização',
  },
  {
    question: 'Qual das ações abaixo é considerada um desperdício de água no ambiente doméstico?',
    options: ['Consertar um vazamento no vaso sanitário', 'Tomar banhos curtos', 'Deixar a torneira aberta enquanto ensaboa a louça', 'Usar a máquina de lavar roupa com carga total'],
    answer: 'Deixar a torneira aberta enquanto ensaboa a louça',
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('Correto!');
    } else {
      setFeedback(`Errado! A resposta correta é: ${questions[currentQuestion].answer}`);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setFeedback('');
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setFeedback('');
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Quiz sobre Gestão da Água</h2>
        {showScore ? (
          <div className="score-section">
            Você acertou {score} de {questions.length} perguntas!
            <button className="quiz-button" onClick={handleRestartQuiz}>Refazer Quiz</button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option-button ${selectedOption === option ? (option === questions[currentQuestion].answer ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOption !== null && (
              <div className="feedback">
                {feedback}
                <button className="quiz-button next-button" onClick={handleNextQuestion}>
                  {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima Pergunta'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;