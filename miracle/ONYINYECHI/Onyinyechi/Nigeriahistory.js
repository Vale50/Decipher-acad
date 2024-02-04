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
    question: "Who was the first Prime Minister of Nigeria?",
    choice1: "<Nnamdi Azikiwe>",
    choice2: "<Abubakar Tafawa Balewa>",
    choice3: "<Obafemi Awolowo>",
    choice4: "<Ahmadu Bello>",
    answer: 2
  },
  {
    question:
      " Who named Nigeria?",
    choice1: "<Flora Shaw Luggard>",
    choice2: "<Mary Slessor>",
    choice3: "<Lord Luggard>",
    choice4: "<Funmilayo Kuti
    >",
    answer: 1
  },
  {
    question: " Who was the first President of Nigeria? ",
    choice1: "Olusegun Obasanjo",
    choice2: "Ibrahim Babangida",
    choice3: "Yakubu Gowon",
    choice4: "Nnamdi Azikiwe",
    answer: 4
  },
  {
    question: "What was the name of the civil war that occurred in Nigeria from 1967 to 1970?",
    choice1: "Biafran War",
    choice2: "Yoruba War",
    choice3: "Hausa-Fulani War",
    choice4: "Niger Delta War",
    answer: 1
  },
  {
    question: "Which Nigerian leader was overthrown in a military coup in 1985?
    " ,
    choice1: "Shehu Shagari",
    choice2: "Muhammadu Buhari",
    choice3: "Ibrahim Babangida",
    choice4: "Sani Abacha",
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
    question: "Which Nigerian leader annulled the June 12, 1993, presidential election",
    choice1: "Olusegun Obasanjo",
    choice2: "Sani Abacha",
    choice3: "Ibrahim Babangida",
    choice4: " Goodluck Jonathan",
    answer: 3
  },
  {
    question: "What year did Nigeria become a republic?",
    choice1: "1960 ",
    choice2: "1956",
    choice3: "1963",
    choice4: "1962",
    answer: 3
  },
  {
    question: "Which Nigerian leader was impeached in 1993?",
    choice1: "Olusegun Obasanjo",
    choice2: "Ibrahim Babangida",
    choice3: "Ernest Shonekan",
    choice4: "Goodluck Jonathan",
    answer: 3
  },
  {
    question: "Who is the current President of Nigeria ?",
    choice1: "Goodluck Jonathan",
    choice2: "Muhammadu Buhari",
    choice3: "Bola Ahmed Tinubu",
    choice4: "Umaru Musa Yar'Adua",
    answer: 3
  },
  {
    question: " Which Nigerian political party won the first democratic elections in 1999?",
    choice1: "People's Democratic Party (PDP)",
    choice2: "All Progressives Congress (APC)",
    choice3: "Social Democratic Party (SDP)",
    choice4: "All Nigeria People's Party (ANPP)
    ",
    answer: 1
  },
  {
    question: " Which Nigerian leader declared a war against indiscipline in the 1980s?",
    choice1: "Ibrahim Babangida",
    choice2: "Sani Abacha",
    choice3: "Muhammadu Buhari",
    choice4: "Olusegun Obasanjo",
    answer: 3
  },
  {
    question: "Who was the first military head of state of Nigeria?",
    choice1: "Yakubu Gowon",
    choice2: "Aguiyi Ironsi",
    choice3: "Johnson Aguiyi-Ironsi",
    choice4: "Murtala Mohammed",
    answer: 3
  },
  {
    question: "What is the capital city of Nigeria?",
    choice1: "Lagos ",
    choice2: "Abuja ",
    choice3: "Kano",
    choice4: "Port Harcourt",
    answer: 2
  },
  {
    question: "Who was the Nigerian author of the novel "Things Fall Apart"?",
    choice1: "Chinua Achebe",
    choice2: "Wole Soyinka",
    choice3: "Chimamanda Ngozi Adichie",
    choice4: "Buchi Emecheta",
    answer: 1
  }, {
    question: "What is the name of the militant group that has been involved in insurgency in northeastern Nigeria?",
    choice1: "Boko Haram",
    choice2: "Niger Delta Avengers",
    choice3: "Movement for the Emancipation of the Niger Delta (MEND)",
    choice4: "Oodua People's Congress (OPC)",
    answer: 1
  },
  {
    question: "Which Nigerian leader was known for his "War Against Corruption" campaign?",
    choice1: "Goodluck Jonathan",
    choice2: "Olusegun Obasanjo",
    choice3: "Muhammadu Buhari",
    choice4: "Umaru Musa Yar'Adua",
    answer: 3
  },
  {
    question: "What is the nickname for Nigeria's national football team?",
    choice1: "Super Eagles",
    choice2: "Black Stars",
    choice3: "Indomitable Lions",
    choice4: "Elephants",
    answer: 1
  }, {
    question: "Which Nigerian musician is known as the "African Giant"?",
    choice1: "Fela Kuti",
    choice2: "Burna Boy",
    choice3: "Davido",
    choice4: "Wizkid",
    answer: 2
  },
  {
    question: "Who was the first female Deputy Governor of a Nigerian state?",
    choice1: "Amina Mohammed",
    choice2: "Kudirat Abiola",
    choice3: "Cecilia Ezeilo",
    choice4: "Erelu Olusola Obada",
    answer: 3
  },
  {
    question: "What is the name of the famous festival celebrated by the Yoruba people of Nigeria?",
    choice1: "Durbar Festival",
    choice2: "Eyo Festival",
    choice3: "Osun-Osogbo Festival",
    choice4: "Olojo Festival",
    answer: 3
  },
  {
    question: "Who was the first President of Nigeria?",
    choice1: "Nnamdi Azikiwe",
    choice2: "Obafemi Awolowo",
    choice3: "Ahmadu Bello",
    choice4: "Tafawa Balewa",
    answer: 4
  },
  {
    question: "Which year did Nigeria gain independence from British colonial rule?",
    choice1: "1957",
    choice2: "1960",
    choice3: "1963",
    choice4: "1966",
    answer: 2
  },
  {
    question: "Who was the military ruler of Nigeria during the Nigerian Civil War (Biafran War)?",
    choice1: "Yakubu Gowon",
    choice2: "Aguiyi Ironsi",
    choice3: "Murtala Mohammed",
    choice4: "Olusegun Obasanjo",
    answer: 1
  },
  {
    question: "What is the name of the river that forms a boundary between Nigeria and Cameroon",
    choice1: "Benue River",
    choice2: "Niger River",
    choice3: "Cross River",
    choice4: "Chad River",
    answer: 1
  },
  {
    question: "Which Nigerian leader was overthrown in a coup on December 31, 1983",
    choice1: "Shehu Shagari",
    choice2: "Ibrahim Babangida",
    choice3: "Muhammadu Buhari",
    choice4: "Sani Abacha",
    answer: 1
  },
  {
    question: "What is the name of the highest mountain in Nigeria?",
    choice1: "Mount Patti ",
    choice2: "Chappal Waddi",
    choice3: "Mount Dimlang",
    choice4: "Idanre Hills",
    answer: 2
  },
  {
    question: "The first female finance minister of Nigeria was?",
    choice1: "Kemi Adeosun",
    choice2: "Ngozi Okonjo-Iweala",
    choice3: "Zainab Ahmed",
    choice4: "Nenadi Usman",
    answer: 2
  },
  {
    question: "The Nigerian national currency is called?",
    choice1: "Naira",
    choice2: "Cedi",
    choice3: "Shilling",
    choice4: "Kwacha",
    answer: 1
  },
  {
    question: ""Centre of Excellence" as a slogan belongs to which of these Nigerian cities?",
    choice1: "Abuja",
    choice2: "Lagos",
    choice3: "Kano",
    choice4: "Port Harcourt",
    answer: 2
  },
  {
    question: "Who was the first Nigerian to  speak foreign language?",
    choice1: "Oba Esigie",
    choice2: "Oba Ewedo",
    choice3: "Oba Ojaja II",
    choice4: "Oba Igosi",
    answer: 1
  },
  {
    question: "Who was the first female to become the Deputy Governor of a Nigerian state?",
    choice1: "Sarah Jubril",
    choice2: "Cecilia Ezeilo",
    choice3: "Erelu Olusola Obada",
    choice4: "Salamatu Hussaini Suleiman",
    answer: 2
  },
  {
    question: "Where was the name Nigeria derived from?",
    choice1: "Flora Shaw",
    choice2: "Ninja",
    choice3: "Niger River",
    choice4: "River Niger and Benue",
    answer: 3
  },
  {
    question: "When did Nigeria change from right hand to left hand drive?",
    choice1: "April 1952",
    choice2: "April 1972",
    choice3: "April 1962",
    choice4: "April 1932",
    answer: 2
  },
  {
    question: "Who was the first Nigerian to win a Nobel Prize?",
    choice1: "Wole Soyinka ",
    choice2: "Chinua Achebe",
    choice3: "Chimamanda Ngozi Adichie",
    choice4: "Ben Okri",
    answer: 1
  },
  {
    question: "Which Nigerian city is known for its ancient walls and gates, which are UNESCO World Heritage sitesThe 1920s?",
    choice1: "Ibadan",
    choice2: "Benin City",
    choice3: "Zaria",
    choice4: "Kano",
    answer: 4
  },
  {
    question: "The name of the first Nigerian to win an individual gold medal at the Olympic Games is?",
    choice1: "Blessing Okagbare ",
    choice2: "Chioma Ajunwa",
    choice3: "Samuel Peter",
    choice4: "Hakeem Olajuwon",
    answer: 2
  },
  {
    question: "What is the name of the Nigerian traditional wrestling style that has gained international recognition",
    choice1: "Kokawa",
    choice2: "Lutte Traditionnelle",
    choice3: "Dambe",
    choice4: "Nuba wrestling",
    answer: 3
  },
  {
    question: "Which Nigerian city is known as the "Home of Peace"?",
    choice1: "Jos",
    choice2: "Maiduguri",
    choice3: "Yola",
    choice4: "Sokoto",
    answer: 4
  },
  {
    question: "Who is Nigeria's first female combat helicopter pilot in the Nigerian Air Force?",
    choice1: "Blessing Liman",
    choice2: "Tolulope Arotile",
    choice3: " Kafayat Sanni",
    choice4: "Olubunmi Oyewole",
    answer: 2
  },
  {
    question: "The Nigerian film industry is known as?",
    choice1: "Nollywood",
    choice2: "Kannywood",
    choice3: "YorubaWood",
    choice4: "HausaWood",
    answer: 1
  },
  {
    question: "Nigeria was suspended from the commonwealth in what year?",
    choice1: "1993 ",
    choice2: "1996",
    choice3: "1990",
    choice4: "1995",
    answer: 4
  },
  {
    question: "The Nigerian constitution that recognized local government as the third tier of government was that of?",
    choice1: "The 1946 constitution",
    choice2: "The 1960 constitution",
    choice3: "The 1979 constitution",
    choice4: "The 1960 constitution",
    answer: 3
  },
  {
    question: "When was the Central Bank of Nigeria established?",
    choice1: "1960 ",
    choice2: "1958",
    choice3: "1965",
    choice4: "1963",
    answer: 2
  },
  {
    question: "What is the motto of the Nigeria Police?",
    choice1: "We are friends ",
    choice2: "Fighting corruption",
    choice3: "The police is your friend",
    choice4: "Kick against indiscipline",
    answer: 3
  },
  {
    question: "The author of the critically acclaimed novel "Half of a Yellow Sun" is known as?",
    choice1:" Chimamanda Ngozi Adichie ",
    choice2: " Chinua Achebe",
    choice3: "Wole Soyinka",
    choice4: "Buchi Emecheta",
    answer: 1
  },
  {
    question: "Where is the Kainji Dam in Nigeria located?",
    choice1: "Edo state",
    choice2: "Abeokuta",
    choice3: "Niger state",
    choice4: "Akwa-Ibom",
    answer: 3
  },
  {
    question: "The eagle on the Nigeria coat of arm depicts?",
    choice1: "Power",
    choice2: "Strength",
    choice3: " Vision",
    choice4: "Peace",
    answer: 2
  },
  {
    question: "The 1972 Watergate scandal led to the resignation of President Richard Nixon. What was the primary issue in the Watergate scandal?",
    choice1:" Illegal wiretapping",
    choice2: "Espionage against foreign governments",
    choice3: "Bribery of foreign officials",
    choice4: "Burglary and cover-up of political activities",
    answer: 4
  }, {
    question: " What is the name of the Nigerian traditional attire often worn on special occasions?",
    choice1: "Aso-Oke",
    choice2: "Dashiki",
    choice3: "Buba and Sokoto",
    choice4: "Agbada",
    answer: 4
  },
  {
    question: "In Nigeria the first person to become the Secretary-General of the Commonwealth of Nations was?",
    choice1: "Emeka Anyaoku",
    choice2: "Ngozi Okonjo-Iweala",
    choice3: "Amina J. Mohammed",
    choice4: "Ibrahim Gambari",
    answer: 1
  },
  {
    question: "Which Nigerian city is known for its annual Durbar festival, showcasing colourful displays of horsemanship and culture?",
    choice1: "Sokoto",
    choice2: "Zaria",
    choice3: "Kano",
    choice4: "Maiduguri",
    answer: 3
  },
  {
    question: "Who was the first woman to become a governor in Nigeria?",
    choice1: "Mrs. Funmilayo Kuti",
    choice2: "Mrs. Virginia Etiaba",
    choice3: "Mrs. Mo Abudu",
    choice4: "Mrs. Ngozi Iweala",
    answer: 2
  },
  {
    question: "Nigeria gain independence from British colonial rule in what year?",
    choice1: "1957",
    choice2: "1960",
    choice3: "1963",
    choice4: "1966",
    answer: 2
  },
  {
    question: "Which Nigerian musician is known as the "King of Juju Music"?",
    choice1: "King Sunny Ade",
    choice2: "Fela Kuti",
    choice3: "Ebenezer Obey",
    choice4: "Sir Shina Peters",
    answer: 1
  },
  {
    question: "The first political party in Nigeria was formed by who?",
    choice1: "Wole Soyinka",
    choice2: "Dr. Nnamdi Azikiwe",
    choice3: "Herbert Macaulay",
    choice4: "Lord Luggard",
    answer: 3
  },
  {
    question: "Who was the first governor-general of colonial Nigeria?",
    choice1: "Herbert Macaulay",
    choice2: "Lord Luggard",
    choice3: "Flora Shaw",
    choice4: "Olusegun Obasanjo",
    answer: 2
  },
  {
    question: "There are how many ethnic groups in Nigeria:",
    choice1: "144",
    choice2: "157",
    choice3: "36",
    choice4: "250",
    answer: 4
  },
  {
    question: "Who is the current Chief Justice of Nigeria?",
    choice1: "Olukayode Ariwoola",
    choice2: "Tafawa Balewa",
    choice3: "Justice Hammed Diya",
    choice4: "Ibrahim Tanko Muhammed",
    answer: 1
  },
  {
    question: "The second military coup d'etat in Nigeria took place on?"
    choice1: "January 16, 1966",
    choice2: "August 15, 1966",
    choice3: "July 29, 1966",
    choice4: "June 12, 1966",
    answer: 3
  },
  {
    question: "Which Nigerian state is known as the "Coal City State”?"
    choice1: "Lagos"
    choice2: "Abuja"
    choice3: "Port Harcourt",
    choice4: "Enugu",
    answer: 4
  },
  {
    question: "Whose portrait is on the Nigeria 5 naira note?",
    choice1: "Sir Tafawa Balewa",
    choice2: "Alva Ikuku",
    choice3: "Dr Nnamdi Azikiwe",
    choice4: "Nenadi Usman",
    answer: 1
  },
  {
    question: "When did Nigeria become a British colony?",
    choice1: "1914 ",
    choice2: "1915",
    choice3: "1900",
    choice4: "1912",
    answer: 1
  },
  {
    question: " Nigeria’s first female NAFDAC Chairman was?",
    choice1: "Prof. Dora Akunyili",
    choice2: "Ngozi Okonjo Iweala",
    choice3: "Lauretta Onochie",
    choice4: "Funmilayo Ramsey Kuti",
    answer: 1
  },
  {
    question: "What was the first-ever Nollywood movie produced?",
    choice1: "Tongues of Fire, 1926",
    choice2: "Palaver, 1926",
    choice3: "Phone Swap, 1926",
    choice4: "Corporate Maid, 1926",
    answer: 2
  },
  {
    question: "The first woman in Nigeria to contest in the presidential election was?",
    choice1: "Maurice Ibru ",
    choice2: "Sarah Nnadzwa Jubril",
    choice3: "Uju Ken-Ohanneye",
    choice4: "Ngozi Okonjo Iweala",
    answer: 2
  },
  {
    question: "Former president of Nigeria Umaru Musa Yar’Adua died in what year?",
    choice1: "May 5, 2010",
    choice2: "June 5, 2010",
    choice3: "May 6, 2010",
    choice4: "June 6,2010",
    answer: 3
  },
  {
    question: "Which is the highest court of law in Nigeria?",
    choice1: "Supreme Court of Nigeria",
    choice2: "Court of Appeal",
    choice3: "Federal High Court",
    choice4: "State High Court",
    answer: 1
  },
  {
    question: "Which Nigerian city is known for its ancient terracotta sculptures and artefacts?",
    choice1: "Zaria",
    choice2: "Benin city",
    choice3: "Kano",
    choice4: "Ife",
    answer: 4
  },
  {
    question: "Who was the first Nigerian to win the UEFA Champions League title?",
    choice1: "Jay-Jay Okocha",
    choice2: "Nwankwo Kanu",
    choice3: "Finidi George",
    choice4: "John Obi Mikel",
    answer: 2
  },
  {
    question: "What is the name of the Nigerian national anthem?",
    choice1: " Our Heroes Past ",
    choice2: "Nigeria, We Hail Thee",
    choice3: "Arise, O Compatriots",
    choice4: "Oh God of Creation",
    answer: 3
  },
  {
    question: "Which is the oldest degree awarding university in Nigeria?"
    choice1: "Obafemi Awolowo University",
    choice2: "University of Lagos",
    choice3: "University of Ibadan",
    choice4: "University of Benin",
    answer: 3
  },
  {
    question: "Nigeria’s first ever female psychiatrist was?",
    choice1: "Prof. Dora Akunyili",
    choice2: "Dr. Bretha Johnson",
    choice3: "Dr. Adamu Adamu",
    choice4: "Dr. Aderonke Kale",
    answer: 2
  },
  {
    question: "Blue in the Nigerian Police flag represents?",
    choice1: "Fight, hope and mission",
    choice2: "Love, strength and peace",
    choice3: "Strength, joy and happiness",
    choice4: "Love, loyalty and unity",
    answer: 4
  },
  {
    question: "Who was Nigeria’s first Inspector General of Police?"
    choice1: "Mr. C. W. Duncan",
    choice2: " Godwin Emefiele",
    choice3: "Louis Edet",
    choice4: "Muhammed Abubakar",
    answer: 1
  },
  {
    question: "Nigeria Council was created by?",
    choice1: "Flora Shaw",
    choice2: "Herbert Macaulay",
    choice3: "Lord Luggard",
    choice4: "Frank Godwin",
    answer: 3
  },
  {
    question: "Who was the first female to become a Chartered Accountant in Nigeria?",
    choice1:" Olufunmilayo Ransome-Kuti",
    choice2: "Margaret Ekpo",
    choice3: "Francesca Emmanuel    ",
    choice4: "Cecilia Ibru",
    answer: 3
  },
  {
    question: "Gombe state in Nigeria is known as the?",
    choice1: "Jewel of Savannah",
    choice2: "Food basket of the nation",
    choice3: "Home of peace",
    choice4: "Land of milk and honey",
    answer: 1
  },
  {
    question: "Which Nigerian state is known as Eastern Heartland?",
    choice1: "Abia state ",
    choice2: "Anambra state",
    choice3: "Enugu state ",
    choice4: "Imo state ",
    answer: 4
  },
  {
    question: "The first political party in Nigeria was?",
    choice1: "Nigerian National Democratic Party (NNDP)",
    choice2: "People’s Democratic Party (PDP)",
    choice3: "All Progressive Congress (APC)",
    choice4: "Labour Party (LP)",
    answer: 1
  },
  {
    question: "Polymer notes were introduced in Nigeria on?",
    choice1:"28th April, 2007",
    choice2: "28th June, 2008",
    choice3: "28th February, 2007",
    choice4: "28th February, 2008",
    answer: 4
  },
  {
    question: "Which state in Nigeria has the largest Local Government Areas?:",
    choice1: "Kano State with 44 LGAs",
    choice2: "Kaduna State with 44 LGAs",
    choice3: "Sokoto State with 44 LGAs",
    choice4: "Kebbi State with 44 LGAs",
    answer: 1
  },
  {
    question: "General Yakubu Gowon created how many states in Nigeria in May 1967?",
    choice1: "12 states",
    choice2: "11 states",
    choice3: "10 states",
    choice4: "15 states",
    answer: 1
  },
  {
    question: "Who was the longest-serving senate President of Nigeria?",
    choice1: "Ken Nnamani",
    choice2: "David Mark",
    choice3: "Bukola Saraki",
    choice4: "Atiku Abubakar",
    answer: 2
  },
  {
    question: "The last military dictator Nigeria had was?",
    choice1: "Sanni Abacha",
    choice2: "Abdulsalam Abubakar",
    choice3: "Muhammed Buhari",
    choice4: "Ibrahim Babangida",
    answer: 2
  },
  {
    question: "Where was oil discovered in Nigeria in 1956?",
    choice1:" Bayelsa State",
    choice2: "Enugu State",
    choice3: "Cross-River State",
    choice4: "Rivers State",
    answer: 4
  },
  {
    question: "NEPA became PHCN in Nigeria in the year?",
    choice1:"2002",
    choice2: "2005",
    choice3: "2008",
    choice4: "2006",
    answer: 3
  },
  {
    question: " What is former President Obasanjo’s middle name?",
    choice1: "Aremu",
    choice2: "Onabanjo",
    choice3: "Olusegun",
    choice4: " Oluseun",
    answer: 1
  },
  {
    question: "Which Nigerian author wrote the novel "Purple Hibiscus"?",
    choice1: "Chinua Achebe",
    choice2: "Wole Soyinka",
    choice3: "Buchi Emecheta",
    choice4: "Chimamanda Ngozi Adichie",
    answer: 4
  },
  {
    question: " The 1869 completion of the First Transcontinental Railroad was a significant achievement connecting the East and West coasts of the United States primarily through the efforts of:",
    choice1:"Union Pacific and Central Pacific Railroad companies",
    choice2: "Santa Fe and Southern Pacific Railroad companies",
    choice3: "Baltimore and Ohio Railroad",
    choice4: "Norfolk Southern and Canadian Pacific Railway",
    answer: 1
  },
  {
    question: "The 1944 G.I. Bill aimed to provide support to:",
    choice1:"Veterans returning from World War II",
    choice2: "Civil rights activists",
    choice3: "Women entering the workforce",
    choice4: "Native American communities",
    answer: 1
  },
  {
    question: "The 19th-century abolitionist who published the anti-slavery newspaper 'The Liberator' was:",
    choice1:"Frederick Douglass",
    choice2: "John Brown",
    choice3: "Harriet Tubman",
    choice4: "William Lloyd Garrison",
    answer: 4
    {
      question: "The 1970 Kent State shootings, where National Guard troops killed four students during an anti-Vietnam War protest, occurred in which state?",
      choice1:"Ohio",
      choice2: "California",
      choice3: "New York",
      choice4: "Illinois",
      answer: 1
    },
    {
      question: "The 1832 Nullification Crisis revolved around the opposition of a state to federal tariffs and occurred in which southern state?",
      choice1:"South Carolina",
      choice2: "Georgia",
      choice3: "Virginia",
      choice4: "Alabama",
      answer: 1
    },
    {
      question: "The 1960 televised presidential debates between John F. Kennedy and Richard Nixon are often credited with influencing the outcome of the election by favoring:",
      choice1:" Nixon's experience and policies ",
      choice2: "Kennedy's charisma and appearance",
      choice3: "Third-party candidates",
      choice4: "Eisenhower's endorsement of Kennedy",
      answer: 2
    },
    {
      question: "The 1892 Homestead Strike, a labor dispute between workers and management, occurred in which industry?",
      choice1:"Textiles",
      choice2: "Coal mining",
      choice3: "Steel",
      choice4: "Railroads",
      answer: 3
    },
    {
      question: "The 1989 fall of the Berlin Wall symbolized the end of the:",
      choice1:"Cold War ",
      choice2: "Korean War",
      choice3: "Vietnam War",
      choice4: "Cuban Missile Crisis",
      answer: 1
    },
    {
      question: "The 1966 Miranda v. Arizona Supreme Court decision established the requirement for law enforcement to:",
      choice1:"Provide legal representation to defendants",
      choice2: "Read the rights of the accused before questioning",
      choice3: "Conduct thorough investigations before making arrests",
      choice4: "Use physical force only when necessary",
      answer: 2
    },
    {
      question: "The 1913 introduction of the income tax in the United States was enabled by the ratification of the:",
      choice1:"14th Amendment",
      choice2: "16th Amendment",
      choice3: "18th Amendment",
      choice4: "19th Amendment",
      answer: 2
    },
    {
      question: " The 1777 Articles of Confederation served as the first constitution of the United States and were eventually replaced by the:",
      choice1:"Declaration of Independence",
      choice2: "Emancipation Proclamation",
      choice3: "U.S. Constitution",
      choice4: "Bill of Rights",
      answer: 3
    },


const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 100;


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



