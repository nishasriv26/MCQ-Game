const questions = [
    "How do you feel most of the day?",
    "Are you interested in activities you used to enjoy?",
    "How is your energy level throughout the day?",
    "How is your sleep pattern?",
    "How is your appetite?",
    "How is your ability to concentrate?",
    "How do you feel about yourself?",
    "Have you had any thoughts of death or suicide?",
    "Have you noticed any changes in your movements?",
    "Are you experiencing any unexplained physical symptoms, such as aches and pains?",
    "How are these symptoms affecting your daily life, work, or relationships?"
];

let currentQuestion = 0;
let totalScore = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
        document.getElementById('question-number').innerText = `Question ${currentQuestion + 1}/${questions.length}`;
    } else {
        showThanks();
    }
}

function selectOption(score) {
    totalScore += score;
    currentQuestion++;
    showQuestion();
}

function showThanks() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('question-counter').style.display = 'none';
    document.getElementById('thanks-container').style.display = 'block';
}

function viewResult() {
    let resultText;
    if (totalScore >= 17) {
        resultText = "You are pass";
    } else if (totalScore >= 11) {
        resultText = "You are average";
    } else {
        resultText = "You are fail";
    }
    document.getElementById('result').innerText = resultText;
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('thanks-container').style.display = 'none';
}

showQuestion();
