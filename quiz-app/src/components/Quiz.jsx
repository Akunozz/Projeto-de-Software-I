import React, { useState } from 'react';

const questions = [
  {
    question: "Qual é a formação geológica mais conhecida no Caçapava Geoparque Mundial da Unesco?",
    options: ["Pão de Açúcar", "Serra do Segredo", "Morro do Chapéu", "Sítio do Rincão dos Dourados"],
    answer: "Serra do Segredo",
    image: "/images/p1.jpg",
    reference: "https://www.geoparquecostoeselagunas.com/geoparque-cacapava/#:~:text=Os%20principais%20geoss%C3%ADtios%20s%C3%A3o%20as%20Pedras%20das%20Guaritas%2C,cient%C3%ADfico%20e%20que%20resultaram%20em%20fant%C3%A1stica%20beleza%20c%C3%AAnica."
  },
  {
    question: "Em qual bioma está inserido o Caçapava Geoparque Mundial da Unesco?",
    options: ["Amazônia", "Pantanal", "Cerrado", "Pampa"],
    answer: "Pampa",
    image: "/images/p2.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual o significado cultural do Caçapava Geoparque Mundial da Unesco?",
    options: ["Área de conservação da fauna marinha", "Área de preservação de formações geológicas e patrimônio histórico", "Área de produção vinícola", "Área de desenvolvimento industrial sustentável"],
    answer: "Área de preservação de formações geológicas e patrimônio histórico",
    image: "/images/p3.jpg",
    reference: "https://www.unesco.org/en/iggp/geoparks/about"
  },
  {
    question: "Qual é a importância do Caçapava Geoparque Mundial da Unesco para a geoconservação?",
    options: ["Preservação de recursos hídricos", "Conservação de formações geológicas", "Desenvolvimento de atividades agrícolas", "Criação de reservas florestais"],
    answer: "Conservação de formações geológicas",
    image: "/images/p4.jpg",
    reference: "https://cacapavadosul.rs.leg.br/noticia/visualizar/id/4287/?geoparque-de-cacapava-do-sul-e-reconhecido-pela-unesco-como-patrimonio-geologico-mundial.html"
  },
  {
    question: "Qual das seguintes atividades é promovida no Caçapava Geoparque Mundial da Unesco para o turismo sustentável?",
    options: ["Safáris", "Ecoturismo e trilhas", "Turismo de luxo", "Turismo de compras"],
    answer: "Ecoturismo e trilhas",
    image: "/images/p5.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual a importância do Caçapava Geoparque Mundial da Unesco para a educação científica?",
    options: ["Promove a educação financeira", "Fomenta a educação ambiental e geológica", "Apoia a educação artística", "Desenvolve a educação física"],
    answer: "Fomenta a educação ambiental e geológica",
    image: "/images/p7.jpg",
    reference: "https://cacapavadosul.rs.leg.br/noticia/visualizar/id/4287/?geoparque-de-cacapava-do-sul-e-reconhecido-pela-unesco-como-patrimonio-geologico-mundial.html#:~:text=A%20obten%C3%A7%C3%A3o%20do%20reconhecimento%20%C3%A9%20um%20marco%20para,promo%C3%A7%C3%A3o%20da%20educa%C3%A7%C3%A3o%20geocient%C3%ADfica%20e%20na%20conscientiza%C3%A7%C3%A3o%20ambiental."
  },
  {
    question: "Qual a fauna típica encontrada na região do Caçapava Geoparque Mundial da Unesco?",
    options: ["Onça-pintada e macaco-prego", "Capivara e jacaré", "Tatu-bola e tamanduá-bandeira", "Veado-campeiro e seriema"],
    answer: "Veado-campeiro e seriema",
    image: "/images/p8.jpg",
    reference: "https://www.peritoanimal.com.br/animais-do-pampa-aves-mamiferos-anfibios-e-repteis-23357.html#:~:text=Animais%20do%20Pampa%3A%20aves%2C%20mam%C3%ADferos%2C%20anf%C3%ADbios%20e%20r%C3%A9pteis,do%20Pampa%20...%205%20R%C3%A9pteis%20do%20Pampa%20"
  },
  {
    question: "Quando o Caçapava Geoparque Mundial da Unesco foi oficialmente reconhecido como geoparque?",
    options: ["2010", "2015", "2018", "2023"],
    answer: "2023",
    image: "/images/p9.jpg",
    reference: "https://cacapavadosul.rs.leg.br/noticia/visualizar/id/4287/?geoparque-de-cacapava-do-sul-e-reconhecido-pela-unesco-como-patrimonio-geologico-mundial.html"
  },
  {
    question: "Qual a área aproximada do Caçapava Geoparque Mundial da Unesco?",
    options: ["1.047 km²", "2.584 km²", "3.047 km²", "4.542 km²"],
    answer: "3.047 km²",
    image: "/images/p10.jpg",
    reference: "https://www.unesco.org/en/iggp/geoparks/cacapava"
  },
  {
    question: "Qual é o papel do Caçapava Geoparque Mundial da Unesco na conservação da biodiversidade?",
    options: ["Proteção exclusiva de espécies vegetais", "Conservação de habitats naturais e espécies nativas", "Criação de áreas urbanas verdes", "Desenvolvimento de atividades agropecuárias"],
    answer: "Conservação de habitats naturais e espécies nativas",
    image: "/images/p11.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual é a vegetação predominante no Caçapava Geoparque Mundial da Unesco?",
    options: ["Mata Atlântica", "Caatinga", "Campos de altitude", "Campos nativos"],
    answer: "Campos nativos",
    image: "/images/p12.jpg",
    reference: "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2023/05/24/quarta-colonia-e-cacapava-do-sul-sao-reconhecidos-pela-unesco-como-geoparques-mundiais-rs-e-o-estado-com-mais-iniciativas-do-tipo.ghtml"
  },
  {
    question: "Quais são os benefícios do Caçapava Geoparque Mundial da Unesco para as comunidades locais?",
    options: ["Desenvolvimento industrial", "Valorização cultural e geração de empregos", "Expansão urbana", "Redução do turismo"],
    answer: "Valorização cultural e geração de empregos",
    image: "/images/p13.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual das seguintes instituições tem parceria com o Caçapava Geoparque Mundial da Unesco?",
    options: ["Universidade Federal de Santa Maria (UFSM)", "Universidade de São Paulo (USP)", "Universidade Federal de Pelotas (UFPel)", "Universidade de Brasília (UnB)"],
    answer: "Universidade Federal de Santa Maria (UFSM)",
    image: "/images/p14.jpg",
    reference: "https://www.ufsm.br/2021/10/26/com-apoio-da-ufsm-cacapava-do-sul-se-credencia-para-o-programa-de-geoparques-da-unesco"
  },
  {
    question: "Qual é a importância histórica da cidade de Caçapava do Sul no contexto do geoparque?",
    options: ["Primeira capital do estado do Rio Grande do Sul", "Local de batalhas históricas da Revolução Farroupilha", "Centro industrial do século XIX", "Ponto de partida das missões jesuíticas"],
    answer: "Local de batalhas históricas da Revolução Farroupilha",
    image: "/images/p15.jpg",
    reference: "https://cacapavadosul.rs.gov.br/pagina/id/2/?historia-do-municipio.html"
  },
  {
    question: "Qual dos seguintes minerais é explorado na região do Caçapava Geoparque Mundial da Unesco?",
    options: ["Ouro", "Carvão", "Calcário", "Petróleo"],
    answer: "Calcário",
    image: "/images/p16.jpg",
    reference: "https://cacapavadosul.rs.gov.br/noticia/visualizar/idDep/1009/id/6983/?dia-nacional-do-calcario-agricola.html"
  },
  {
    question: "Quais são os principais desafios enfrentados pelo Caçapava Geoparque Mundial da Unesco?",
    options: ["Superpopulação", "Desmatamento e mineração ilegal", "Caça de animais", "Urbanização descontrolada"],
    answer: "Desmatamento e mineração ilegal",
    image: "/images/p17.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual das seguintes áreas de conhecimento é promovida pelo Caçapava Geoparque Mundial da Unesco?",
    options: ["Astronomia", "Geologia e Biologia", "Física Quântica", "Engenharia Mecânica"],
    answer: "Geologia e Biologia",
    image: "/images/p18.jpg",
    reference: "https://www.ufsm.br/pro-reitorias/pre/geoparque-cacapava"
  },
  {
    question: "Qual é o significado do nome 'Caçapava'?",
    options: ["De origem indígena, significa “Clareira na Mata”", "De origem portuguesa, significa 'vale fechado'", "De origem africana, significa 'montanha sagrada'", "De origem espanhola, significa 'campo florido'"],
    answer: "De origem indígena, significa “Clareira na Mata”",
    image: "/images/p19.jpg",
    reference: "https://cacapavadosul.rs.gov.br/pagina/id/2/?historia-do-municipio.html"
  },
  {
    question: "Qual é o papel das comunidades locais na gestão do Caçapava Geoparque Mundial da Unesco?",
    options: ["Não possuem nenhum papel", "Participam ativamente na conservação e turismo sustentável", "São excluídas das decisões", "Focam apenas na agricultura"],
    answer: "Participam ativamente na conservação e turismo sustentável",
    image: "/images/p21.jpg",
    reference: "https://g1.globo.com/rs/rio-grande-do-sul/noticia/2023/05/24/quarta-colonia-e-cacapava-do-sul-sao-reconhecidos-pela-unesco-como-geoparques-mundiais-rs-e-o-estado-com-mais-iniciativas-do-tipo.ghtml"
  },
  {
    question: "Qual é a relação do Caçapava Geoparque Mundial da Unesco com a UNESCO?",
    options: ["Não possui relação", "É um geoparque reconhecido pela UNESCO", "É uma reserva da biosfera da UNESCO", "Apenas busca reconhecimento futuro"],
    answer: "É um geoparque reconhecido pela UNESCO",
    image: "/images/p22.jpg",
    reference: "https://cacapavadosul.rs.leg.br/noticia/visualizar/id/4287/?geoparque-de-cacapava-do-sul-e-reconhecido-pela-unesco-como-patrimonio-geologico-mundial.html"
  },
  {
    question: "Quem foi Cel. João Dias dos Santos Rosa?",
    options: ["Geólogo que descobriu formações rochosas no Geoparque de Caçapava", "Militar e fazederio que contribuiu para o desenvolvimento local e preservação do patrimônio natural", "Biólogo que catalogou espécies no Geoparque de Caçapava", "Político que criou o Geoparque de Caçapava"],
    answer: "Militar e fazederio que contribuiu para o desenvolvimento local e preservação do patrimônio natural",
    image: "/images/p23.jpg",
    reference: "https://cacapavadosul.rs.gov.br/noticia/visualizar/id/1721/?restos-mortais-do-descobridor-do-minerio-nas-minas-sao-transladados.html"
  },
  {
    question: "Qual foi a principal descoberta de Cel. João Dias dos Santos Rosa?",
    options: ["Minério de ouro", "Minério de prata", "Minério de cobre", "Minério de ferro"],
    answer: "Minério de cobre",
    image: "/images/p24.jpg",
    reference: "https://cacapavadosul.rs.gov.br/noticia/visualizar/id/1721/?restos-mortais-do-descobridor-do-minerio-nas-minas-sao-transladados.html"
  },
  {
    question: "Quem foi Sepé Tiarajú?",
    options: ["Líder indígena guarani que lutou na região do atual Geoparque de Caçapava", "Explorador português que descobriu as formações geológicas do Geoparque de Caçapava", "Cientista naturalista que documentou a flora e fauna do Geoparque de Caçapava durante o século XVIII", "Arquiteto espanhol responsável pela construção das principais estruturas históricas do Geoparque de Caçapava"],
    answer: "Líder indígena guarani que lutou na região do atual Geoparque de Caçapava",
    image: "/images/p25.jpg",
    reference: "https://gauchazh.clicrbs.com.br/comportamento/noticia/2018/10/quem-foi-sepe-tiaraju-primeiro-indio-brasileiro-que-pode-ser-santificado-pela-igreja-catolica-cjn6iu2ka04q601rx2ao45mj3.html"
  },
  {
    question: "Qual é a importância histórica do Forte Dom Pedro II em Caçapava do Sul?",
    options: ["Foi usado como residência oficial de governadores", "Foi uma importante fortificação militar projetado após a Revolução Farroupilha", "Foi o local de assinatura do Tratado de Tordesilhas", "É conhecido por ser a maior fortaleza construída pelos portugueses na América"],
    answer: "Foi uma importante fortificação militar projetado após a Revolução Farroupilha",
    image: "/images/p26.jpg",
    reference: "https://cacapavadosul.rs.gov.br/turismo/visualizar/id/1006/?forte-de-d-pedro-ii.html"
  },
  {
    question: "Como foi formado o Forte Dom Pedro II?",
    options: ["Formado no século XIX como parte da defesa militar na região do Geoparque de Caçapava", "Foi formado por erupções vulcânicas que moldaram as rochas da região", "Construído por colonos alemães que se estabeleceram na área do Geoparque de Caçapava", "Formado por atividades mineradoras em busca de ouro no Geoparque de Caçapava"],
    answer: "Formado no século XIX como parte da defesa militar na região do Geoparque de Caçapava",
    image: "/images/p27.jpg",
    reference: "https://cacapavadosul.rs.gov.br/turismo/visualizar/id/1006/?forte-de-d-pedro-ii.html"
  },
  {
    question: "Qual é a origem do nome 'Minas do Camaquã'?",
    options: ["Deriva do Rio Camaquã, que passa pela região", "Homenagem a um explorador português chamado Camaquã", "Nome dado pelos indígenas locais que significa 'terra das minas'", "Referência à cidade vizinha de Camaquã, onde as minas foram descobertas"],
    answer: "Deriva do Rio Camaquã, que passa pela região",
    image: "/images/p28.jpg",
    reference: "https://geoparquecacapava.com.br/minas-do-camaqua"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    setCorrectAnswer(questions[currentQuestion].answer);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCorrectAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setCorrectAnswer(null);
  };

  const percentageScore = ((score / questions.length) * 100).toFixed(2);

  const getScoreMessage = () => {
    if (percentageScore < 49) {
      return "Você pode melhorar! Estude mais as perguntas no botão Saiba mais e tente novamente.";
    } else if (percentageScore >= 50 && percentageScore < 76) {
      return "Bom trabalho! Você está quase lá.";
    } else {
      return "Excelente! Você tem um ótimo conhecimento sobre o Caçapava Geoparque Mundial da UNESCO.";
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <p>Você acertou {score} de {questions.length} perguntas.</p>
          <p>Isso equivale a {percentageScore}% de acertos.</p>
          <p>{getScoreMessage()}</p>
          <button onClick={handleRestartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
            {questions[currentQuestion].image && (
              <img src={questions[currentQuestion].image} alt="Geoparque de Caçapava do Sul" />
            )}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className={`answer-button ${
                  selectedOption === null
                    ? ""
                    : option === correctAnswer
                    ? "correct"
                    : option === selectedOption
                    ? "incorrect"
                    : ""
                }`}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-question"
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
          >
            Próxima Pergunta
          </button>
          <div className="reference-section">
            Referência: <a href={questions[currentQuestion].reference} target="_blank" rel="noopener noreferrer">Saiba mais</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;