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
    question 10: "Find the positive difference of the prime factors of 40.",
    choice1: "2",
    choice2: "3",
    choice3: "7",
    choice4: "11",
    choice5: "13"
    answer: 2
  },
  {
    question 11: "Find the H.C.F. of 18, 24 and 30.",
    choice1: "6",
    choice2: "5",
    choice3: "4",
    choice4: "3",
    choice5: "2"
    answer: 1
  },
  {
    question 12: "Express 0.25 as a fraction",
    choice1: "<sup>25</sup>&frasl;<sub>31</sub> looks like 25/31",
    choice2: "<sup>5</sup>&frasl;<sub>11</sub> looks like 5/11",
    choice3: "<sup>25</sup>&frasl;<sub>61</sub> looks like 25/61",
    choice4: "<sup>2</sup>&frasl;<sub>5</sub> looks like 2/5",
    choice5: "<sup>1</sup>&frasl;<sub>4</sub> looks like 1/4"
    answer: 5
  },
  {
    question 13: "In a basket containing 20 oranges, 12 are good. What fraction is bad?",
    choice1: "<sup>8</sup>&frasl;<sub>11</sub> looks like 8/11",
    choice2: "<sup>9</sup>&frasl;<sub>13</sub> looks like 9/13",
    choice3: "<sup>13</sup>&frasl;<sub>20</sub> looks like 13/20",
    choice4: "<sup>3</sup>&frasl;<sub>5</sub> looks like 3/5",
    choice5: "<sup>2</sup>&frasl;<sub>5</sub> looks like 2/5"
    answer: 4
  },
  {
    question 14: "Convert 2<sup>2</sup>&frasl;<sub>5</sub> looks like 2/5 to decimal fraction and give your answer to 1 significant figure ",
    choice1: "2",
    choice2: "2.4",
    choice3: "3",
    choice4: "3.2",
    choice5: "5"
    answer: 1 
  },
  {
    question 15: "12.5% of a number is 50, find the number.",
    choice1: "1200",
    choice2: "1000",
    choice3: "800",
    choice4: "600",
    choice5: "400"
    answer: 5
  },
  {
    question 16: "If the first common multiple of two numbers is 4, find the fifth common multiple",
    choice1: "4",
    choice2: "8",
    choice3: "12",
    choice4: "16",
    choice5: "20",
    answer: 5
  },
  {
    question 17: "Which of the following is NOT a prime number?",
    choice1: "7",
    choice2: "17",
    choice3: "29",
    choice4: "47",
    choice5: "49",
    answer: 5
  },
  {
    question 18: "What is the missing number if the following subtraction is in base two?",
    choice1: "1001",
    choice2: "1001",
    choice3: "1010",
    choice4: "1100",
    choice5: "1011",
    answer: 1
  },
  {
    question 19: "Multiply 11two by 10011two",
    choice1: "100111two",
    choice2: "110101two",
    choice3: "001100two",
    choice4: "1001010two",
    choice5: "111001two",
    answer: 5
  },
  {
    question 20: "Find the compound interest on N800.00 at 4% for 2years",
    choice1: "N3,200.00",
    choice2: "N865.28",
    choice3: "N864.00",
    choice4: "N65.28",
    choice5: "N64.00",
    answer: 4
  },
  {
    question 21: "A man budgets <sup>2</sup>&frasl;<sub>5</sub> looks like 2/5 of his pay on food <sup>2</sup>&frasl;<sub>7</sub> looks like 2/7on meant. What fraction of his pay is left? ",
    choice1: "<sup>4</sup>&frasl;<sub>35</sub> looks like 4/35",
    choice2: "<sup>11</sup>&frasl;<sub>35</sub> looks like 11/35",
    choice3: "<sup>2</sup>&frasl;<sub>5</sub> looks like 2/5",
    choice4: "<sup>24</sup>&frasl;<sub>35</sub> looks like 24/35",
    choice5: "<sup>31</sup>&frasl;<sub>35</sub> looks like 31/35",
    answer: 2
  },
  {
    question 22: "Find the reciprocal of 0.125.",
    choice1: "<sup>1</sup>&frasl;<sub>125</sub> looks like 1/125",
    choice2: "<sup>1</sup>&frasl;<sub>8</sub> looks like 1/8",
    choice3: "5",
    choice4: "8",
    choice5: "125",
    answer: 4
  },
  {
    question 23: "Find the sum of 1001two and 111101two",
    choice1: "100001two",
    choice2: "100011two",
    choice3: "100110two",
    choice4: "101101two",
    choice5: "1000110two",
    answer: 5
  },
  {
    question 24: "What is the value of A ÷ B?",
    choice1: "-<sup>1</sup>&frasl;<sub>2</sub> looks like 1/2",
    choice2: "-<sup>1</sup>&frasl;<sub>4</sub> looks like 1/4",
    choice3: "<sup>1</sup>&frasl;<sub>4</sub> looks like 1/4",
    choice4: "<sup>1</sup>&frasl;<sub>2</sub> looks like 1/2",
    choice5: "1",
    answer: 1
  },
  {
    question 25: "Find the value of 2(1 - A + B).",
    choice1: "9",
    choice2: "18",
    choice3: "25",
    choice4: "36",
    choice5: "50",
    answer: 5
  },
  {
    question 26: "",
    choice1: "-11",
    choice2: "-9",
    choice3: "6",
    choice4: "9",
    choice5: "11",
    answer: 5
  },
  {
    question 27: " A mobile phone costs N12,000.00. At what price will Ade sell it to make a loss of 20%?",
    choice1: "N14,400.00",
    choice2: "N12,000.00",
    choice3: "N9,600.00",
    choice4: "N7,600.00",
    choice5: "N5,600.00",
    answer: 3
  },
  {
    question 28: "An item is sold at Nx. If the cost of the item is Ny, which of the following expressions represents the percentage profit?",
    choice1: "<sup>y-x</sup>&frasl;<sub>y</sub> looks like y-x/y x 100%",
    choice2: "<sup>y-x</sup>&frasl;<sub>x</sub> looks like y-x/x x 100%",
    choice3: "<sup>x-y</sup>&frasl;<sub>y</sub> looks like x-y/y x 100%",
    choice4: "<sup>x+y</sup>&frasl;<sub>y</sub> looks like x+y/y x 100%",
    choice5: "<sup>x-y</sup>&frasl;<sub>x</sub> looks like x-y/x x 100%",
    answer: 3
  },
  {
    question 29: "A sachet of pure water costs N1.00, if 20 sachets bought at once would be given for N150.00, how much is saved on hundred sachets bought?",
    choice1: "N150.00",
    choice2: "N180.00",
    choice3: "N200.00",
    choice4: "N250.00",
    choice5: "280.00",
    answer: 4
  },
  {
    question 30: "In an examination, a candidate obtained a score of 70%. If the obtainable score for the examination is 80, what was the candidate’s score? ",
    choice1: "56",
    choice2: "70",
    choice3: "75",
    choice4: "80",
    choice5: "100",
    answer: 1
  },
  {
    question 31: "How many quadrilaterals are in the diagram below?",
    choice1: "5",
    choice2: "4",
    choice3: "3",
    choice4: "2",
    choice5: "1",
    answer: 3
  },
  {
    question 32: "How many vertices has a cuboid?",
    choice1: "4",
    choice2: "6",
    choice3: "8",
    choice4: "12",
    choice5: "16",
    answer: 3 
  },
  {
    question 33: "Which of the following properties is NOT of a kite?",
    choice1: "One pair of opposite angles are equal.",
    choice2: "The diagonals meet at right angles",
    choice3: "There is one line of symmetry",
    choice4: "There are two lines of symmetry",
    choice5: "Two pairs of adjacent sides are equal "
    answer: 4
  },
  {
    question 34: "Find the perimeter of a circle whose diameter is 11.2cm.",
    choice1: "11.2cm",
    choice2: "17.6cm",
    choice3: "23.4cm",
    choice4: "35.2cm",
    choice5: "70.4cm",
    answer: 4
  },
  {
    question 35: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "",
    answer: 
  },
  {
    question 36: "Calculate /AC/ in the figure below",
    choice1: "2cm",
    choice2: "3cm",
    choice3: "4cm",
    choice4: "5cm",
    choice5: "6cm",
    answer: 1
  },
  {
    question 37: "Calculate the area of a rhombus, whose diagonals are 8cm and 16cm long.",
    choice1: "8cm<sup>2</sup>",
    choice2: "16cm<sup>2</sup>",
    choice3: "24cm<sup>2</sup>",
    choice4: "32cm<sup>2</sup>",
    choice5: "64cm<sup>2</sup>",
    answer: 5
  },
  {
    question 38: "Two similar cylinders have radii 3cm and 4cm. If the first cylinder has a volume of 270cm<sup>3</sup>, find the volume of the second cylinder",
    choice1: "640cm<sup>3</sup>",
    choice2: "480cm<sup>3</sup>",
    choice3: "270cm<sup>3</sup>",
    choice4: "200cm<sup>3</sup>",
    choice5: "153cm<sup>3</sup>",
    answer: 2
  },
  {
    question 39: "In a rectangular shape the breadth can be expressed as",
    choice1: "<sup>perimeter</sup>&frasl;<sub>2</sub> looks like perimeter/2 - Length",
    choice2: "<sup>length</sup>&frasl;<sub>2</sub> looks like length/2 - Perimeter",
    choice3: "<sup>length</sup>&frasl;<sub>2</sub> looks like length/2 - + Perimeter",
    choice4: "<sup>perimeter</sup>&frasl;<sub>2</sub> looks like perimeter/2 + Length",
    choice5: "Perimeter - Length",
    answer: 1
  },
  {
    question 40: "Find the value of a in the diagram below.",
    choice1: "42",
    choice2: "43",
    choice3: "84",
    choice4: "95",
    choice5: "105"
    answer: 3
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
