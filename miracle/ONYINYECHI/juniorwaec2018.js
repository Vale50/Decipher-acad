const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question 1: "The sum of a certain number and 16 is 42. What is the number?",
    choice1: "<20>",
    choice2: "<22>",
    choice3: "<24>",
    choice4: "<26>",
    choice5: "<28>",
    answer: 
  },
  {
    question 2: "Find the product of (y-3) and (y + 3).?",
    choice1: "y<sup>2</sup>-6y+9",
    choice2: "y<sup>2</sup>-9",
    choice3: "y<sup>2</sup>-6y-9",
    choice4: "y<sup>2</sup>+9",
    choice5: "y<sup>2</sup>+3"
    answer: 
  },
  {
    question 3: "A man is 26 years older than his son. He is also 8 years older than three times his son’s age. Find the son’s age?",
    choice1: "9 years",
    choice2: "10 years",
    choice3: "12 years",
    choice4: "14 years",
    choice5: "18 years"
    answer: 
  },
  {
    question 4: " The factors of x<sup>2</sup> + x - 12 are",
    choice1: " (x - 4) and (x - 3)",
    choice2: " (x - 4) and (x + 3)",
    choice3: " (x + 4) and (x - 3)",
    choice4: " (x + 3) and (x + 4)",
    choice5: " (x + 6) and (x - 2)"
    
    answer: 
  },
  {question 5: "" ,
  choice1: "",
  choice2: "",
  choice3: "",
  choice4: "",
  choice5: ""

    question 6: "Factorize:4x<sup>2</sup> - 3y - 6x + 2xy." ,
    choice1: "(2x - y)(2x -3)",
    choice2: "(x - 2y)(2x - 3)",
    choice3: "(2x + 3)(2x + y)",
    choice4: "(2x + y)(2x - 3)",
    choice5: "(2x - y)(2x + 3)",
    answer: 
  },
  {
    question 7: " Solve the equation",
    choice1: "-12",
    choice2: "-6",
    choice3: "6",
    choice4: "10",
    choice5: "12"
    answer: 
  },
  {
    question 8: "Find x if 2x + 3x + 3x - 4x = 8x<sup>2</sup>",
    choice1: "0 or 4",
    choice2: "0 or 2",
    choice3: "0 or <sup>3</sup>&frasl;<sub>4</sub> looks like 3/4",
    choice4: "0 or <sup>1</sup>&frasl;<sub>2</sub> looks like 1/2",
    choice5: "0 or <sup>1</sup>&frasl;<sub>4</sub> looks like 1/4"
    answer: 
  },
  {
    question 9: " Solve the simultaneous equations: x - 2y + 3 = 0, 3x + 2y = 7",
    choice1: "are studying",
    choice2: "studying",
    choice3: "were studying",
    choice4: "will study",
    answer: 1
  },
  {
    question: " My aunt ___________ to Albertville tomorrow",
    choice1: "is moving",
    choice2: "shall moving",
    choice3: "will be moving",
    choice4: "was moving",
    answer: 3
  },
  {
    question: " Mr Kelley ____________ to church every Sunday.?",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: 1
  },
  {
    question: " Mr Kelley ____________ to church every Sunday.?",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: 4
  },
  {
    question: " Jason and Roland were riding their bikes when it started to rain?",
    choice1:"present progressive",
    choice2: "past progressive",
    choice3: "future progressive",
    choice4: "none of the above",
    answer: 2
  },
  {
    question: " The scientist will be talking about his research at the next meeting",
    choice1: "future progressive",
    choice2: "past progressive",
    choice3: "present progressive",
    choice4: "all of the above",
    answer: 1
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
];

//CONSTANTS
const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 15;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();