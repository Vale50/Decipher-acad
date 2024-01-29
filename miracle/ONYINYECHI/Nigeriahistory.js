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
    question: "What is the capital of Nigeria??",
    choice1: "<Jos>",
    choice2: "<Rivers>",
    choice3: "<Abuja>",
    choice4: "<Lagos>",
    answer: 3
  },
  {
    question:
      "These cars ____________ beautiful, but the price _____________ too high.?",
    choice1: "<is - is>",
    choice2: "<is - are>",
    choice3: "<are - are>",
    choice4: "<are - is>",
    answer: 3
  },
  {
    question: " Amy and her family _______________ today for the competition?",
    choice1: "will be arriving",
    choice2: "are arriving",
    choice3: "is arriving",
    choice4: "has arriving",
    answer: 2
  },
  {
    question: " In class yesterday, Isaac ______________ reading the longest book I had ever seen!",
    choice1: "is reading",
    choice2: "will be reading",
    choice3: "was reading",
    choice4: "was be reading",
    answer: 3
  },
  {
    question: "Mrs. Crown ________ her class about progressive verb tenses last week." ,
    choice1: "teaching",
    choice2: "is teaching",
    choice3: "was teaching",
    choice4: "will be teaching",
    answer: 3
  },
  {
    question: " Our principal ___________ to award the top readers with an ice cream party today.?",
    choice1: "planning",
    choice2: "is planning",
    choice3: "was planning",
    choice4: "will be planning",
    answer: 2
  },
  {
    question: " Onyinye _________ her hair when I called this afternoon?",
    choice1: "was washing",
    choice2: "washing",
    choice3: "is washing",
    choice4: "will wash",
    answer: 1
  },
  {
    question: "Julie __________ when she broke her ankle yesterday.",
    choice1: "skating",
    choice2: "is skating",
    choice3: "will be skating",
    choice4: "was skating",
    answer: 4
  },
  {
    question: " Right now, the children _____________ for their test.",
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
