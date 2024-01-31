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
    question: "The slogan '54-40 or Fight!' was associated with which U.S. territorial dispute in the 1840s?",
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
    question: "The term 'Manifest Destiny' reflected the 19th-century belief that the United States was destined to:",
    choice1:"Establish a socialist government ",
    choice2: "Expand its territory across the continent",
    choice3: "Promote isolationist policies",
    choice4: "Form alliances with European powers",
    answer: 2
  },
  {
    question: "The 1963 March on Washington for Jobs and Freedom is best remembered for:",
    choice1:"Martin Luther King Jr.'s 'I Have a Dream' speech",
    choice2: "The establishment of the Peace Corps",
    choice3: "The signing of the Civil Rights Act",
    choice4: "The formation of the Black Panther Party",
    answer: 1
  },
  {
    question: "The Treaty of Guadalupe Hidalgo, ending the Mexican-American War, resulted in the United States gaining control of which present-day states?",
    choice1:"California, Texas, Arizona ",
    choice2: "New Mexico, Colorado, Utah",
    choice3: "Nevada, Idaho, Oregon",
    choice4: "Florida, Louisiana, Mississippi",
    answer: 1
  },
  {
    question: "Which U.S. president issued the Monroe Doctrine, asserting American influence in the Western Hemisphere and discouraging European colonization?",
    choice1:"James Madison",
    choice2: "James Monroe",
    choice3: "John Quincy Adams",
    choice4: " Andrew Jackson",
    answer: 2
  },
  {
    question: "The Seneca Falls Convention in 1848 is often considered a milestone in the history of:",
    choice1:"Women's suffrage ",
    choice2: "Abolition of slavery",
    choice3: "Labor rights",
    choice4: "Native American rights",
    answer: 1
  },
  {
    question: "The 'Great Migration' in the early 20th century refers to the movement of:",
    choice1:"European immigrants to the United States ",
    choice2: "African Americans from rural Southern states to Northern cities",
    choice3: "Native American tribes to reservations",
    choice4: "Mexican immigrants to the Southwest",
    answer: 2
  },
  {
    question: "The 1919 Amendment to the U.S. Constitution that granted women the right to vote is commonly known as the:",
    choice1:"18th Amendment ",
    choice2: "19th Amendment",
    choice3: "20th Amendment",
    choice4: "21st Amendment",
    answer: 2
  },
  {
    question: "The landmark Supreme Court case of Brown v. Board of Education (1954) dealt with issues related to:",
    choice1:" Segregation in public schools",
    choice2: " Affirmative action",
    choice3: "Voting rights",
    choice4: "Freedom of speech",
    answer: 1
  },
  {
    question: "The concept of 'checks and balances' in the U.S. government system is outlined in which part of the Constitution?",
    choice1:"Preamble",
    choice2: "Article I",
    choice3: "Article II",
    choice4: "Article III",
    answer: 2
  },
  {
    question: "The 'Red Scare' in the United States during the early 20th century was fueled by fears of:",
    choice1:"Nuclear warfare",
    choice2: "Communist infiltration",
    choice3: "Economic recession",
    choice4: "Racial tensions",
    answer: 2
  },
  {
    question: "Which U.S. president is associated with the establishment of the National Park system?",
    choice1:"Theodore Roosevelt",
    choice2: "Woodrow Wilson",
    choice3: "William Howard Taft",
    choice4: "Franklin D. Roosevelt",
    answer: 1
  },
  {
    question: "The Gulf of Tonkin Resolution, passed by Congress in 1964, played a significant role in the escalation of U.S. involvement in:",
    choice1:"World War I",
    choice2: "Korean War",
    choice3: "Vietnam War",
    choice4: "Gulf War",
    answer: 3
  },
  {
    question: "The term 'Reconstruction' in U.S. history refers to the period following the:",
    choice1:"American Revolution",
    choice2: "Civil War",
    choice3: "War of 1812",
    choice4: "Mexican-American War",
    answer: 2
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
    question: "The landmark case of Roe v. Wade (1973) addressed issues related to:",
    choice1:"School desegregation ",
    choice2: "Affirmative action",
    choice3: "Abortion rightsg",
    choice4: "Voting rights",
    answer: 3
  },
  {
    question: "The 1920s in the United States are often referred to as the 'Roaring Twenties' due to:",
    choice1:"Economic depression",
    choice2: "Rapid industrialization",
    choice3: "Social and cultural upheaval",
    choice4: "Prohibition of alcohol",
    answer: 3
  },
  {
    question: "The 1968 Democratic National Convention in Chicago became known for:
    ",
    choice1:"The nomination of Richard Nixon",
    choice2: "Peaceful protests and unity",
    choice3: "Violent clashes between protesters and police",
    choice4: "The passage of civil rights legislation",
    answer: 3
  },
  {
    question: "The 'Star-Spangled Banner,'' the U.S. national anthem, was inspired by events during the:",
    choice1:"American Revolution",
    choice2: "War of 1812",
    choice3: "Civil War",
    choice4: "Mexican-American War",
    answer: 2
  },
  {
    question: "The Marshall Plan, initiated after World War II, was designed to:",
    choice1:"Rebuild European economies",
    choice2: "Promote isolationist policies",
    choice3: "Contain the spread of communism",
    choice4: "Establish military alliances in Europe",
    answer: 1
  },
  {
    question: "The 18th Amendment to the U.S. Constitution, which was later repealed, dealt with the issue of:",
    choice1:"Women's suffrage",
    choice2: "Prohibition of alcohol",
    choice3: " Abolition of slavery",
    choice4: "Freedom of speech",
    answer: 2
  },
  {
    question: "The 1963 March on Washington for Jobs and Freedom is best remembered for:",
    choice1:"Martin Luther King Jr.'s 'I Have a Dream' speech",
    choice2: "The establishment of the Peace Corps",
    choice3: "The signing of the Civil Rights Act",
    choice4: "The formation of the Black Panther Party",
    answer: 1
  },
  {
    question: "The Wounded Knee Massacre in 1890 was a tragic event associated with the:",
    choice1:"Indian Removal Act ",
    choice2: "Trail of Tears",
    choice3: "Ghost Dance movement",
    choice4: "Battle of Little Bighorn",
    answer: 3
  },
  {
    question: "The Tet Offensive during the Vietnam War had a significant impact on public opinion in the United States by:",
    choice1:"Strengthening support for the war",
    choice2: "Demonstrating the success of U.S. military strategy",
    choice3: "Shifting public opinion against the war",
    choice4: "Isolating the conflict from Cold War tensions",
    answer: 3
  },
  {
    question: "The Harlem Renaissance of the 1920s was a cultural and artistic movement primarily associated with:",
    choice1:"Jazz music ",
    choice2: "Abstract expressionist painting",
    choice3: "Beat poetry",
    choice4: "Regionalist literature",
    answer: 1
  },
  {
    question: "The Progressive Era in the early 20th century was characterized by efforts to address social issues through:",
    choice1:"Laissez-faire economic policies ",
    choice2: "Limited government intervention",
    choice3: "Reform and regulation",
    choice4: "Expansion of imperialism",
    answer: 3
  },
  {
    question: "The 1862 Homestead Act encouraged westward expansion by providing:",
    choice1:" Financial aid to farmers ",
    choice2: " Land grants to railroad companies",
    choice3: "Free land to settlers who improved the property",
    choice4: "Military protection to pioneers",
    answer: 3
  },
  {
    question: " The 1912 presidential election featured a third-party candidate who advocated for progressive reforms. Who was this candidate?",
    choice1:"Woodrow Wilson ",
    choice2: "Theodore Roosevelt",
    choice3: "William Howard Taft",
    choice4: "Eugene V. Debs",
    answer: 2
  },
  {
    question: "The 'Bay of Pigs' invasion in 1961 was an unsuccessful attempt by the United States to overthrow the government of:",
    choice1:"Cuba",
    choice2: "Vietnam",
    choice3: " Nicaragua",
    choice4: "Iran",
    answer: 1
  },
  {
    question: "The 1972 Watergate scandal led to the resignation of President Richard Nixon. What was the primary issue in the Watergate scandal?",
    choice1:" Illegal wiretapping",
    choice2: "Espionage against foreign governments",
    choice3: "Bribery of foreign officials",
    choice4: "Burglary and cover-up of political activities",
    answer: 4
  }, {
    question: "The 1906 Pure Food and Drug Act and the Meat Inspection Act were significant pieces of legislation aimed at:",
    choice1:"Regulating labor practices",
    choice2: " Improving public health and safety",
    choice3: " Addressing racial segregation",
    choice4: " Expanding women's rights",
    answer: 2
  },
  {
    question: "The 1964 Civil Rights Act aimed to end discrimination based on:",
    choice1:"Gender",
    choice2: "Religion",
    choice3: "Race and color",
    choice4: "Sexual orientation",
    answer: 3
  },
  {
    question: "The 1803 Louisiana Purchase, negotiated by President Thomas Jefferson, involved the acquisition of territory from:",
    choice1:"France",
    choice2: "Spain",
    choice3: "Britain",
    choice4: "Mexico",
    answer: 1
  },
  {
    question: " The 'Big Four' who played a crucial role in negotiating the Treaty of Versailles after World War I included leaders from:",
    choice1:"United States, Germany, Britain, and France",
    choice2: "France, Italy, Japan, and the Soviet Union",
    choice3: "United States, Britain, France, and Italy",
    choice4: "Germany, Britain, Russia, and Austria-Hungary",
    answer: 3
  },
  {
    question: "The 19th-century movement that sought to limit the consumption of alcoholic beverages and ultimately led to Prohibition in the United States was known as:",
    choice1:"Temperance movement ",
    choice2: " Suffrage movement",
    choice3: "Abolitionist movement",
    choice4: "Populist movement",
    answer: 1
  },
  {
    question: "The 1986 Challenger space shuttle disaster occurred during the presidency of:",
    choice1:"Ronald Reagan",
    choice2: "Jimmy Carter",
    choice3: "George H.W. Bush",
    choice4: "Bill Clinton",
    answer: 1
  },
  {
    question: "The Marshall Plan, initiated after World War II, was designed to provide economic aid primarily to:",
    choice1:" Asian countries ",
    choice2: "African countries",
    choice3: "Eastern European countries",
    choice4: "Western European countries",
    answer: 4
  },
  {
    question: "The 'Great Compromise' during the Constitutional Convention of 1787 resolved the issue of representation in the U.S. Congress by proposing a:",
    choice1:"Proportional representation system",
    choice2: "Equal representation system",
    choice3: "Bicameral legislature",
    choice4: "Unicameral legislature",
    answer: 3
  },
  {
    question: "The term 'Yellow Journalism' is associated with sensationalized and exaggerated reporting, particularly during the:",
    choice1:"Civil War",
    choice2: "Spanish-American War",
    choice3: "World War I",
    choice4: "Vietnam War",
    answer: 2
  },
  {
    question: "The 1965 Voting Rights Act aimed to eliminate barriers preventing African Americans from:",
    choice1:"Owning property",
    choice2: "Serving in the military",
    choice3: "Voting",
    choice4: "Attending schools",
    answer: 3
  },
  {
    question: "The Supreme Court case Brown v. Board of Education (1954) overturned the precedent set by which earlier case that allowed racial segregation in public schools?",
    choice1:" Plessy v. Ferguson",
    choice2: "Dred Scott v. Sandford",
    choice3: "Marbury v. Madison",
    choice4: " Gibbons v. Ogden",
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

//CONSTANTS{
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



