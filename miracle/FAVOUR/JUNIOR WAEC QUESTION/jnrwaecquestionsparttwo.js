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

let questions = {
    question1: "What is the place value of 3 in 4321?  ",
    choice1: "Hundred   ",
    choice2: " Hundredth",
    choice3: " Tenth ",
    choice4: "Thousand ",
    choice5:" Units",
    answer: 1
  },
  {
    question2: " Round off 0.01256 to three significant figures "
     choice1: " 0.01"
    choice2:"  0.012 "
    choice3: "0.013 "
    choice4: " 0.0125"
    choice5: "0.0126"
    answer:5
  },
  {
    question3: "<span>&#8730;</span><span style="border-top:1px solid white"> 3 <sup>1</&frasl;<sub>16</sub><?span>

    choice1: "1<sup>1</&frasl;<sub>4</sub>"
    choice2: "1<sup>1</&frasl;<sub>2</sub>"
    choice3: "1<sup>3</&frasl;<sub>4</sub>"
    choice4: "2<sup>1</&frasl;<sub>4</sub>" 
    choice5:"2<sup>1</&frasl;<sub>2</sub>"
    answer: 3
  },
  {
    question4:"The sum of 8 and a certain number is equal to the product of the number and 3. What is the number?"
    choice1: "3 "
    choice2: "4 "
    choice3: "5"
    choice4: "8 "
    choice5:"10"
    answer: 2
  },
  {
    question5:  " A man bought a Mathematics textbook for N1,680.00 and sold it for N1,200.00.Find his percentage loss "
    choice1:" 8.80%"
    choice2: "28.57%"
    choice3: " 40.00%"
    choice4: " 48.00%"
    choice5:" 71.43%  "
    answer: 2
  },
  {
    question6: " Find the sum of the prime factors of 180"
    choice1: "10"
    choice2: " 11"
    choice3: "  19"
    choice4: "34"
    choice5:"79"
    answer:  1
    {
      question7: "A profit of 23% was made on an article bought for N4,800.00. What was the selling price?"
      choice1: "<N1,104.00>"
      choice2: "<N3,696.00>"
      choice3: "<N4,800.00>" 
      choice4: "< N5,904.00>"
      choice5:"<N5,940.00>"
      answer: 4
    },
    {
      question8:"Find the HCF of 18a<sup>2y and 27x<sup>2y<sup>2"
      choice1: "< 9ax>"
      choice2: "<9y  >"
      choice3: "< 6axy >"
      choice4: "< 6ax >"
      choice5:"<2ay>"
      answer: 2
    },
    {
      question9: "Convert 19ten to a binary number. "
      choice1: " 10001two   "
      choice2: "  10011two "
      choice3: " 10101two"
      choice4: "10111two  "
      choice5:"11001two"
      answer: 2
    },
    {
      question10: "What is the smallest number by which 60 must be multipled to be a perfect square?  "
      choice1: "2"
      choice2: "3 "
      choice3: " 5 "
      choice4: " 10"
      choice5:"15"
      answer: 5
    },
    {
      question11: " If 6 men can finish a particular work in 4 days, how many days will it take 8 men to finish the same work if they are working at the same rate?  " 
      choice1: " 2"
      choice2: "3"
      choice3: " 4"
      choice4: " 6"
      choice5:"8"
      answer:2
    },
    {
      question12: "What is the missing number if the following subtraction is 
      in base two?
      1 1 0 0 1 0 1 0
      -
      x x x x x x x x 
      1 0 1 0 1 0 1 1"
      choice1: "1011111 "
      choice2: "111111 "
      choice3: "101111 "
      choice4: " 11111  "
      choice5:"10111    "
      answer: 4
    },
    {
      question13: "Express 144eight in base ten."
      choice1: "120"
      choice2: " 116"
      choice3: "100"
      choice4: "96"
      choice5:"70"
      answer: 3
    },
    {
      question14: " Find the simple interest on N650.00 for 2 years at 6% per annum "
      choice1: "N13,00"
      choice2: "N39.00"
      choice3: "N65.00"
      choice4: "N78.00 "
      choice5:"N728.00"
      answer: 4
    },
    {
      question15: "  The number of girls in a mixed school is 375. If the ratio of boys to girls in the school is 4:5, find the number of boys in the school. "
      choice1: "275 "
      choice2: "300"
      choice3: "325"
      choice4: "375 "
      choice5:"675"
      answer: 2
    },
    {
      question16: " Evaluate <sup>0.01 𝑥 0.04</&frasl;<sub>0.0002</sub>, giving your answer in standard form"
      choice1: "2 x 10-<sup>3"
      choice2: " 2 x 10-<sup>2"
      choice3: " 2 x 10-<sup>1"
      choice4: " 2 x 10-1"
      choice5:"2 x 10<sup>1  "
      answer: 4
    },
    {
      question17: "What is the positive difference between -3.9 and 3.9 ?"
      choice1: "0 "
      choice2: "3.9"
      choice3: "7.8"
      choice4: "111.7 "
      choice5:"15.6"
      answer: 3
    },
    {
      question18: ". A man spends <sup>1</&frasl;<sub>3</sub> of his salary on food and <sup>1</&frasl;<sub>4</sub> on school fees of his children. What fraction of his salary is left??"
      choice1: " <sup>1</&frasl;<sub>6</sub>"
      choice: " <sup>1</&frasl;<sub>3</sub>"
      choice3: " <sup>-1</&frasl;<sub>5</sub>"
      choice4: " <sup>1</&frasl;<sub>2</sub>"
      choice5:" <sup>7</&frasl;<sub>12</sub>" 
      answer: 3
    },
    {
      question19:  "Express 0.375 as a fraction is its lowest terms.  ?"
      choice1:" <sup>75</&frasl;<sub>200</sub> "
      choice2: " <sup>15</&frasl;<sub>12</sub>"
      choice3: " <sup>3</&frasl;<sub>8</sub>"
      choice4: " <sup>5</&frasl;<sub>8</sub>"
      choice5:" <sup>3</&frasl;<sub>4</sub>"
      answer: 3
    },
    {
      question20: "If 3.5% of a number is 3.5, what is the number? "
      choice1: "7"
      choice2: "28"
      choice3: "56"
      choice4: "70"
      choice5:"100"
      answer:5
    },
    {
      question21: "Convert 10110two to base ten. "
      choice1: " 16"
      choice2: " 18"
      choice3: " 20"
      choice4: " 22 "
      choice5:"24"
      answer:4
    },
    {
      question22: " "
      choice1: ""
      choice2: ""
      choice3: ""
      choice4: ""
      answer: 
    },
    {
      question23:"What is the co-efficient of r in the expansion of (3r - 5) (2r + 3)?"
      choice1: "-1"
      choice2: "1"
      choice3: "5"
      choice4: "6"
      choice5:"15"
      answer: 1
    },
    {
      question24: ". The sum of 4 items a certain number and 9 is equal to the sum of the number and 12. What is the number??"
      choice1: " 1"
      choice2: "3"
      choice3: " 7"
      choice4: "12"
      choice5:"36"
      answer:1
    },
    {
      question25: "  "
      choice1: "x < -1  "
      choice2: "x≤ -1"
      choice3: "x ≥ -1  "
      choice4: "x < 4 "
      choice5:"x ≥ 4. "
      answer: 2
    },
    {
      question26: "Find the HCF of 4x<sup>2 y and 6xyz" 
      choice1: "2xz "
      choice2: "2yxy"
      choice3: "2x<sup>2y"
      choice4: " 12xy  "
      choice5:"24x<sup>2yz"
      answer:2
    },
    {
      question27:" Expand (x + 1) (x -2).  "          
      choice1:"x<sup> 2 + x – 2"
      choice2:"x<sup>2 - x + 2"
      choice3:"x<sup> 2 + 3x + 2"
      choice4:"x<sup>2 - x – 2"
      choice5:"x<sup>2 - 2x - 2"
      answer:4

    },
    {
      question28: "Factorize.x<sup> 2 – 7x + 12. "
      choice1:" (x + 3) (x + 4) "
      choice2: " (x – 2) (x – 5) "
      choice3: " (x + 3) (x – 4"
      choice4: "(x – 3) (x + 4)"
      choice5:" (x – 3) (x – 4)"
      answer: 5
    },
    {
      question29:"8xsup>2y  x <sup>3xy</sup>&frasl;<sub>6xy</sub> <sup>2"
      choice1: "x<sup>2y"
      choice2: "4x"
      choice3:"4x<sup>2"
      choice4: "4x<sup>2y"
      choice5:"4xy<sup>2"
      answer: 3
    },
    {
      question30: "(<sup>x-3</&frasl;<sub>2</sub>) -  (<sup>x-1</&frasl;<sub>3</sub>)"
      choice1: "sup>5x-7</&frasl;<sub>6</sub> "
      choice2: "sup>5x-11/&frasl;<sub>6</sub> "
      choice3: "sup>x-7</&frasl;<sub>6</sub> "
      choice4: "sup>x-11</&frasl;<sub>6</sub> "
       choice5:"sup>x+11</&frasl;<sub>6</sub> "
      answer: 4
    }
    {
      question31: "solve the equation <sup>x</sup>&frasl;<sub>3</sub>+ <sup>x</sup>&frasl;<sub>2</sub>sup>5</sup>&frasl;<sub>2</sub>= "
      choice1: "-3 "
      choice2: " sup>x</sup>&frasl;<sub>2</sub>"
      choice3: "2" 
      choice4: "3"
      choice5:"15"
      answer: 1
    }
    {
      question32:" Simplify (7x - 4) – (4x - 12)."
      choice1: "3x – 16 "
      choice2:"3x – 16"
      choice3:"3x + 8 "
      choice4: " 3x – 8"
      choice5:"3x - 4"
      answer: 3
    }
    {
      question33: "Solve the simultaneous equations: 2x + y = 4, 3x – y = 14"
      choice1: "x = -1, y = 2 "
      choice2: " x = 1, y = -2"
      choice3: "  x = -1, y = -2  "
      choice4: " x = 2, y = 2"
      choice5:"x = 1, y = 2      "
      answer: 5
    },
    {
      question34:  ""
      choice1:""
      choice2: ""
      choice3: ""
      choice4: ""
      answer:
    },
    {
      question35: " One of the following is a line of symmetry of a circle."
     choice1: " Arc  "
      choice2: " Circumference"
      choice3: "Diameter"
      choice4: "  Radius"
      choice5:"Segment"
      answer: 3
      {
        question36: ""
        choice1: "23cm"
        choice2: "22cm"
        choice3:"18cm"
        choice4: "17cm"
        choice5:"13cm"
        answer: 2
      }
      {
        question37: "Find the circumference of a circle whose diameter is 28cm.(Take = <sup>22<?sup>&frasl;<sub>7</sub>)."
        choice1: "44cm"
        choice2: "88cm"
        choice3: "176cm"
        choice4: "308cm"
        choice5:"616cm"
         answer: 2
      }
      {
        question38:"The diameter of a bicycle wheel is 98cm. Find the distance removed by the wheel in 3 revolutions(Take = <sup>22<?sup>&frasl;<sub>7</sub>). "       
        choice1: "147cm "
        choice2: "227cm"
        choice3: "294cm"
        choice4: " 364cm"
        choice5:"924cm"
        answer: 5

      }
      {
        question39: " The length of a drawn stick is 3.0cm and the length of the real stick is 15cm. Find the scale. "
        choice1: " 1:9"
        choice2: "3:4 "
        choice3: "1:5"
        choice4: "1:3"
        choice5:"2:3"
        answer:3
        
       question40: " Calculate the area of a parallelogram whose height is 14cm and base is 6cm."
        choice1: "20cm2"
        choice2: "42cm2"
        choice3: "84cm2"
        choice4:"96cm2"
        choice5:"100cm2"
        answer:3
      }
      {
        question41:"" 
        choice1: ""
        choice2: ""
        choice3: ""
        choice4: ""
        choice5:""
        answer: 
      }
      {
        question42:"An equilateral triangle of sides 12cm each has the same perimeter as a square. Find the area of the square."
        choice1: "9cm<sup>2"
        choice2: "12cm<sup>2"
        choice3: "24cm<sup>2"
        choice4: "36cm<sup>2"
        choice5:"81cm<sup>2"
        answer: 5
      }
      {
        question43: "What is the volume of a cuboid tank whose edges measures 5.2m each?   ?"
        choice1: "5.2m<sup>3 "
        choice2: "27.0m<sup>3"
        choice3: "77.2m<sup>3"
        choice4: " 100.1m<sup>3"
        choice5:"140.6m<sup>3"
        answer:5
      {
        question44: " How many cubic sugar of edge 2cm can be fitted into a cuboid container of dimension 4cm by 6cm by 10cm?  "  
        choice1: "30"
        choice2: "22 "
        choice3:      "20"   
        choice4: "12"
        choice5:"8"
        answer: 1
      },
      {
        question45: "" 
        choice1: "  "
        choice2: " "
        choice3: ""  
        choice4: " "
        answer:
      },
      {
        question46: " ?"
        choice1: ""
        choice2: " "
        choice3:" "
        choice4:" "
        answer: 
      },
      {
        question47: "Calculate the volume of a cylinder of height 14cm and radius 3cm."
        choice1: "396cm<sup>3"
        choice2: "264cm<sup>3"
        choice3:"198cm<sup>3"
        choice4: "172cm<sup>3"
        choice5:"132cm<sup>3"
        answer: 1
      },
      {
        question48: ""
        choice1: ""
        choice2:""
        choice3: ""
        choice4:""
        choice5:""
        answer: 
      },
      {
        question49: ""
        choice1: "4m "
        choice2: "6m"
        choice3: "8m"
        choice4: "10m"
        choice5:"12m"
        answer: 5
      },
      {
        question50: " A ladder 8m long leans against a vertical wall, making an angle of 60o with the horizontal ground. What is the distance between the foot of the ladder and the wall"
        choice1: "4m"
        choice2: "6m"
        choice3: "8m"
        choice4: "10m"
        choice5:"12m"
        answer:1
      },
      {
        question: ".?"
        choice1: ""
        choice2: ""
        choice3: ""
        choice4: ""
        answer: 
      },
      {
        question: "?",
        choice1: "",
        choice2: " ",
        choice3: "",
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

