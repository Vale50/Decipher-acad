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
  <div class="question-number"><strong>1.</strong></div> 
  {
    question : "Find the square root of 4x<sup>2</sup>.",
    choice1: "<x>",
    choice2: "<2x>",
    choice3: "<3x>",
    choice4: "<16x>",
    choice5: "<16x<sup>-4</sup>>",
    answer: 2
  },
  <div class="question-number"><strong>2.</strong></div> 
  {
    question:"Evaluate 3a – (4a+ 6a).",
    choice1: "<7a>",
    choice2: "<5a>",
    choice3: "<-7a>",
    choice4: "<-5a>",
    choice5: "<-4a>",
    answer: 3
  },
  <div class="question-number"><strong>3.</strong></div> 
  {
    question: "What is the coefficient of b in the expression b<sup>2</sup> – 5b + 18?",
    choice1: "-18",
    choice2: "-5",
    choice3: "1",
    choice4: "5",
    choice5: "18",
    answer: 2
  },
  <div class="question-number"><strong>4.</strong></div> 
  {
    question: "Represent x ≥ 3 on the number line.",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: "", 
    answer: 5
  },
  <div class="question-number"><strong>5.</strong></div> 
  {
    question: "Expand (z + 2)(9 – z)" ,
    choice1: "-z<sup>2</sup> – 7z – 18",
    choice2: "–z<sup>2</sup> – 7z + 18",
    choice3: "-z<sup>2</sup> + 7z + 18",
    choice4: "z<sup>2</sup> – 7z + 18",
    choice5: "z<sup>2</sup> + 7z + 18",
    answer: 3
  },
  <div class="question-number"><strong>6.</strong></div> 
  {
    question: "Make x the subject of the formula m =<sup>1</sup>&frasl;<sub>3</sub> rx",
    choice1: "rx",
    choice2: "<sup>r</sup>&frasl;<sub>3m</sub> ",
    choice3: "<sup>3m</sup>&frasl;<sub>r</sub> ",
    choice4: "<sup>1</sup>&frasl;<sub>3</sub> r",
    choice5: "<sup>1</sup>&frasl;<sub>3</sub> rx",
    answer: 3
  },
  <div class="question-number"><strong>7.</strong></div> 
  {
    question: "Make P the subject of the formula Pk + 2 = N",
    choice1: "P =<sup>2-N</sup>&frasl;<sub>k</sub>",
    choice2: "P =<sup>N-2</sup>&frasl;<sub>k</sub>",
    choice3: "P =<sup>N-k</sup>&frasl;<sub>2</sub>",
    choice4: "P =<sup>k-N</sup>&frasl;<sub>2</sub>",
    choice5: "P =<sup>2N-k</sup>&frasl;<sub>P</sub>",
    answer: 2
  },
  <div class="question-number"><strong>8.</strong></div> 
  {
    question: "Doba has Y naira. He spent N35.00. The amount he has left is greater than N15.00. Write an inequality in Y.",
    choice1: "Y + 35> 15",
    choice2: "Y – 35 < 15",
    choice3: "Y – 35 > 15",
    choice4: "Y + 35 < 15",
    choice4: "Y – 35> - 15",
    answer: 3
  },
  <div class="question-number"><strong>9.</strong></div> 
  {
    question: "Simplify 4(r + 3t) – 4(2t – r)",
    choice1: "4 (2r + t)",
    choice2: "8r + t",
    choice3: "4(2r – t)",
    choice4: "4(2t – r)",
    choice5: "4t",
    answer: 1
  },
  <div class="question-number"><strong>10.</strong></div> 
  {
    question: "Find x and y in the simultaneous equations x + y = 4; 3x + y = 8",
    choice1: "x = -2, y = -2",
    choice2: "x = -2, y = 2",
    choice3: "x = 2, y = -2",
    choice4: "x = 2, y = 3",
    choice5: "x = 2, y = 2",
    answer: 5
  },
  <div class="question-number"><strong>11.</strong></div> 
  {
    question: "Solve the inequality 3x + 2 ≥ 4x – 6",
    choice1: "x ≤ - 8",
    choice2: "x ≤ 8",
    choice3: "x > 4",
    choice4: "x ≥ - 6",
    choice5: "x ≥ 8",
    answer: 2
  },
  <div class="question-number"><strong>12.</strong></div> 
  {
    question: "Solve for x if <sup>1</sup>&frasl;<sub>15</sub>(6 + x) = <sup>1</sup>&frasl;<sub>6</sub>(x + 3)",
    choice1: "9",
    choice2: "1",
    choice3: "<sup>2</sup>&frasl;<sub>3</sub>",
    choice4: "<sup>-2</sup>&frasl;<sub>3</sub>",
    choice5: "-1",
    answer: 5
  },
  <div class="question-number"><strong>13.</strong></div> 
  {
    question: "A train travels x km at an average speed of  <sup>v</sup>&frasl;<sub>2</sub> Km/h. How long does it takes?",
    choice1:"2xv hours",
    choice2: "<sup>2v</sup>&frasl;<sub>x</sub> hours",
    choice3: "<sup>2</sup>&frasl;<sub>xv</sub> hours",
    choice4: "<sup>xv</sup>&frasl;<sub>2</sub> hours",
    choice5: "<sup>2x</sup>&frasl;<sub>v</sub> hours",
    answer: 5
  },
  <div class="question-number"><strong>14.</strong></div> 
  {
    question: "The coefficient of a2 in the expression 3a<sup>2</sup> – 2a + 25 is",
    choice1: "-3",
    choice2: "-2",
    choice3: "2",
    choice4: "3",
    choice5: "25",
    answer: 4
  },
  <div class="question-number"><strong>15.</strong></div> 
  {
    question15: "If y = 6 and 4x + y = 22, find x",
    choice1:"4",
    choice2: "6",
    choice3: "8",
    choice4: "16",
    choice5: "22",
    answer: 1
  },
  <div class="question-number"><strong>16.</strong></div> 
  {
    question: "Factorize a<sup>2</sup> + 3ab – 5ab – 15b<sup>2</sup> completely",
    choice1:"a(a -2ab)-b<sup>2</sup>",
    choice2: "a<sup>2</sup> – (2a + b) b",
    choice3: "a<sup>2</sup> – (2a –b)b",
    choice4: "(a-5b)(a + 3b)",
    choice5: "(a – 3b)(a + 5b)",
    answer: 4
  },
  <div class="question-number"><strong>17.</strong></div> 
  {
    question: "Remove the brackets in (q+3)(2q+3)",
    choice1:"q + 5q + 9",
    choice2: "2q + 9q + 9",
    choice3: "2q<sup>2</sup> + 9q + 6",
    choice4: "2q<sup>2</sup> + 9q + 9",
    choice5: "3q<sup>2</sup> – 9q + 3",
    answer: 4
  },
  <div class="question-number"><strong>18.</strong></div> 
  {
    question: "Simplify (<sup>2x</sup>&frasl;<sub>5</sub>)<sup>2</sup>",
    choice1:"(<sup>4x</sup>&frasl;<sub>5</sub>)",
    choice2: "(<sup>4x</sup>&frasl;<sub>25</sub>)<sup>2</sup>",
    choice3: "(<sup>4x</sup>&frasl;<sub>25</sub>)",
    choice4: "(<sup>4</sup>&frasl;<sub>25</sub>)<sup>2</sup>",
    choice5: "(<sup>2x</sup>&frasl;<sub>25</sub>)",
    answer: 3
  },
  <div class="question-number"><strong>19.</strong></div> 
  {
    question: "If a certain number x is subtracted from 3, the result is less than 5. Find the range of the value of x.",
    choice1:"x < 2",
    choice2: "x < - 2",
    choice3: "x > 2",
    choice4: "x > -2",
    choice5: "x ≤ 2",
    answer: 4
  },
  <div class="question-number"><strong>20.</strong></div> 
  {
    question: "Solve <sup>1</sup>&frasl;<sub>x-3</sub> - <sup>2</sup>&frasl;<sub>x-4</sub> = 0",
    choice1:"2",
    choice2: "3",
    choice3: "4",
    choice4: "6",
    choice5: "7",
    answer: 1
  },
  <div class="question-number"><strong>21.</strong></div> 
  {
    question: "Make x the subject of the formula if 16(a + b) = 4x<sup>2</sup>y",
    choice1:"x = <sup>4(𝑎+𝑏)</sup>&frasl;<sub>𝑦</sub>",
    choice2: "x = 2 <sup>(𝑎+𝑏)</sup>&frasl;<sub>𝑦</sub>",
    choice3: "x = <sup>2(𝑎+𝑏)</sup>&frasl;<sub>𝑦</sub>",
    choice4: "x = <sup>2(𝑎+𝑏)</sup>&frasl;<sub>𝑦</sub>",
    choice5: "x = <sup>2(𝑎+𝑏)</sup>&frasl;<sub>𝑦</sub>",
    answer: 2
  },
  <div class="question-number"><strong>22.</strong></div> 
  {
    question: "Factorize the expression m (3m-2) + 2m<sup>2</sup>",
    choice1:"m(5m – 2)",
    choice2: "m(5m +2)",
    choice3: "m(5m<sup>2</sup> – 2)",
    choice4: "m<sup>2</sup> (5m – 2)",
    choice5: "m<sup>2</sup>(5m + 2)",
    answer: 1
  },
  <div class="question-number"><strong>23.</strong></div> 
  {
    question: "Solve the equations 2x – 6y = 12 and 8x + 6y = 18 simultaneously.",
    choice1:"(-3, -1)",
    choice2: "(-3, 1)",
    choice3: "(3, 1)",
    choice4: "(3, 1)",
    choice5: "(3, 2)", 
    answer: 3
  },
  <div class="question-number"><strong>24.</strong></div> 
  {
    question: "Find the product of (x + 2) and (x – 3).",
    choice1:"x<sup>2</sup> – 5x – 6",
    choice2: "x<sup>2</sup> – 3x – 6",
    choice3: "x<sup>2</sup> – 2x -6",
    choice4: "x<sup>2</sup> – x - 6",
    choice5: "x<sup>2</sup> – x – 5",
    answer: 4
  },
  <div class="question-number"><strong>25.</strong></div> 
  {
    question: "Solve the inequality 7- x > 4",
    choice1:"x < - 11",
    choice2: "x < - 3",
    choice3: "x < 11",
    choice4: "x < 3",
    choice5: "x > - 11",
    answer: 4
  },
  <div class="question-number"><strong>26.</strong></div> 
  {
    question: "If 12 is added to 3 times a certain number, the result is 24, what is the number?",
    choice1:"3",
    choice2: "4",
    choice3: "12",
    choice4: "24",
    choice5: "25",
    answer: 2
  },
  <div class="question-number"><strong>27.</strong></div> 
  {
    question: "Evaluate <sup>2(𝑃−3𝑞)</sup>&frasl;<sub>5𝑅</sub>, given that P = 2, q = -2 and R = 1.",
    choice1:"<sup>-2</sup>&frasl;<sub>5</sub>",
    choice2: "<sup>2</sup>&frasl;<sub>5</sub>",
    choice3: "1",
    choice4: "2",
    choice5: "5",
    answer: 4
  },
  <div class="question-number"><strong>28.</strong></div> 
  {
    question: "Solve the simultaneous equations:2x + y = 8 ; X + y = 5"
    choice1:"x = 2, y = 4",
    choice2: "x = 2, y = 3",
    choice3: "x = 3, y = 2",
    choice4: "x = -3, y = 2",
    choice5: "x = -3, y = -2",
    answer: 3
  },
  <div class="question-number"><strong>29.</strong></div> 
  {
    question: "Factorize 10mn + 10m",
    choice1:"10m (n+1)",
    choice2: "10m (10 + n)",
    choice3: "10m (n-1)",
    choice4: "n + 1",
    choice5: "n -1",
    answer: 1
  },
  <div class="question-number"><strong>30.</strong></div> 
  {
    question: "Find the range of the values of x for which 4 – x < 2",
    choice1:"x > 2",
    choice2: "x < 2",
    choice3: "x ≤ 2",
    choice4: "x ≥ 2",
    choice5: "x – 2",
    answer: 1
  },
  {"use the following table of value for y = 2 + 3x to answer questions 31 and 32."
   
    <div class="question-number"><strong>31.</strong></div> 
    question31: "Calculate the value of a2.",
    choice1:"25",
    choice2: "14",
    choice3: "10",
    choice4: "9",
    choice5: "5",
    answer: 1
  },
  <div class="question-number"><strong>32.</strong></div> 
  {
    question32: "Evaluate a + b",
    choice1:"5",
    choice2: "16",
    choice3: "25",
    choice4: "30",
    choice5: "36",
    answer: 2
  },
  <div class="question-number"><strong>33.</strong></div> 
  {
    question33: "Which of the following inequalities represents the number line shown below?
    
                                                                                     ",
    choice1:"x ≥ 2",
    choice2: "x - < -3",
    choice3: "x ≤ - 2",
    choice4: "x > -3",
    choice4: "x ≥ - 3",
    answer: 5
  },
  <div class="question-number"><strong>34.</strong></div> 
  {
    question34: "Which of these inequalities represents the number line below?
    
                                                 ",
    choice1:"x <2",
    choice2: "x ≥ 2",
    choice3: "x ≤ 2",
    choice4: "x > 2",
    choice5: "x = 2",
    answer: 4
  },
  <div class="question-number"><strong>35.</strong></div> 
  {
    question: "Given that 2a + b = 5 and a + 2b = 4, find the value of a.",
    choice1:"-2",
    choice2: "1",
    choice3: "2",
    choice4: "4",
    choice5: "5",
    answer: 3
  },
  <div class="question-number"><strong>36.</strong></div> 
  {
    question: "Expand the expression ( x + 3)(x -3).",
    choice1:"x<sup>2</sup> + 3",
    choice2: "x<sup>2</sup> - 9",
    choice3: "x<sup>2</sup> + 9x + 9",
    choice4: "x<sup>2</sup> – 9x + 9",
    choice5: "x<sup>2</sup> + 9x -9>",
    answer: 2
  },
  <div class="question-number"><strong>37.</strong></div> 
  {
    question: "When 40 is divided by the product of k and 2, the result is 5. Find k.",
    choice1:"-4",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    choice5: "6",
    answer: 3
  },
  <div class="question-number"><strong>38.</strong></div> 
  {
    question: "Factorize 3pq<sup>3</sup> – 12pq completely",
    choice1:"3pq (p<sup>2</sup>-4)",
    choice2: "3pq (p - 2)(P + 2)",
    choice3: "3pq (p – 2)(p-2)",
    choice4: "3p<sup>2</sup>p(p – 4)",
    choice5: "3p<sup>2</sup>q (p + 4)",
    answer: 2
  },
  <div class="question-number"><strong>39.</strong></div> 
  {
    question: "If x 14 <span>&#8730;</span syle="border-top:1px solid white"> <sup>b</sup>&frasl;<sub>a</sub> </span>, express b in terms of a and x",
    choice1:"16ax<sup>2</sup>",
    choice2: "16ax",
    choice3: "16a<sup>2</sup>x",
    choice4: "16a<sup>2</sup>x<sup>2</sup>",
    choice5: "16x",
    answer: 1
  },
  <div class="question-number"><strong>40.</strong></div> 
  {
    question: "One-half of a number is equal to 5. What is the number?",
    choice1:"<sup>1</sup>&frasl;<sub>2</sub>",
    choice2: "2<sup>1</sup>&frasl;<sub>2</sub>",
    choice3: "5",
    choice4: "10",
    choice5: "20",
    answer: 4
  },
  <div class="question-number"><strong>41.</strong></div> 
  {
    question: "A boy is x years old and his father is 10 years more than twice his age. Calculate the father’s age in terms of x.",
    choice1:"10x + 2 years",
    choice2: "12x years",
    choice3: "14x years",
    choice4: "2x + 10 years",
    choice5: "2x years",
    answer: 4
  },
  <div class="question-number"><strong>42.</strong></div> 
  {
    question: "Solve the equation <sup>x+2</sup>&frasl;<sub>3</sub> + 2x = 10",
    choice1:"9<sup>1</sup>&frasl;<sub>3</sub>",
    choice2: "5",
    choice3: "4<sup>2</sup>&frasl;<sub>3</sub>",
    choice4: "4",
    choice5: "1<sup>1</sup>&frasl;<sub>7</sub>",
    answer: 4
  },
  <div class="question-number"><strong>43.</strong></div> 
  {
    question: "Solve for P in the equation: <sup>4</sup>&frasl;<sub>P-2</sub> + <sup>2</sup>&frasl;<sub>P-2</sub> = 0",
    choice1:"-2",
    choice2: "-<sup>1</sup>&frasl;<sub>3</sub>",
    choice3: "<sup>1</sup>&frasl;<sub>3</sub>",
    choice4: "2",
    choice5: "3",
    answer: 2
  },
  <div class="question-number"><strong>44.</strong></div> 
  {
    question: "Find the value of y if <sup>4</sup>&frasl;<sub>y-1</sub> = <sup>1</sup>&frasl;<sub>y</sub>",
    choice1:"<sup>-1</sup>&frasl;<sub>3</sub>",
    choice2: "<sup>1</sup>&frasl;<sub>7</sub>",
    choice3: "<sup>1</sup>&frasl;<sub>6</sub>",
    choice4: "<sup>1</sup>&frasl;<sub>5</sub>",
    choice5: "<sup>1</sup>&frasl;<sub>3</sub>",
    answer: 5
  },
  <div class="question-number"><strong>45.</strong></div> 
  {
    question: "Find the value of x if 12x + 3 = 4x – 1?",
    choice1:"<sup>-1</sup>&frasl;<sub>2</sub>",
    choice2: "<sup>1</sup>&frasl;<sub>4</sub>",
    choice3: "<sup>1</sup>&frasl;<sub>2</sub>",
    choice4: "2",
    choice5: "4",
    answer: 1
  },
  <div class="question-number"><strong>46.</strong></div> 
  {
    question: "Factorize 81-16b<sub>2</sub>",
    choice1:"(9-4b)<sub>2</sub>",
    choice2: "(9+4b)<sub>2</sub>",
    choice3: "(4b – 9)(4b + 9)",
    choice4: "(9-4b)(9+4b)",
    choice5: "(9 + 4b)(4b -9)",
    answer: 4
  },
  <div class="question-number"><strong>47.</strong></div> 
  {
    question: "Solve for x in the equation: 2<sup>1</sup>&frasl;<sub>4</sub> - <sup>11`</sup>&frasl;<sub>2x</sub> = 0",
    choice1:"-2<sup>4</sup>&frasl;<sub>9</sub>",
    choice2: "-<sup>9</sup>&frasl;<sub>22</sub>",
    choice3: "<sup>11</sup>&frasl;<sub>22</sub>",
    choice4: "<sup>9</sup>&frasl;<sub>22</sub>",
    choice5: "2<sup>4</sup>&frasl;<sub>9</sub>",
    answer: 5
  },
  <div class="question-number"><strong>48.</strong></div> 
  {
    question: "Express b in terms of a, c and P in <sup>b-4ac</sup>&frasl;<sub>p</sub> = 3",
    choice1:"b=<span>&#8730;</span syle="border-top:1px solid white"> 3p+4ac</span>",
    choice2: "b=<span>&#8730;</span syle="border-top:1px solid white"> 3p-4ac</span>",
    choice3: "b=<span>&#8730;</span syle="border-top:1px solid white"> <sup>3p</sup>&frasl;<sub>-4ac</sub> </span>",
    choice4: "b=3p+4ac",
    choice5: "b=3p-4ac",
    answer: 1
  },
  "Use the data below to answer questions 49 and 50. In a NECO JSCE Mathematics examination, the following are the scores of certain students:"
  <div class="question-number"><strong>49.</strong></div>  
  {
    question: "Find the median of the data",
    choice1:" 20",
    choice2: "30",
    choice3: "40",
    choice4: "50",
    choice5: "70",
    answer: 3
  },
  <div class="question-number"><strong>50.</strong></div> 
  {
    question50: "What is the mode of the data?",
    choice1:"70",
    choice2: "50",
    choice3: "40",
    choice4: "30",
    choice5: "`17`",
    answer: 2
  },
  


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



