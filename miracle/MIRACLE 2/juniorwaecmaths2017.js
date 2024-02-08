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
    question 1: "A line that divides a circle into two equal parts is known as.",
    choice1: "<Chord>",
    choice2: "<diameter>",
    choice3: "<radius>",
    choice4: "<sector>",
    choice5: "<segment>",
    answer: 2
  },
  {
    question2:"Find the value of -5- (-20).",
    choice1: "<-30>",
    choice2: "<-25>",
    choice3: "<-15>",
    choice4: "<15>",
    choice5: "<25>",
    answer: 4
  },
  {
    question3: "Find the perimeter of a football field of length 100m and breadth 60m.",
    choice1: "600m",
    choice2: "450m",
    choice3: "320m",
    choice4: "200m",
    choice5: "160m",
    answer: 3
  },
  {
    question4: "Find the simple interest on N800.00 at 4% for 6 years",
    choice1: "N32.00",
    choice2: "N48.00",
    choice3: "N192.00",
    choice4: "N224.00",
    choice5: "N240.00", 
    answer: 3
  },
  {
    question5: "Express 33% as a decimal number." ,
    choice1: "0.30",
    choice2: "0.31",
    choice3: "0.32",
    choice4: "0.33",
    choice5: "0.34",
    answer: 4
  },
  {
    question6: "Find the value of y in the diagram below
                                         
                                                          ",
    choice1: "9cm",
    choice2: "10cm",
    choice3: "12cm",
    choice4: "15cm",
    choice5: "20cm",
    answer: 2
  },
  {
    question7: "Approximate 13075 to the nearest thousand.",
    choice1: "13075",
    choice2: "13065",
    choice3: "13045",
    choice4: "13015",
    choice5: "13000",
    answer: 5
  },
  {
    question8: "Convert <sup>2</sup>&frasl;<sub>3</sub> to decimal fraction and give your answer to 2 decimal places.",
    choice1: "0.76",
    choice2: "0.70",
    choice3: "0.67",
    choice4: "0.66",
    choice4: "0.60",
    answer: 3
  },
  {
    question9: "Which of the following is NOT a perfect square?",
    choice1: "a<sup>2</sup>",
    choice2: "4y<sup>2</sup>",
    choice3: "16b<sup>3</sup>",
    choice4: "36",
    choice5: "100",
    answer: 3
  },
  {
    question10: "Find the L.C.M. of 15 and 45",
    choice1: "15",
    choice2: "30.",
    choice3: "45",
    choice4: "60",
    choice5: "75",
    answer: 1
  },
  {
    question11: "Express 0.0004107 in standard form.",
    choice1: "4107 x 10<sup>7</sup>",
    choice2: "41.07 x 10<sup>5</sup>",
    choice3: "4.107 x 10<sup>4</sup>",
    choice4: "41.07 x 10<sup>-5</sup>",
    choice5: "4.107 x 10<sup>-4</sup>",
    answer: 5
  },
  {
    question12: "In a class of 25 students, 15 are boys. What percentage are girls?",
    choice1: "10%",
    choice2: "15%",
    choice3: "20%",
    choice4: "30%",
    choice5: "40%",
    answer: 5
  },
  {
    question13: "Simplify <sup>3</sup>&frasl;<sub>8</sub> x <sup>1</sup>&frasl;<sub>4</sub> / <sup>3</sup>&frasl;<sub>4</sub> + <sup>1</sup>&frasl;<sub>5</sub>",
    choice1:"<sup>15</sup>&frasl;<sub>152</sub>",
    choice2: "<sup>16</sup>&frasl;<sub>152</sub>",
    choice3: "<sup>13</sup>&frasl;<sub>40</sub>",
    choice4: "<sup>19</sup>&frasl;<sub>40</sub>",
    choice5: "<sup>21</sup>&frasl;<sub>40</sub>",
    answer: 1
  },
  {
    question14: "The following are quadrilaterals EXCEPT.",
    choice1: "Circle",
    choice2: "parallelogram",
    choice3: "rectangle",
    choice4: "square",
    choice5: "trapezium",
    answer: 1
  },
  {
    question15: "Calculate the volume of a cuboid 3cm by 8cm by 5cm",
    choice1:"120cm <sup>3</sup>",
    choice2: "88cm<sup>3</sup> ",
    choice3: "16cm<sup>3</sup> ",
    choice4: "14cm<sup>3</sup>",
    choice5: "88cm<sup>3</sup> ",
    answer: 1
  }, {
    question16: "Express 2.44km in metres",
    choice1:"0.244",
    choice2: "2.400",
    choice3: "2.440",
    choice4: "24.40",
    choice5: "2440",
    answer: 5
  },
  {
    question17: "Ayodeji made a profit of 28% on an article he bought for N3600.00. How much did he sell the article?",
    choice1:"N1008.00",
    choice2: "N3600.00",
    choice3: "N4608.00",
    choice4: "4636.00",
    choice5: "4680.00",
    answer: 3
  },
  {
    question18: "A trader bought an electric iron for N1,200.00 and sold it for N1,680.00. What was the percentage profit?",
    choice1:"0.4%",
    choice2: "29%",
    choice3: "40%",
    choice4: "48%",
    choice5: "71%",
    answer: 3
  }, {
    question19: "What is the complement of 63 <sup>0</sup>",
    choice1:"63<sup>0</sup>",
    choice2: "57<sup>0</sup>",
    choice3: "47<sup>0</sup>",
    choice4: "27<sup>0</sup>",
    choice5: "17<sup>0</sup>",
    answer: 4
  },
  {
    question20: "How many edges has a cube?",
    choice1:"4",
    choice2: "8",
    choice3: "10",
    choice4: "12",
    choice5: "13",
    answer: 4
  },
  {
    question21: "Two-fifth of the students I a mixed schools are boys. If there are 30 girls in the school, how many are boys?",
    choice1:"50",
    choice2: "40",
    choice3: "30",
    choice4: "20",
    choice5: "10",
    answer: 4
  },
  {
    question22: "Find the radius of a circle whose circumstance is 44cm",
    choice1:"4cm",
    choice2: "7cm",
    choice3: "11cm",
    choice4: "13cm",
    choice5: "22cm",
    answer: 2
  },
  {
    question23: "In the diagram below, BÔA is an example of a/an
    
                                                                  ",
    choice1:"acute angle",
    choice2: "obtuse angle",
    choice3: "reflex angle",
    choice4: "right angle",
    choice5: "straight angle", 
    answer: 1
  },
  {
    question24: "Find the perimeter of the figure below
    
                                                       ",
    choice1:"16cm",
    choice2: "18cm",
    choice3: "20cm",
    choice4: "15cm + xcm",
    choice5: "22cm + xcm",
    answer: 2
  },
  {
    question25: "Simplify 22<sup>0</sup>33’-10<sup>0</sup>54’.",
    choice1:"12<sup>0</sup>21’",
    choice2: "11<sup>0</sup>39’",
    choice3: "11<sup>0</sup>29’",
    choice4: "11<sup>0</sup>21’",
    choice5: "11<sup>0</sup>19’",
    answer: 2
  },
  {
    question26: "Calculate the perimeter of the shape below.
    
                                                          ",
    choice1:"2xcm",
    choice2: "3xcm",
    choice3: "4xcm",
    choice4: "x<sup>2</sup>cm",
    choice5: "2x<sup>2</sup>cm",
    answer: 3
  },
  {
    question27: "The angle of elevation of the top of a building from a point 10m away on level ground is 30<sup>0</sup>. Calculate the height of the building?",
    choice1:"9.238m",
    choice2: "6.928m",
    choice3: "5.773m",
    choice4: "4.619m",
    choice5: "3.464m",
    answer: 3
  },
  {
    question28: "Calculate the perimeter of a rectangle of length 8cm and breadth <sup>15</sup>&frasl;<sub>152</sub>cm"
    choice1:"<sup>13</sup>&frasl;<sub>2</sub>",
    choice2: "20cm",
    choice3: "21cm",
    choice4: "24cm",
    choice5: "30cm",
    answer: 3
  },
  {
    question29: "What is the perimeter of a regular decagon of side 3.25cm each?",
    choice1:"3.25cm",
    choice2: "26.5cm",
    choice3: "28.5cm",
    choice4: "32.3cm",
    choice5: "40cm",
    answer: 4
  },
  {
    question30: "Calculate the area of a circle whose diameter is 7m (Take π<sup>5</sup>&frasl;<sub>2</sub>)",
    choice1:"6<sup>1</sup>&frasl;<sub>2</sub><sup>2</sup>",
    choice2: "14<sup>1</sup>&frasl;<sub>2</sub><sup>2</sup>",
    choice3: "22<sup>1</sup>&frasl;<sub>2</sub><sup>2</sup>",
    choice4: "30<sup>1</sup>&frasl;<sub>2</sub><sup>2</sup>",
    choice5: "38<sup>1</sup>&frasl;<sub>2</sub><sup>2</sup>",
    answer: 5
  },
  {
    question31: "Find the area of a square whose diagonal is 8m",
    choice1:"4m<sup>2</sup>",
    choice2: "8m<sup>2</sup>",
    choice3: "16m<sup>2</sup>",
    choice4: "32<sup>2</sup>",
    choice5: "64<sup>2</sup>",
    answer: 4
  },
  {
    question32: "A Cylindrical can of volume 198cm<sup>3</sup> has a height of 7cm. Find the radius of the cylinder.",
    choice1:"28.29cm",
    choice2: "18.00cm",
    choice3: "9.00cm",
    choice4: "5.20cm",
    choice5: "3.00cm",
    answer: 5
  },
  {
    question33: "Calculate the third of an isosceles triangle whose base angle is 48<sup>0</sup>.",
    choice1:"42<sup>0</sup>",
    choice2: "76<sup>0</sup>",
    choice3: "84<sup>0</sup>",
    choice4: "96<sup>0</sup>",
    choice4: "136<sup>0</sup>",
    answer: 3
  },
  {
    question34: "Calculate the value of x in the figure below.
    
                                                 ",
    choice1:"105<sup>o</sup>",
    choice2: "95<sup>o</sup>",
    choice3: "75<sup>o</sup>",
    choice4: "55<sup>o</sup>",
    choice5: "35<sup>o</sup>",
    answer: 1
  },
  {
    question35: "Calculate the value of x in the figure below.
    
                                                               ",
    choice1:"50<sup>o</sup>",
    choice2: "60<sup>o</sup>",
    choice3: "75<sup>o</sup>",
    choice4: "80<sup>o</sup>",
    choice5: "90<sup>o</sup>",
    answer: 1
  },
  {
    question36: "Find the value of t in the figure below
    
                                                         ",
    choice1:"110<sup>o</sup>",
    choice2: "120<sup>o</sup>",
    choice3: "130<sup>o</sup>",
    choice4: "140<sup>o</sup>",
    choice5: "150<sup>o</sup>",
    answer: 2
  },
  {
    question37: "Find the value of x in the figure below.
    
                                                             ",
    choice1:"30<sup>o</sup>",
    choice2: "50<sup>o</sup>",
    choice3: "80<sup>o</sup>",
    choice4: "100<sup>o</sup>",
    choice5: "120<sup>o</sup>",
    answer: 3
  },
  {
    question38: "Find the volume of a cone whose height is 15cm and base diameter 14cm. (Take π =<sup>22</sup>&frasl;<sub>7</sub>)",
    choice1:"2310cm<sup>3</sup>",
    choice2: "1320cm<sup>3</sup>",
    choice3: "770cm<sup>3</sup>",
    choice4: "660cm<sup>3</sup>",
    choice5: "220<sup>3</sup>",
    answer: 3
  },
  {
    question39: "Which of the following properties is NOT true of a parallelogram?",
    choice1:"Opposite sides are parallel and equal in length.",
    choice2: "Opposite angles are equal",
    choice3: "There are two lines of symmetry",
    choice4: "The diagonals bisect each other",
    choice5: "There is no line of symmetry.",
    answer: 5
  },
  [use te diagram below to answer question 40 and 41]
  {
    question40: "The coordinates of point D is",
    choice1:"(2,3)",
    choice2: "(3,-2)",
    choice3: "(-2, 3)",
    choice4: "(2, -3)",
    choice5: "(-2, -3)",
    answer: 3
  },
  {
    question41: "Which of the points represents the coordinates (2, -1)?",
    choice1:"E",
    choice2: "D",
    choice3: "C",
    choice4: "B",
    choice5: "A",
    answer: 4
  },
  {
    question42: "Calculate the perimeter of a circle whose radius is <sup>7</sup>&frasl;<sub>2</sub>cm",
    choice1:"55cm",
    choice2: "44cm",
    choice3: "33cm",
    choice4: "22cm",
    choice5: "11cm",
    answer: 4
  },
  {
    question43: "What is the size of <PAB in the diagram below?
    
                                                       ",
    choice1:"15<sup>o</sup>",
    choice2: "30<sup>o</sup>",
    choice3: "45<sup>o</sup>",
    choice4: "60<sup>o</sup>",
    choice5: "75<sup>o</sup>",
    answer: 2
  },
  {
    question44: "
    
    Which of the above shows how to construct 45<sup>o</sup>?",
    choice1:"I only",
    choice2: "II only",
    choice3: "III only",
    choice4: "II and III only",
    choice5: "I, II and III only",
    answer: 3
  },
  {
    question45: "Calculate the exterior angle of a regular pentagon",
    choice1:"72<sup>o</sup>",
    choice2: "60<sup>o</sup>",
    choice3: "51.4<sup>o</sup>",
    choice4: "45<sup>o</sup>",
    choice5: "40<sup>o</sup>",
    answer: 1
  },
  {
    question46: "A regular polygon has the sum of its interior angles as 3240<sup>0</sup>. Find the number of sides the polygon has.",
    choice1:"16",
    choice2: "20",
    choice3: "22",
    choice4: "26",
    choice5: "30",
    answer: 2
  },
  {
    question47: "Simplify 110110<sub>two</sub> _____ 101101<sub>two</sub>",
    choice1:"1000<sub>two</sub>",
    choice2: "1001<sub>two</sub>",
    choice3: "1010<sub>two</sub>",
    choice4: "1011<sub>two</sub>",
    choice5: "1101<sub>two</sub>",
    answer: 2
  },
  {
    question48: "Add N4.20, N3.60 and N2.20 and give your answer in kobo.",
    choice1:"10k",
    choice2: "100k",
    choice3: "1,000k",
    choice4: "10,000k",
    choice5: "100,000k",
    answer: 3
  },
  {
    question49: "Find the sum of all prime numbers between 1 and 10.",
    choice1:" 2",
    choice2: "3",
    choice3: "5",
    choice4: "7",
    choice5: "17",
    answer: 5
  }, {
    question50: "The figure below is a
    
                                      ",
    choice1:"hexagonal based pyramid",
    choice2: "square based prism",
    choice3: "square based pyramid",
    choice4: "triangular based pyramid",
    choice5: "triangular prism",
    answer: 3
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



