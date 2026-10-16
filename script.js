/* ==================================================
   PC FIXER - SCRIPT PRINCIPAL
================================================== */

const levelsData = {
    1: [ // NÍVEL FÁCIL (5 PERGUNTAS)
        {
            category: "ENERGIA (FÁCIL)",
            icon: "bi-lightning-charge-fill",
            question: "O computador não liga. Qual deve ser uma das primeiras coisas verificadas?",
            answers: ["O cabo de energia e a tomada", "A cor do gabinete", "O papel de parede do Windows", "O mouse"],
            correct: 0,
            explanation: "Antes de desmontar o computador, é fundamental verificar se ele está recebendo energia da tomada."
        },
        {
            category: "LIMPEZA (FÁCIL)",
            icon: "bi-brush-fill",
            question: "Qual ferramenta é adequada para remover poeira dos componentes internos do computador?",
            answers: ["Água", "Pincel apropriado para eletrônicos", "Esponja molhada", "Detergente"],
            correct: 1,
            explanation: "Um pincel adequado (antiestático) e ar comprimido são os métodos corretos para limpeza a seco."
        },
        {
            category: "SEGURANÇA (FÁCIL)",
            icon: "bi-shield-check",
            question: "Antes de realizar uma manutenção interna no PC, qual atitude é obrigatória?",
            answers: ["Colocar água no gabinete", "Deixar o computador ligado na tomada", "Desconectar o equipamento da energia", "Aumentar o volume das caixas de som"],
            correct: 2,
            explanation: "Desligar e desconectar o cabo de força evita choques elétricos e curtos-circuitos."
        },
        {
            category: "PERIFÉRICOS (FÁCIL)",
            icon: "bi-mouse-fill",
            question: "Qual dos seguintes itens é considerado um periférico de entrada de dados?",
            answers: ["Monitor", "Caixa de som", "Impressora", "Teclado"],
            correct: 3,
            explanation: "O teclado envia comandos e dados para o computador, sendo um periférico de entrada."
        },
        {
            category: "ARMAZENAMENTO (FÁCIL)",
            icon: "bi-device-ssd-fill",
            question: "Qual componente é utilizado para armazenar permanentemente os arquivos e o sistema operacional?",
            answers: ["Cooler", "SSD ou HD", "Fonte de alimentação", "Memória RAM"],
            correct: 1,
            explanation: "HDs e SSDs guardam os arquivos e o sistema operacional mesmo quando o PC é desligado."
        }
    ],
    2: [ // NÍVEL MÉDIO (5 PERGUNTAS)
        {
            category: "MEMÓRIA RAM (MÉDIO)",
            icon: "bi-memory",
            question: "Um computador apresenta telas azuis frequentes e falhas de memória. O que pode ser testado ou limpo?",
            answers: ["Os contatos da memória RAM", "O cabo HDMI da televisão", "O mousepad", "A cor do gabinete"],
            correct: 0,
            explanation: "Limpar os contatos dourados da RAM e reencaixá-la resolve muitos erros comuns de tela azul."
        },
        {
            category: "TEMPERATURA (MÉDIO)",
            icon: "bi-thermometer-half",
            question: "O processador está superaquecendo e desligando sozinho. Qual substância deve ser aplicada entre o cooler e a CPU?",
            answers: ["Óleo de cozinha", "Água mineral", "Pasta térmica", "Cola branca"],
            correct: 2,
            explanation: "A pasta térmica preenche microespaços e melhora drasticamente a transferência de calor para o dissipador."
        },
        {
            category: "FONTE (MÉDIO)",
            icon: "bi-plug-fill",
            question: "Qual é a principal função da fonte de alimentação em um computador?",
            answers: ["Gerar imagens em alta resolução", "Converter a energia da tomada e distribuí-la aos componentes", "Armazenar fotos e vídeos", "Processar códigos e softwares"],
            correct: 1,
            explanation: "A fonte converte a corrente alternada (AC) da tomada em corrente contínua (DC) segura para as peças."
        },
        {
            category: "PLACA-MÃE (MÉDIO)",
            icon: "bi-motherboard",
            question: "Qual item na placa-mãe mantém as configurações básicas de hardware e a hora do sistema salvas?",
            answers: ["Processador", "Bateria CMOS (CR2032)", "Memória Cache", "Placa de Vídeo"],
            correct: 1,
            explanation: "A bateria CMOS garante que a BIOS não perca as configurações quando o computador é desligado da tomada."
        },
        {
            category: "MONTAGEM (MÉDIO)",
            icon: "bi-tools",
            question: "O que indica quando um conector de energia principal da placa-mãe (ATX 24 pinos) está encaixado corretamente?",
            answers: ["Faíscas elétricas visíveis", "O cabo ficar frouxo", "Cheiro de ozônio", "Um som de clique na presilha de travamento"],
            correct: 3,
            explanation: "O 'clique' mecânico da presilha plástica indica que o conector travou perfeitamente nos contatos."
        }
    ],
    3: [ // NÍVEL DIFÍCIL (5 PERGUNTAS)
        {
            category: "DIAGNÓSTICO (DIFÍCIL)",
            icon: "bi-cpu-fill",
            question: "O PC liga, os coolers giram, mas não dá vídeo e emite um bipe longo seguido de dois curtos. O que isso geralmente indica?",
            answers: ["Falta de conexão com a Internet", "Erro crítico na Placa de Vídeo (GPU)", "Mouse ou teclado desconectados", "Superaquecimento do SSD"],
            correct: 1,
            explanation: "Os códigos sonoros (beeps) da BIOS variam por fabricante, mas padrões como 1 longo e 2 curtos frequentemente apontam falhas na GPU."
        },
        {
            category: "FIRMWARE (DIFÍCIL)",
            icon: "bi-gear-fill",
            question: "Qual é a principal vantagem do padrão UEFI em relação à BIOS tradicional baseada em MBR?",
            answers: ["Conexão de rede sem fio integrada via hardware", "Aumento automático de clock da memória RAM", "Suporte a discos rígidos maiores que 2TB (GPT) e boot mais seguro (Secure Boot)", "Eliminação total da necessidade de processador gráfico"],
            correct: 2,
            explanation: "O UEFI suporta a tabela de partição GPT (permitindo discos >2TB), inicialização mais rápida e protocolos de segurança avançados."
        },
        {
            category: "ARMAZENAMENTO (DIFÍCIL)",
            icon: "bi-device-hdd-fill",
            question: "Qual barramento e protocolo nativo os SSDs M.2 NVMe utilizam para alcançar velocidades extremas de leitura/escrita?",
            answers: ["Portas USB 2.0 de alta densidade", "Linhas PCIe (Peripheral Component Interconnect Express)", "Barramento IDE Paralelo antigo", "Conexões analógicas VGA"],
            correct: 1,
            explanation: "Diferente dos SSDs SATA antigos, os SSDs NVMe se comunicam diretamente pelas pistas PCIe de alta velocidade do processador."
        },
        {
            category: "ENERGIA E CIRCUITOS (DIFÍCIL)",
            icon: "bi-shield-shaded",
            question: "O que significa o circuito de proteção OPP (Over Power Protection) presente em fontes de alimentação de qualidade?",
            answers: ["Evita que surtos de raios da rede elétrica queimem os cabos de rede RJ45", "Aumenta a tensão elétrica automaticamente em dias de muito calor", "Garante que o cooler da fonte gire sempre na velocidade máxima", "Protege o sistema desligando a fonte caso a potência exigida ultrapasse o limite máximo projetado"],
            correct: 3,
            explanation: "O OPP desarma a fonte se o consumo total do hardware exceder de forma perigosa a capacidade nominal máxima suportada."
        },
        {
            category: "REDES E PROTOCOLOS (DIFÍCIL)",
            icon: "bi-hdd-network-fill",
            question: "Em uma rede local, qual a função primária do protocolo ARP (Address Resolution Protocol)?",
            answers: ["Atribuir endereços IP dinâmicos para computadores recém-conectados", "Mapear um endereço IP lógico em um endereço físico MAC (Media Access Control) da placa de rede", "Traduzir nomes de domínios da web em endereços IP numéricos", "Criptografar pacotes de dados enviados através de redes Wi-Fi públicas"],
            correct: 1,
            explanation: "O ARP descobre o endereço físico (MAC) correspondente a um determinado endereço IP dentro da mesma rede local."
        }
    ]
};

/* ==================================================
   ESTADO DO JOGO
================================================== */
let playerName = "";
let currentLevel = 1;
let levelQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let answerSelected = false;

let timer = null;
let timeLeft = 15;
const timePerQuestion = 15;

/* ==================================================
   ELEMENTOS DO DOM
================================================== */
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const rankingScreen = document.getElementById("rankingScreen");

const playerNameInput = document.getElementById("playerName");
const nameError = document.getElementById("nameError");

const questionText = document.getElementById("questionText");
const questionCategory = document.getElementById("questionCategory");
const questionIcon = document.getElementById("questionIcon");
const answersContainer = document.getElementById("answersContainer");

const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const currentScore = document.getElementById("currentScore");
const timeLeftDisplay = document.getElementById("timeLeft");

const feedback = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const nextButton = document.getElementById("nextButton");

/* ==================================================
   FUNÇÕES AUXILIARES
================================================== */
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });
    screen.classList.add("active");
}

/* ==================================================
   INICIAR JOGO
================================================== */
document.getElementById("startButton").addEventListener("click", startGame);

playerNameInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        startGame();
    }
});

function startGame() {
    const name = playerNameInput.value.trim();

    if (name.length < 2) {
        nameError.classList.add("show");
        playerNameInput.focus();
        return;
    }

    nameError.classList.remove("show");
    playerName = name.substring(0, 20);

    currentLevel = 1;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    document.getElementById("quizPlayerName").textContent = playerName;
    currentScore.textContent = score;

    loadLevel();
    showScreen(quizScreen);
}

function loadLevel() {
    const rawQuestions = levelsData[currentLevel] || [];
    levelQuestions = shuffleArray(rawQuestions);
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    answerSelected = false;
    nextButton.disabled = true;
    feedback.className = "feedback";

    clearInterval(timer);
    timeLeft = timePerQuestion;
    if (timeLeftDisplay) timeLeftDisplay.textContent = timeLeft;
    startTimer();

    const question = levelQuestions[currentQuestionIndex];

    questionNumber.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = levelQuestions.length;

    const percent = ((currentQuestionIndex + 1) / levelQuestions.length) * 100;
    progressBar.style.width = percent + "%";
    progressPercent.textContent = Math.round(percent) + "%";

    let levelName = currentLevel === 1 ? "Fácil" : currentLevel === 2 ? "Médio" : "Difícil";
    questionCategory.textContent = `${question.category} | Nível: ${levelName}`;
    questionIcon.className = "bi " + question.icon;
    questionText.textContent = question.question;

    answersContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.dataset.index = index;

        button.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            <span class="answer-text">${answer}</span>
        `;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersContainer.appendChild(button);
    });
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        if (timeLeftDisplay) timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeOutAnswer();
        }
    }, 1000);
}

function timeOutAnswer() {
    if (answerSelected) return;
    answerSelected = true;
    clearInterval(timer);

    const question = levelQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => button.classList.add("disabled"));

    const correctButton = document.querySelector(`.answer[data-index="${question.correct}"]`);
    if (correctButton) correctButton.classList.add("correct");

    wrongAnswers++;

    showFeedback(
        false,
        "TEMPO ESGOTADO!",
        "O tempo acabou! A resposta correta era: " + question.answers[question.correct] + ". " + question.explanation
    );

    nextButton.disabled = false;
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answerSelected) return;

    answerSelected = true;
    clearInterval(timer);

    const question = levelQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => button.classList.add("disabled"));

    const correctButton = document.querySelector(`.answer[data-index="${question.correct}"]`);

    if (selectedIndex === question.correct) {
        selectedButton.classList.add("correct");
        correctAnswers++;
        
        let pointsEarned = 10 * currentLevel;
        score += pointsEarned;
        currentScore.textContent = score;

        showFeedback(
            true,
            "RESPOSTA CORRETA! (+" + pointsEarned + " XP)",
            question.explanation
        );
    } else {
        selectedButton.classList.add("wrong");
        if (correctButton) correctButton.classList.add("correct");
        wrongAnswers++;

        showFeedback(
            false,
            "RESPOSTA INCORRETA!",
            "A resposta correta é: " + question.answers[question.correct] + ". " + question.explanation
        );
    }

    nextButton.disabled = false;
}

function showFeedback(correct, title, text) {
    feedback.className = "feedback show " + (correct ? "correct" : "wrong");
    feedbackIcon.innerHTML = correct ? '<i class="bi bi-check-circle-fill"></i>' : '<i class="bi bi-x-circle-fill"></i>';
    feedbackTitle.textContent = title;
    feedbackText.textContent = text;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex >= levelQuestions.length) {
        currentLevel++;

        if (levelsData[currentLevel]) {
            let levelName = currentLevel === 2 ? "MÉDIO" : "DIFÍCIL";
            alert(`Parabéns! Avançando para o Nível ${levelName}! 🚀`);
            loadLevel();
        } else {
            finishGame();
        }
        return;
    }

    loadQuestion();
});

function finishGame() {
    clearInterval(timer);
    
    const totalPossibleQuestions = Object.values(levelsData).flat().length;
    const percentage = totalPossibleQuestions > 0 ? Math.round((correctAnswers / totalPossibleQuestions) * 100) : 0;

    document.getElementById("resultPlayerName").textContent = playerName;
    document.getElementById("finalScore").textContent = score;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("wrongAnswers").textContent = wrongAnswers;
    document.getElementById("percentage").textContent = percentage + "%";

    let resultMessage = "";
    if (percentage === 100) {
        resultMessage = "🏆 IMPRESSIONANTE! Você gabaritou até o Nível Difícil e é um Engenheiro de Hardware!";
    } else if (percentage >= 80) {
        resultMessage = "🔥 Excelente! Ótimo domínio dos conceitos avançados de manutenção.";
    } else if (percentage >= 60) {
        resultMessage = "👍 Muito bom! Conseguiu lidar bem com as questões complexas.";
    } else {
        resultMessage = "💪 O Nível Difícil exigiu bastante, continue estudando para dominar o hardware!";
    }

    document.getElementById("resultMessage").textContent = resultMessage;

    saveRanking();
    showScreen(resultScreen);
}

function saveRanking() {
    const totalPossibleQuestions = Object.values(levelsData).flat().length;
    let ranking = JSON.parse(localStorage.getItem("pcFixerRanking")) || [];

    ranking.push({
        name: playerName,
        score: score,
        correct: correctAnswers,
        wrong: wrongAnswers,
        percentage: totalPossibleQuestions > 0 ? Math.round((correctAnswers / totalPossibleQuestions) * 100) : 0,
        date: new Date().toLocaleDateString("pt-BR")
    });

    ranking.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return b.correct - a.correct;
    });

    ranking = ranking.slice(0, 10);
    localStorage.setItem("pcFixerRanking", JSON.stringify(ranking));
}

function showRanking() {
    renderRanking();
    showScreen(rankingScreen);
}

document.getElementById("showRanking").addEventListener("click", showRanking);
document.getElementById("showRankingStart").addEventListener("click", showRanking);

function renderRanking() {
    const rankingList = document.getElementById("rankingList");
    const emptyRanking = document.getElementById("emptyRanking");
    const totalPossibleQuestions = Object.values(levelsData).flat().length;

    rankingList.innerHTML = "";
    const ranking = JSON.parse(localStorage.getItem("pcFixerRanking")) || [];

    if (ranking.length === 0) {
        emptyRanking.style.display = "block";
        return;
    }

    emptyRanking.style.display = "none";

    ranking.forEach((player, index) => {
        const row = document.createElement("div");
        row.className = "ranking-row";

        let position = "";
        if (index === 0) position = "🥇 1º";
        else if (index === 1) position = "🥈 2º";
        else if (index === 2) position = "🥉 3º";
        else position = `${index + 1}º`;

        row.innerHTML = `
            <div class="ranking-position">${position}</div>
            <div class="ranking-player">
                <div class="ranking-avatar">
                    <i class="bi bi-person-fill"></i>
                </div>
                <div>
                    <strong>${escapeHTML(player.name)}</strong>
                    <small style="display:block; color:#687b91; font-size:7px;">${player.date}</small>
                </div>
            </div>
            <div class="ranking-correct">${player.correct}/${totalPossibleQuestions}</div>
            <div class="ranking-score">${player.score} XP</div>
        `;

        rankingList.appendChild(row);
    });
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

document.getElementById("playAgain").addEventListener("click", () => {
    currentLevel = 1;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentScore.textContent = "0";
    loadLevel();
    showScreen(quizScreen);
});

document.getElementById("backHome").addEventListener("click", () => {
    playerNameInput.value = "";
    showScreen(startScreen);
});

document.getElementById("rankingBack").addEventListener("click", () => {
    showScreen(startScreen);
});

document.getElementById("clearRanking").addEventListener("click", () => {
    const confirmClear = confirm("Deseja apagar todo o placar?");
    if (!confirmClear) return;

    localStorage.removeItem("pcFixerRanking");
    renderRanking();
});