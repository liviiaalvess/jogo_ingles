const questions = [
    {
        question: "Look at those dark clouds! It _____ rain.",
        answers: ["will", "is going to"],
        correct: 1
    },

    {
        question: "I'm thirsty. I _____ get some water.",
        answers: ["will", "am going to"],
        correct: 0
    },

    {
        question: "I already bought the tickets. I _____ travel next month.",
        answers: ["will", "am going to"],
        correct: 1
    },

    {
        question: "I promise I _____ help you.",
        answers: ["will", "am going to"],
        correct: 0
    },

    {
        question: "I think Brazil _____ win the game.",
        answers: ["will", "is going to"],
        correct: 0
    },

    {
        question: "She studied a lot. She _____ pass the exam.",
        answers: ["will", "is going to"],
        correct: 1
    },

    {
        question: "We decided yesterday. We _____ have a party.",
        answers: ["will", "are going to"],
        correct: 1
    },

    {
        question: "Don't worry! I _____ call you later.",
        answers: ["will", "am going to"],
        correct: 0
    },

    {
        question: "They bought paint. They _____ paint their house.",
        answers: ["will", "are going to"],
        correct: 1
    },

    {
        question: "The phone is ringing. I _____ answer it!",
        answers: ["will", "am going to"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;


function startGame() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("jogo").style.display = "block";

    currentQuestion = 0;
    score = 0;

    showQuestion();
}


function showQuestion() {

    answered = false;

    let question = questions[currentQuestion];

    document.getElementById("numero").textContent =
        currentQuestion + 1;

    document.getElementById("pontos").textContent =
        score;

    document.getElementById("texto-pergunta").textContent =
        question.question;

    document.getElementById("resultado").textContent = "";

    document.getElementById("proxima").style.display = "none";

    let progresso =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progresso").style.width =
        progresso + "%";


    let alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";


    question.answers.forEach(function(answer, index) {

        let button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("resposta");

        button.onclick = function() {

            checkAnswer(index, button);

        };

        alternativas.appendChild(button);

    });
}


function checkAnswer(index, button) {

    if (answered) {
        return;
    }

    answered = true;

    let question = questions[currentQuestion];

    let buttons =
        document.querySelectorAll(".resposta");


    buttons.forEach(function(btn) {
        btn.disabled = true;
    });


    if (index === question.correct) {

        button.classList.add("certa");

        score++;

        document.getElementById("pontos").textContent =
            score;

        document.getElementById("resultado").textContent =
            "✅ Correct! Great job!";

    } else {

        button.classList.add("errada");

        buttons[question.correct].classList.add("certa");

        document.getElementById("resultado").textContent =
            "❌ Wrong answer!";
    }


    document.getElementById("proxima").style.display =
        "inline-block";
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishGame();

    }
}


function finishGame() {

    document.getElementById("jogo").style.display =
        "none";

    document.getElementById("fim").style.display =
        "block";

    document.getElementById("pontuacao-final").textContent =
        score;


    if (score === 10) {

        document.getElementById("mensagem-final").textContent =
            "🌟 Perfect! You understand WILL and BE GOING TO!";

    } else if (score >= 7) {

        document.getElementById("mensagem-final").textContent =
            "👏 Great job!";

    } else if (score >= 5) {

        document.getElementById("mensagem-final").textContent =
            "👍 Good job! Keep practicing!";

    } else {

        document.getElementById("mensagem-final").textContent =
            "📚 Keep studying and try again!";
    }
}


function restartGame() {

    document.getElementById("fim").style.display =
        "none";

    document.getElementById("inicio").style.display =
        "block";
}