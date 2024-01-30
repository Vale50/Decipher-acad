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
    question: "Who was the first President of the United States?
    ",
    choice1: "<Thomas Jefferson>",
    choice2: "< George Washington>",
    choice3: "<John Adams>",
    choice4: "<James Madison>",
    answer: 2
  },
  {
    question:
      "What event marked the beginning of the American Revolutionary War?",
    choice1: "<Boston Tea Party>",
    choice2: "<Battle of Saratoga>",
    choice3: "<Lexington and Concord>",
    choice4: "<Treaty of Paris>",
    answer: 3
  },
  {
    question: " Which document outlined the principles of self-government and individual liberties in the American colonies?
    ",
    choice1: " Magna Carta",
    choice2: "Declaration of Independence",
    choice3: "Mayflower Compact",
    choice4: "Articles of Confederation",
    answer: 3
  },
  {
    question: " The Emancipation Proclamation, issued during the Civil War, primarily aimed to:",
    choice1: " End slavery in the Southern states",
    choice2: " Establish civil rights for all Americans",
    choice3: " Unify the Northern and Southern states",
    choice4: "Expand westward territories",
    answer: 1
  },
  {
    question: " What major event prompted the United States to enter World War II?
    " ,
    choice1: "Attack on Pearl Harbor",
    choice2: "Invasion of Normandy",
    choice3: "Bombing of Hiroshima",
    choice4: "Signing of the Treaty of Versailles",
    answer: 1
  },
  {
    question: "  Who is known as the primary author of the United States Constitution? ",
    choice1: "Thomas Jefferson",
    choice2: "Alexander Hamilton",
    choice3: "James Madison",
    choice4: "Benjamin Franklin",
    answer: 3
  },
  {
    question: "The Lewis and Clark Expedition was commissioned by:",
    choice1: "President Andrew Jackson",
    choice2: "President Thomas Jefferson",
    choice3: "President James Monroe",
    choice4: "President John Adams",
    answer: 2
  },
  {
    question: "What was the primary cause of the economic downturn in the United States during the 1930s?",
    choice1: "The Vietnam War",
    choice2: "The Great Depression",
    choice3: "The Korean War",
    choice4: "The Cold War",
    answer: 2
  },
  {
    question: "Which amendment to the U.S. Constitution granted women the right to vote?",
    choice1: "18th Amendment",
    choice2: "19th Amendment",
    choice3: "20th Amendment",
    choice4: "21st Amendment",
    answer: 2
  },
  {
    question: "The Montgomery Bus Boycott was a pivotal event in the Civil Rights Movement, sparked by the arrest of:",
    choice1: "Rosa Parks",
    choice2: "Martin Luther King Jr.",
    choice3: "Malcolm X",
    choice4: "Thurgood Marshall",
    answer: 1
  },
  {
    question: " Which president is associated with the New Deal, a series of programs aimed at addressing the economic challenges during the Great Depression?",
    choice1: "Herbert Hoover",
    choice2: "Franklin D. Roosevelt",
    choice3: "Calvin Coolidge",
    choice4: "Harry S. Truman",
    answer: 2
  },
  {
    question: " The Battle of Gettysburg, a crucial turning point in the American Civil War, took place in which state?",
    choice1: "Virginia",
    choice2: "Pennsylvania",
    choice3: "Maryland",
    choice4: "Ohio",
    answer: 2
  },
  {
    question: "What was the primary cause of the Texas Revolution in 1836?",
    choice1:"Dispute over border territories",
    choice2: "Cultural differences with Mexico",
    choice3: "Economic disagreements",
    choice4: "Opposition to slavery",
    answer: 2
  },
  {
    question: "Who was the main architect of the Marshall Plan, a U.S. initiative to aid European countries in rebuilding after World War II?",
    choice1: "Dwight D. Eisenhower",
    choice2: "George C. Marshall",
    choice3: "Harry S. Truman",
    choice4: "aJohn F. Kennedy",
    answer: 2
  },
  {
    question: "The 26th Amendment to the U.S. Constitution lowered the voting age from 21 to:",
    choice1:"18 ",
    choice2: "19",
    choice3: "20",
    choice4: "22",
    answer: 1
  }, {
    question: "What event led to the United States' acquisition of the territory known as the Gadsden Purchase in 1853?",
    choice1:"Oregon Trail expansion",
    choice2: "Mexican-American War",
    choice3: "Gold Rush in California",
    choice4: "Lewis and Clark Expedition",
    answer: 2
  },
  {
    question: "The Native American leader who led resistance against U.S. expansion in the 1870s and was killed at the Battle of the Little Bighorn was:",
    choice1:"Chief Joseph ",
    choice2: "Sitting Bull",
    choice3: "Geronimo",
    choice4: "Crazy Horse",
    answer: 2
  },
  {
    question: "Which amendment to the U.S. Constitution abolished slavery?",
    choice1:"13th Amendment",
    choice2: "14th Amendment",
    choice3: "15th Amendment",
    choice4: "16th Amendment",
    answer: 1
  }, {
    question: "The slogan 54-40 or Fight! was associated with which U.S. territorial dispute in the 1840s?",
    choice1:"Oregon Country",
    choice2: "Mexican Cession",
    choice3: " Louisiana Purchase",
    choice4: "Texas Annexation",
    answer: 1
  },
  {
    question: "The Watergate scandal led to the resignation of which U.S. president?",
    choice1:"Richard Nixon",
    choice2: "Gerald Ford",
    choice3: "Jimmy Carter",
    choice4: "Ronald Reagan",
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
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  }, {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
  },
  {
    question: " I _____ to the park tomorrow with my friends.",
    choice1:"was going ",
    choice2: "is going",
    choice3: "are going",
    choice4: "will be going",
    answer: 4
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



