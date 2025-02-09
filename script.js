const questions = [
  {
      question: "Which programming language is known as the mother of all languages?",
      options: ["C", "Fortran", "Assembly", "Python"],
      answer: "C"
  },
  {
      question: "Which programming language is mainly used for web development?",
      options: ["C++", "JavaScript", "Swift", "Go"],
      answer: "JavaScript"
  },
  {
      question: "Which language is used for iOS mobile app development?",
      options: ["Java", "Swift", "Kotlin", "Python"],
      answer: "Swift"
  },
  {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HighText Markup Language", "HyperTransfer Markup Language", "None of the above"],
      answer: "HyperText Markup Language"
  },
  {
      question: "Which programming language is used to develop Android apps?",
      options: ["Java", "C#", "Swift", "JavaScript"],
      answer: "Java"
  },
  {
      question: "Which language is known as the scripting language of the web?",
      options: ["PHP", "JavaScript", "C", "Ruby"],
      answer: "JavaScript"
  },
  {
      question: "Which language is used for data analysis and machine learning?",
      options: ["Java", "Python", "Ruby", "JavaScript"],
      answer: "Python"
  },
  {
      question: "What is the latest version of the Java programming language?",
      options: ["Java 8", "Java 11", "Java 17", "Java 16"],
      answer: "Java 17"
  },
  {
      question: "Which language is used in Android Studio?",
      options: ["C++", "Java", "Swift", "Ruby"],
      answer: "Java"
  },
  {
      question: "Which programming language is best for game development?",
      options: ["C++", "Java", "Python", "Swift"],
      answer: "C++"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById('question').textContent = questionObj.question;
  
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  questionObj.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.onclick = () => selectAnswer(option);
      optionsContainer.appendChild(optionButton);
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('next-button').disabled = true;
}

function selectAnswer(answer) {
  selectedAnswer = answer;
  const correctAnswer = questions[currentQuestionIndex].answer;
  const feedback = document.getElementById('feedback');
  
  if (selectedAnswer === correctAnswer) {
      feedback.textContent = "Correct!";
      score++;
  } else {
      feedback.textContent = `Incorrect! The correct answer was ${correctAnswer}.`;
  }

  document.getElementById('score').textContent = `Score: ${score}`;
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      document.getElementById('question-container').innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is ${score} out of ${questions.length}</p>`;
      document.getElementById('next-button').style.display = 'none';
  }
}

window.onload = loadQuestion;
