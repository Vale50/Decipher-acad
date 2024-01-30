Javascript File

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
    question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?
    ??",
    choice1: "<England and Scotland>",

    choice2: "<England and Frace >",
    choice3: "<England and Vikings>", 
    choice4: "<England and Normans>",
    answer: 3
  },
  {
    question:
      "Who was the British Prime Minister during the Falklands War in 1982.?",
    choice1: "<Margaret Thatcher>"
    choice2: "<Tony Blair>"
    choice3: "<Harold Wilson>"
    choice4: "<John Major >"

    answer: 1
  },
  {
    question: " The Jarrow March of 1936 was a protest against what issue?"
    choice1: "Unemployment  ",
    choice2: " High taxes",
    choice3: "Conscription",
    choice4: " Civil rights
    ",
    answer: 1
  },
  {
    question: "
     Who was the first female Member of Parliament (MP) in the UK?  ",
    
    
    choice1: "Margaret Thatcher",
    choice2: "Nancy Astor",
    choice3: " Emmeline Pankhurst",
    choice4: "Barbara Castle",
    answer: 2
  },
  {
    question: "Which British monarch was known as "Bloody Mary"?." ,
    choice1: "Mary I",
    choice2: "Mary II",
    choice3: "Elizabeth I",
    choice4: " Ann ",
    answer:1
  },
  {
    question: " The Battle of Boyne in 1690 was fought between which two sides?",
    choice1: "Catholics and Protestants",
    choice2: " England and Ireland ",
    choice3: "Scotland and England",
    choice4: " jacobites and Williamites ",
    answer: 4
  },
  {
    question: " 
Who was the British Prime Minister at the beginning of World War II in 1939 ?",
    choice1: "Neville Chamberlain",
    choice2: "Winston Churchill",
    choice3: "Clement Attlee",
    choice4: "Stanley Baldwin",
    answer: 1
  },
  {
    question: "Which British monarch was nicknamed "The Sun King"?",
    choice1: "Henry VIII",
    choice2: "Edward VII",
    choice3: "Charles I",
    choice4: " James I ",
    answer: 3
  },
  {
    question: "  The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
    choice1: " Corn (grain)",
    choice2: "Wheat ",
    choice3: "Barley",
    choice4: " Potatoes",
    answer: 1
  },
  {
    question: "Who was the last British monarch from the House of Hanover? ",
    choice1: "George I",
    choice2: "George II",
    choice3: "George III",
    choice4: "Victoria",
    answer: 4
  },
  {
    question: " 
    The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
    choice1: "Ralistsoy",
    choice2: "Parliamentarians",
    choice3: "Cavaliers",
    choice4: "Roundheads",
    answer: 2
  },
  {
    question: "" Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
    choice1: "Tony Blair",
    choice2: " Gordon Brown",
    choice3: "David Cameron",
    choice4: "Theresa May",
    answer: 2
  },
  {
    question: " ?",
    choice1:"",
    choice2: "",
    choice3: "",
    choice4: "",
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





