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
    choice1: "x = -4, y = 1",
    choice2: "x = -3, y = 0",
    choice3: "x = 1, y = -3 ",
    choice4: "x = 1, y = 2",
    choice5: " x = 2, y = 1",
    answer: 
  },
  {
    question 10: " The sum of 2 times a number and 3 times another number is 4. The first number minus the second number is -3. What are the numbers?",
    choice1: "-3 and 6",
    choice2: "-1 and 2",
    choice3: "2 and 5",
    choice4: "6 and 3",
    choice5: "7 and 11",
    answer: 
  },
  {
    question 11: "The product of 5 and the sum of 12 and a certain number is 10. What is the number?",
    choice1: "-15",
    choice2: "-10",
    choice3: "-5",
    choice4: "5",
    choice5: "10"
    answer: 
  },
  {
    question 12: "Solve for z if <sup>4</sup>&frasl;<sub>z</sub>looks like 4/z + <sup>4</sup>&frasl;<sub>3z</sub>looks like 4/3z = <sup>z</sup>&frasl;<sub>3</sub>looks like z/3?",
    choice1: "±3",
    choice2: "±4",
    choice3: "±6",
    choice4: "±16",
    choice5: "±24"
    answer: 
  },
  {
    question 13: " If y -2x = 3, x + y = 3. Find the values of x and y?",
    choice1:" x = 0, y = 3",
    choice2: "x = 3, y = 0",
    choice3: "x = -3, y = 0",
    choice4: " x = 0, y = 0",
    choice5: "x = 3, y = -3",
    answer: 
  },
  {
    question 14: "If 4x + 2y = 0, 3x – y = 5, find x + y.",
    choice1: "3",
    choice2: "2",
    choice3: "1",
    choice4: "-1",
    choice5: "-2",
    answer: 
  },
  {
    question 15: " Given that 3x + 2y = 5, 2x + 5y = 3, find <sup>x</sup>&frasl;<sub>y</sub>looks like x/y",
    choice1:"29 ",
    choice2: "19",
    choice3: "17",
    choice4: "-19",
    choice5: "-29",
    answer: 
  }, 
  {
    question 16: "Simplify 10x - 7y - 6x + 5y ",
    choice1: "2(4x - 2y)",
    choice2: "2(2x - y)",
    choice3: " 2x - y ",
    choice4: " 2x(2x - 2y)",
    choice5: "2(10x - 7y)",
    answer: 
  }, 
  {
    question 17: " Find the length of the diagonal of a rectangle whose length and breadth are 4m and 3m respectively",
    choice1: "6",
    choice2: "5",
    choice3: "4",
    choice4: "3",
    choice5: "2",
    answer: 
  }, 
  {
    question 18: "Solve the equation <sup>2x-3</sup>&frasl;<sub>7</sub>looks like 2x-3/7",
    choice1: "18",
    choice2: "19",
    choice3: "20",
    choice4: "21",
    choice5: "22",
    answer: 
  }, 
  {
    question 19: "If one-tenth of a number is added to 2, the result is half of that number, find the number. ",
    choice1: "2.5",
    choice2: "3.3",
    choice3: "4.2",
    choice4: "5.0",
    choice5: "6.7",
    answer: 
  },
  {
    question 20: "Represent x ≤4 on the number line",
    choice1:" ",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  }, 
  {
    question 21: " If a certain number K is added to 6, the result is greater than 3. Find the range of the values of K",
    choice1: "K > 3",
    choice2: "K > -3",
    choice3: "K < 3",
    choice4: "K < -3",
    choice5: "K ≥ -3",
    answer: 
  },  
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  }, 
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  },
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  }, 
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  }, 
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  }, 
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  },  
  {
    question: " ",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  },                            
];

//CONSTANTS
const CORRECT_BONUS = 2;
const MAX_QUESTIONS = 50;

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