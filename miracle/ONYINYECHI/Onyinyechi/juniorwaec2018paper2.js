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
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "Find the value of -20- (-100)",
    choice1: "120",
    choice2: "100",
    choice3: "80",
    choice4: "-80",
    choice5: "-120",
    answer: 3
  },
  {
    question 2: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 3: "Express one million, one hundred and fifty thousand and three in figure.",
    choice1: "1,150,300",
    choice2: "1,150,030",
    choice3: "1,150,003",
    choice4: "1,105,030 ",
    choice5: "1,105,003",
    answer: 3
  },
  {
    question 4: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 5: "Subtract 10101two from 111000two",
    choice1: "100001two",
    choice2: "100010two",
    choice3: "100011two",
    choice4: "101011two",
    choice5: "1001101two"
    answer: 3
  },
  {
    question 6: "Convert 46ten to base three.",
    choice1: "102three",
    choice2: "201three",
    choice3: "1012three",
    choice4: "1021three",
    choice5: "1201three"
    answer: 5
  },
  {
    question 7: "Find the sum of all the factors of 17.",
    choice1: "17",
    choice2: "18",
    choice3: "19",
    choice4: "20",
    choice5: "21"
    answer: 2
  },
  {
    question 8: "Find the product of LCM and HCF of 3 and 15",
    choice1: "15",
    choice2: "30",
    choice3: "45",
    choice4: "60",
    choice5: "75"
    answer: 3
  },
  {
    question 9: "Find the result in decimal fraction if <sup>1</sup>&frasl;<sub>8</sub> looks like 1/8 is substracted from the product of <sup>2</sup>&frasl;<sub>5</sub> looks like 2/5 and <sup>5</sup>&frasl;<sub>8</sub> looks like 5/8.",
    choice1: "0.125",
    choice2: " 0.375",
    choice3: "0.515",
    choice4: "0.900",
    choice5: "1.150"
    answer: 1
  },
  {
    question 10: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
  },
  {
    question 1: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
    answer: 
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
