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
    question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
    choice1: "<England and Scotland>",
    choice2: "<England and Frace >",
    choice3: "<England and Vikings>", 
    choice4: "<England and Normans>",
    answer: 3
  },
  {
    question:"Who was the British Prime Minister during the Falklands War in 1982.?",
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
    choice4: " Civil right",
    answer: 1
  },
  {
    question: "Who was the first female Member of Parliament (MP) in the UK?  ",  
    choice1: "Margaret Thatcher",
    choice2: "Nancy Astor",
    choice3: " Emmeline Pankhurst",
    choice4: "Barbara Castle",
    answer: 2
  },
  {
    question: "Which British monarch was known as 'Bloody Mary'?." ,
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
    question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
    choice1: "Neville Chamberlain",
    choice2: "Winston Churchill",
    choice3: "Clement Attlee",
    choice4: "Stanley Baldwin",
    answer: 1
  },
  {
    question: "Which British monarch was nicknamed 'The Sun King'?",
    choice1: "Henry VIII",
    choice2: "Edward VII",
    choice3: "Charles I",
    choice4: " James I ",
    answer: 3
  },
  {
    question: " The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
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
    question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
    choice1: "Ralistsoy",
    choice2: "Parliamentarians",
    choice3: "Cavaliers",
    choice4: "Roundheads",
    answer: 2
  },
  {
    question: "Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
    choice1: "Tony Blair",
    choice2: " Gordon Brown",
    choice3: "David Cameron",
    choice4: "Theresa May",
    answer: 2
  },
  {
    question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
    choice1:" Charles II",
    choice2: "James II",
    choice3: "William III",
    choice4: "Anne",
    answer: 2
  },
  {
    question: " Who was the British monarch during the time of the Spanish Armada",
    choice1: " Elizabeth I",
    choice2: ") James I",
    choice3: " Mary I ",
    choice4: " Henry VIII",
    answer:1 
  },
  {
    question: " The Magna Carta was signed during the reign of which English king? ",
    choice1: " Richard   ",
    choice2: "John",
    choice3: "  Henry II",
    choice4: " Edward I",
    answer:2
  },
  {
    question: " Who was the British Prime Minister at the time of the Cuban (Missile Crisis in 1962? "
    choice1: " Harold Macmillan",
    choice2: "Harold Wilson",
    choice3: "Anthony Eden", 
    choice4: "Alec Douglas-Home ",
    answer: 1
  },
  {
    question:" The Tolpuddle Martyrs were a group of workers from which profession??",
    choice1: "Miners"
    choice2: "Farmers"
    choice3: "Dockworkers"
    choice4: "Weavers"
    answer:3 
  },
  {
    question: " Which British monarch was known as 'Good Queen Bess'?"
    choice1: "Mary I ",
    choice2: "Elizabeth I ",
    choice3: "Victoria",
    choice4: "Anne ",
    answer: 2
  },
  {
    question: "The Battle of Trafalgar in 1805 secured British naval supremacy against which naval force??  ",
    choice1: " French",
    choice2: "Spanish",
    choice3: "Dutch",
    choice4: " Italian",
    answer: 1
  },
  {
    question: "The Domesday Book was commissioned by which English king? ?." ,
    choice1: "William the Conqueror",
    choice2: "Harold Godwinson",
    choice3: " Edward the Confessor",
    choice4: "  Henry II",
    answer:1
  },
  {
    question: " The Magna Carta was signed at which historic location ?",
    choice1: "Windsor Castle",
    choice: "Runnymede",
    choice3: " Tower of London    ",
    choice4:"Westminster Abbey",
    answer: 2
    },
  {
    question: " Who was the British Prime Minister during the Apollo 11 moon landing in 1969?",
    choice1: " Harold Wilson",
    choice2: "Edward Heath",
    choice3: "James Callaghan",
    choice4: "Margaret Thatcher",
    answer: 1
  },
  {
    question: ". The Battle of Flodden in 1513 was fought between England and which other nation?",
    choice1: "France",
    choice2: "Scotland",
    choice3: " Spain",
    choice4: " Ireland    ",
    answer: 1
  },
  {
    question: "  Who was the British Prime Minister at the time of the outbreak of the Boer War in 1899?",
    choice1: " Lord Salisbury",
    choice2: " William Gladstone ",
    choice3: "Benjamin Disraeli    ",
    choice4: "Arthur Balfour ",
    answer: 1
  },
  {
    question: "The War of the Roses was fought between which two rival houses ? ",
    choice1: "Lancaster and York ",
    choice2: "Tudor and Stuart ",
    choice3: "Plantagenet and Tudor    ",
    choice4: "Stuart and Hanover",
    answer: 1
  },
  {
    question: " Who was the first English king to be crowned on Christmas Da.?",
    choice1: " Edward the Confessor",
    choice2: "William the Conqueror",
    choice3: "Richard the Lionheart    ",
    choice4: "Henry VIII    ",
    answer: 2
  },
  {
    question:  " The Battle of Flodden in 1513 resulted in the death of which monarch?",
    choice1: "Henry VIII",
    choice2: " James IV of Scotland ",
    choice3: "Elizabeth I ",
    choice4: " Mary, Queen of Scots",
    answer:2 
  },
  {
    question:  " Who was the British Prime Minister during the Great Reform Act of 1832?",
    choice1:"Robert Peel ",
    choice2: "William Gladstone",
    choice3: "Arthur Wellesley",
    choice4: " Charles Grey  ",
    answer: 4
  },
  {
    question: "The Treaty of Windsor in 1386 established an alliance between England and which other nation",
    choice1: " France ",
    choice2: "Scotland    ",
    choice3: "  Portugal    ",
    choice4: "  Spain",
    answer:3
    {
      question: "Who was the British Prime Minister during the Irish Potato Famine in the 1840s?",
      choice1: "< Robert Peel>",
      choice2: "<William Ewart Gladstone >",
      choice3: "<Lord John Russell >", 
      choice4: "< Benjamin Disraeli>",
      answer: 3
    },
    {
      question: " The Acts of Union in 1536 and 1543 joined which two countries into the Kingdom of England?",
      choice1: "< England and Scotland>"
      choice2: "< England and Wales>"
      choice3: "< England and Ireland>"
      choice4: "< England and France>",
      answer: 2
     },
    {
      question: " Who was the British Prime Minister during the Battle of Britain in 1940 ?"
      choice1: "Winston Churchill",
      choice2: "Neville Chamberlain",
      choice3: " Clement Attlee",
      choice4: " Anthony Eden ",
      answer: 1
    },
    {
      question: "The Luddite movement in the early 19th century was primarily associated with opposition to which development?  ",
      choice1: "Industrialization",
      choice2: "Agricultural reforms",
      choice3: " Parliamentary reforms",
      choice4: " Religious reforms",
      answer: 1
    },
    {
      question: ".Who was the British monarch during the time of the English Civil War?." ,
      choice1: "Charles I",
      choice2: "Charles II  ",
      choice3: "James I ",
      choice4: "  James II ",
      answer:1
    },
    {
      question: " The 'White Ship' disaster in 1120 led to a succession crisis during the reign of which English monarch? ?",
      choice1: "Henry I ",
      choice2: "Richard I ",
      choice3: "Henry II",
      choice4: "  Stephen ",
      answer: 1
    },
    {
      question:  ".The Reform Act of 1832 extended voting rights to which group of people in Britain?",
      choice1: " Property-owning men",
      choice2: " Women",
      choice3: "Catholics",
      choice4: "Non-landowning me ",
      answer: 1
    },
    {
      question: "Who was the British Prime Minister at the time of the Berlin Conference in 1884-1885?      ?",
      choice1: "William Gladstone",
      choice2: " Benjamin Disraeli",
      choice3: ") Lord Salisbury",
      choice4: " Lord Palmerston ",
      answer: 2
    },
    {
      question: " The Glorious Revolution of 1688 led to the overthrow of which British monarch?",
      choice1: " Charles II",
      choice2: " James II      ",
      choice3: " William III",
      choice4: " Mary II ",
      answer: 2
    },
    {
      question: "Who was the first Tudor monarch of England? ",
      choice1: "Henry VII",
      choice2: "Henry VIII ",
      choice3: "Elizabeth I",
      choice4: "Edward VI ",
      answer: 1
    },
    {
      question: "The Battle of Britain during World War II was primarily fought between two air force?     ?",
      choice1: " Royal Air Force (RAF) and Luftwaffe",
      choice2: "Royal Air Force (RAF) and Italian Air Force ",
      choice3: "Royal Air Force (RAF) and Soviet Air Force",
      choice4: "Royal Air Force (RAF) and Japanese Air Force",
      answer: 1
    },
    {
      question: ".?",
      choice1: "",
      choice2: " ",
      choice3: "",
      choice4: "",
      answer: 
    },
    {
      question:  "?",
      choice1:" ",
      choice2: "",
      choice3: "",
      choice4: "",
      answer: 
    },
    {
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
        question: " Who was the first female Member of Parliament (MP) in the UK?  "  
        choice1: "Margaret Thatcher",
        choice2: "Nancy Astor",
        choice3: " Emmeline Pankhurst",
        choice4: "Barbara Castle",
        answer: 2
      },
      {
        question: "Which British monarch was known as 'Bloody Mary'?." ,
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
        question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
        choice1: "Neville Chamberlain",
        choice2: "Winston Churchill",
        choice3: "Clement Attlee",
        choice4: "Stanley Baldwin",
        answer: 1
      },
      {
        question: "Which British monarch was nicknamed 'The Sun King'?",
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
        question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
        choice1: "Ralistsoy",
        choice2: "Parliamentarians",
        choice3: "Cavaliers",
        choice4: "Roundheads",
        answer: 2
      },
      {
        question: " Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
        choice1: "Tony Blair",
        choice2: " Gordon Brown",
        choice3: "David Cameron",
        choice4: "Theresa May",
        answer: 2
      },
      {
        question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
        choice1:" Charles II",
        choice2: "James II",
        choice3: "William III",
        choice4: "Anne",
        answer: 2
      },
      {
        question: "Who was the British monarch during the time of the Spanish Armada",
        choice1: " Elizabeth I",
        choice2: ") James I",
        choice3: " Mary I ",
        choice4: " Henry VIII",
        answer:1   ,
        {
          question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
          choice1: "<England and Scotland>",
          choice2: "<England and Frace >",
          choice3: "<England and Vikings>", 
          choice4: "<England and Normans>",
          answer: 3
        },
        {
          question:"Who was the British Prime Minister during the Falklands War in 1982.?",
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
          choice4: " Civil right",
          answer: 1
        },
        {
          question: "Who was the first female Member of Parliament (MP) in the UK?  ",  
          choice1: "Margaret Thatcher",
          choice2: "Nancy Astor",
          choice3: " Emmeline Pankhurst",
          choice4: "Barbara Castle",
          answer: 2
        },
        {
          question: "Which British monarch was known as 'Bloody Mary'?." ,
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
          question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
          choice1: "Neville Chamberlain",
          choice2: "Winston Churchill",
          choice3: "Clement Attlee",
          choice4: "Stanley Baldwin",
          answer: 1
        },
        {
          question: "Which British monarch was nicknamed 'The Sun King'?",
          choice1: "Henry VIII",
          choice2: "Edward VII",
          choice3: "Charles I",
          choice4: " James I ",
          answer: 3
        },
        {
          question: " The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
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
          question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
          choice1: "Ralistsoy",
          choice2: "Parliamentarians",
          choice3: "Cavaliers",
          choice4: "Roundheads",
          answer: 2
        },
        {
          question: "Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
          choice1: "Tony Blair",
          choice2: " Gordon Brown",
          choice3: "David Cameron",
          choice4: "Theresa May",
          answer: 2
        },
        {
          question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
          choice1:" Charles II",
          choice2: "James II",
          choice3: "William III",
          choice4: "Anne",
          answer: 2
        },
        {
          question: " Who was the British monarch during the time of the Spanish Armada",
          choice1: " Elizabeth I",
          choice2: ") James I",
          choice3: " Mary I ",
          choice4: " Henry VIII",
          answer:1 
        },
        {
          question: "Who was the British monarch during the time of the Spanish Armada",
          choice1: " Elizabeth I",
          choice2: ") James I",
          choice3: " Mary I ",
          choice4: " Henry VIII",
          answer:1 
        },
        {
          question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
          choice1: "<England and Scotland>",
          choice2: "<England and Frace >",
          choice3: "<England and Vikings>", 
          choice4: "<England and Normans>",
          answer: 3
        },
        {
          question:"Who was the British Prime Minister during the Falklands War in 1982.?",
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
          choice4: " Civil rights",
          answer: 1
        },
        {
          question: "Who was the first female Member of Parliament (MP) in the UK?  ",
          choice1: "Margaret Thatcher",
          choice2: "Nancy Astor",
          choice3: " Emmeline Pankhurst",
          choice4: "Barbara Castle",
          answer: 2
        },
        {
          question: "Which British monarch was known as 'Bloody Mary'?." ,
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
          question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
          choice1: "Neville Chamberlain",
          choice2: "Winston Churchill",
          choice3: "Clement Attlee",
          choice4: "Stanley Baldwin",
          answer: 1
        },
        {
          question: "Which British monarch was nicknamed 'The Sun King'?",
          choice1: "Henry VIII",
          choice2: "Edward VII",
          choice3: "Charles I",
          choice4: " James I ",
          answer: 3
        },
        {
          question: " The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
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
          question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
          choice1: "Ralistsoy",
          choice2: "Parliamentarians",
          choice3: "Cavaliers",
          choice4: "Roundheads",
          answer: 2
        },
        {
          question: "Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
          choice1: "Tony Blair",
          choice2: " Gordon Brown",
          choice3: "David Cameron",
          choice4: "Theresa May",
          answer: 2
        },
        {
          question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
          choice1:" Charles II",
          choice2: "James II",
          choice3: "William III",
          choice4: "Anne",
          answer: 2
        },
        {
          question: "Who was the British monarch during the time of the Spanish Armada
           ",
          choice1: " Elizabeth I",
          choice2: ") James I",
          choice3: " Mary I ",
          choice4: " Henry VIII",
          answer:1 
          {
            question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
            choice1: "<England and Scotland>",
            choice2: "<England and Frace >",
            choice3: "<England and Vikings>", 
            choice4: "<England and Normans>",
            answer: 3
          },
          {
            question: "Who was the British Prime Minister during the Falklands War in 1982.?",
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
            question: "Who was the first female Member of Parliament (MP) in the UK?  ",
            choice1: "Margaret Thatcher",
            choice2: "Nancy Astor",
            choice3: " Emmeline Pankhurst",
            choice4: "Barbara Castle",
            answer: 2
          },
          {
            question: "Which British monarch was known as 'Bloody Mary'?." ,
            choice1: "Mary I",
            choice2: "Mary II",
            choice3: "Elizabeth I",
            choice4: " Ann ",
            answer:1
          },
          {
            question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
            choice1: "<England and Scotland>",
            choice2: "<England and Frace >",
            choice3: "<England and Vikings>", 
            choice4: "<England and Normans>",
            answer: 3
          },
          {
            question:"Who was the British Prime Minister during the Falklands War in 1982.?",
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
            choice4: " Civil right",
            answer: 1
          },
          {
            question: "Who was the first female Member of Parliament (MP) in the UK?  ",  
            choice1: "Margaret Thatcher",
            choice2: "Nancy Astor",
            choice3: " Emmeline Pankhurst",
            choice4: "Barbara Castle",
            answer: 2
          },
          {
            question: "Which British monarch was known as 'Bloody Mary'?." ,
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
            question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
            choice1: "Neville Chamberlain",
            choice2: "Winston Churchill",
            choice3: "Clement Attlee",
            choice4: "Stanley Baldwin",
            answer: 1
          },
          {
            question: "Which British monarch was nicknamed 'The Sun King'?",
            choice1: "Henry VIII",
            choice2: "Edward VII",
            choice3: "Charles I",
            choice4: " James I ",
            answer: 3
          },
          {
            question: " The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
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
            question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
            choice1: "Ralistsoy",
            choice2: "Parliamentarians",
            choice3: "Cavaliers",
            choice4: "Roundheads",
            answer: 2
          },
          {
            question: "Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
            choice1: "Tony Blair",
            choice2: " Gordon Brown",
            choice3: "David Cameron",
            choice4: "Theresa May",
            answer: 2
          },
          {
            question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
            choice1:" Charles II",
            choice2: "James II",
            choice3: "William III",
            choice4: "Anne",
            answer: 2
          },
          {
            question: " Who was the British monarch during the time of the Spanish Armada",
            choice1: " Elizabeth I",
            choice2: ") James I",
            choice3: " Mary I ",
            choice4: " Henry VIII",
            answer:1 
          },
          {
            question: "Who was the British monarch during the time of the Spanish Armada",
            choice1: " Elizabeth I",
            choice2: ") James I",
            choice3: " Mary I ",
            choice4: " Henry VIII",
            answer:1 
          },
          {
            question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
            choice1: "<England and Scotland>",
            choice2: "<England and Frace >",
            choice3: "<England and Vikings>", 
            choice4: "<England and Normans>",
            answer: 3
          },
          {
            question:"Who was the British Prime Minister during the Falklands War in 1982.?",
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
            choice4: " Civil rights",
            answer: 1
          },
          {
            question: "Who was the first female Member of Parliament (MP) in the UK?  ",
            choice1: "Margaret Thatcher",
            choice2: "Nancy Astor",
            choice3: " Emmeline Pankhurst",
            choice4: "Barbara Castle",
            answer: 2
          },
          {
            question: "Which British monarch was known as 'Bloody Mary'?." ,
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
            question: "Who was the British Prime Minister at the beginning of World War II in 1939 ?",
            choice1: "Neville Chamberlain",
            choice2: "Winston Churchill",
            choice3: "Clement Attlee",
            choice4: "Stanley Baldwin",
            answer: 1
          },
          {
            question: "Which British monarch was nicknamed 'The Sun King'?",
            choice1: "Henry VIII",
            choice2: "Edward VII",
            choice3: "Charles I",
            choice4: " James I ",
            answer: 3
          },
          {
            question: " The Corn Laws were primarily aimed at regulating the importation of what agricultural product.",
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
            question: "The Battle of Naseby in 1645 was a decisive victory for which side in the English Civil War.?",
            choice1: "Ralistsoy",
            choice2: "Parliamentarians",
            choice3: "Cavaliers",
            choice4: "Roundheads",
            answer: 2
          },
          {
            question: "Who was the British Prime Minister during the signing of the Treaty of Lisbon in 2007 .?",
            choice1: "Tony Blair",
            choice2: " Gordon Brown",
            choice3: "David Cameron",
            choice4: "Theresa May",
            answer: 2
          },
          {
            question:  "The 'Glorious Revolution' of 1688 resulted in the overthrow of which monarch?",
            choice1:" Charles II",
            choice2: "James II",
            choice3: "William III",
            choice4: "Anne",
            answer: 2
          },
          {
            question: "Who was the British monarch during the time of the Spanish Armada
             ",
            choice1: " Elizabeth I",
            choice2: ") James I",
            choice3: " Mary I ",
            choice4: " Henry VIII",
            answer:1 
            {
              question: ".The Battle of Stamford Bridge in 1066 was fought between which two parties?",
              choice1: "<England and Scotland>",
              choice2: "<England and Frace >",
              choice3: "<England and Vikings>", 
              choice4: "<England and Normans>",
              answer: 3
            },
            {
              question: "Who was the British Prime Minister during the Falklands War in 1982.?",
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
              question: "Who was the first female Member of Parliament (MP) in the UK?  ",
              choice1: "Margaret Thatcher",
              choice2: "Nancy Astor",
              choice3: " Emmeline Pankhurst",
              choice4: "Barbara Castle",
              answer: 2
            },
            {
              question: "Which British monarch was known as 'Bloody Mary'?." ,
              choice1: "Mary I",
              choice2: "Mary II",
              choice3: "Elizabeth I",
              choice4: " Ann ",
              answer:1
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





