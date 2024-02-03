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
    question: "The Neutrality Acts of the 1930s were aimed at preventing the United States from being drawn into conflicts by:",
    choice1:"Banning the sale of arms to belligerent nations",
    choice2: "Encouraging alliances with European powers",
    choice3: "Promoting interventionist foreign policies",
    choice4: "Supporting international peacekeeping efforts",
    answer: 1
  },
  {
    question: "The 1979 Iranian Revolution resulted in the overthrow of which leader, leading to the establishment of an Islamic republic in Iran?",
    choice1:"Shah Mohammad Reza Pahlavi",
    choice2: "Ayatollah Ruhollah Khomein",
    choice3: "Saddam Hussein",
    choice4: "Mahmoud Ahmadinejad",
    answer: 1
  },
  {
    question: "The 1944 Bretton Woods Conference laid the foundation for the establishment of",
    choice1:"United Nations",
    choice2: "International Monetary Fund (IMF)",
    choice3: "European Union (EU)",
    choice4: "North Atlantic Treaty Organization (NATO)",
    answer: 2
  },
  {
    question: "The 'War on Terror' initiated in the aftermath of the September 11, 2001 attacks led to U.S. military involvement in which countries?",
    choice1:"Iraq and Afghanistan",
    choice2: " Iran and Syria",
    choice3: "Libya and Yemen",
    choice4: "North Korea and Pakistan",
    answer: 1
  },
  {
    question: " The 1876 Battle of Little Bighorn, also known as Custer's Last Stand, involved conflict between the U.S. Army and:",
    choice1:"Apache Indians",
    choice2: " Lakota Sioux and Cheyenne tribes",
    choice3: "Nez Perce Indians",
    choice4: "Comanche Indians",
    answer: 2
  },
  {
    question: "The 'New Frontier' was a term associated with the domestic and foreign policies of which U.S. president?",
    choice1:"John F. Kennedy ",
    choice2: "Lyndon B. Johnson",
    choice3: "Dwight D. Eisenhower",
    choice4: "Richard Nixon",
    answer: 1
  },
  {
    question: "The 1898 Treaty of Paris concluded the Spanish-American War and resulted in the United States acquiring which territories?",
    choice1:"Puerto Rico, Guam, and the Philippines",
    choice2: "Cuba, Mexico, and Haiti",
    choice3: " Alaska, Hawaii, and Samoa",
    choice4: "Panama, Nicaragua, and Honduras",
    answer: 11
  },
  {
    question: "The 1836 Battle of the Alamo was a key event in which conflict for Texan independence?",
    choice1:"Mexican-American War ",
    choice2: "War of 1812",
    choice3: "Texas Revolution",
    choice4: " Civil War",
    answer: 3
  },
  {
    question: "The 1947 Truman Doctrine was a response to the spread of:",
    choice1:"Communism",
    choice2: "Fascism",
    choice3: "Imperialism",
    choice4: "Nationalism",
    answer: 1
  },
  {
    question: "The 1969 Apollo 11 mission achieved the first successful:",
    choice1:"Spacewalk",
    choice2: "Mars landing",
    choice3: "Moon landing",
    choice4: "Satellite launch",
    answer: 3
  },
  {
    question: "The 1901 assassination of President William McKinley led to the presidency of:",
    choice1:"Theodore Roosevelt",
    choice2: "Woodrow Wilson",
    choice3: "William Howard Taft ",
    choice4: "Franklin D. Roosevelt",
    answer: 1
  },
  {
    question: "The 1964 Gulf of Tonkin Resolution granted President Lyndon B. Johnson the authority to:",
    choice1:"Declare war on North Vietnam",
    choice2: "Mobilize U.S. troops in Vietnam",
    choice3: "Negotiate a peace treaty with North Vietnam",
    choice4: " Expand the draft for military service",
    answer: 2
  },
  {
    question: "The 19th-century concept of 'Manifest Destiny' was closely tied to the belief in the:",
    choice1:"Right to bear arms",
    choice2: "Abolition of slavery",
    choice3: "Expansion of American territory to the Pacific",
    choice4: "Separation of church and state",
    answer: 3
  },
  {
    question: "The 1980s economic policy of reducing government regulation and promoting free-market principles was commonly known as:",
    choice1:"The Great Society",
    choice2: "The New Deal",
    choice3: "Reaganomics",
    choice4: "The Square Deal",
    answer: 3
  },
  {
    question: "The 1894 Pullman Strike, a nationwide railroad strike, was a protest against:",
    choice1:"Wage cuts and poor working conditions",
    choice2: " High taxes on railroads",
    choice3: "Government interference in labor disputes",
    choice4: "Discrimination against immigrant workers",
    answer: 1
  },
  {
    question: "The 1919 Treaty of Versailles included the establishment of which international organization?",
    choice1:"United Nations",
    choice2: "League of Nations",
    choice3: "NATO (North Atlantic Treaty Organization)",
    choice4: "European Union",
    answer: 2
  },
  {
    question: "The 1963 March on Washington for Jobs and Freedom is best remembered for:",
    choice1:" Martin Luther King Jr.'s 'I Have a Dream' speech",
    choice2: "The establishment of the Peace Corps",
    choice3: "The signing of the Civil Rights Act",
    choice4: "The formation of the Black Panther Party",
    answer: 1
  },
  {
    question: "The 1892 Populist Party platform sought to address the concerns of:",
    choice1:" Industrial workers",
    choice2: "Farmers and laborers",
    choice3: "Urban immigrants",
    choice4: "Business owners",
    answer: 2
  },
  {
    question: "The 1927 execution of Italian immigrants Sacco and Vanzetti highlighted issues related to:",
    choice1:"Labor strikes",
    choice2: "Immigration quotas",
    choice3: "Anarchism and nativism",
    choice4: "Civil rights",
    answer: 3
  },
  {
    question: "The 1846 Oregon Trail migration was driven by the desire for:",
    choice1:"Gold and wealth",
    choice2: "Religious freedom",
    choice3: "Agricultural opportunities",
    choice4: "Fur trapping and trading opportunities",
    answer: 3
  },
  {
    question: "The 1965 Watts riots in Los Angeles were sparked by issues related to:",
    choice1:"Racial tensions and police brutality",
    choice2: "Economic inequality",
    choice3: "Vietnam War protests",
    choice4: "Anti-immigrant sentiments",
    answer: 1
  },
  {
    question: "The 1920s cultural and social movement known for challenging traditional norms and values was called the:",
    choice1:"Harlem Renaissance",
    choice2: "Beat Generation",
    choice3: "Lost Generation",
    choice4: "Jazz Age",
    answer: 4
  },
  {
    question: "The 1969 Apollo 11 mission achieved the first successful:",
    choice1:"Spacewalk",
    choice2: "Mars landing",
    choice3: " Moon landing",
    choice4: " Satellite launch",
    answer: 3
  },
  {
    question: "The 1954 Brown v. Board of Education decision declared that racial segregation in public schools was:",
    choice1:" Legal ",
    choice2: "Unconstitutional",
    choice3: " Up to individual states",
    choice4: "Temporary",
    answer: 2
  },
  {
    question: "The 1830 Indian Removal Act resulted in the forced relocation of Native American tribes, primarily the:",
    choice1:"Cherokee",
    choice2: "Sioux",
    choice3: "Apache",
    choice4: " Iroquoi",
    answer: 1
  },
  {
    question: "The 1870 passage of the 15th Amendment to the U.S. Constitution granted voting rights to:",
    choice1:" African American men",
    choice2: "Women",
    choice3: "Native Americans",
    choice4: "All citizens regardless of race",
    answer: 1
  },
  {
    question: " The 1968 Tet Offensive during the Vietnam War marked a turning point in public opinion against U.S. involvement, as it revealed:",
    choice1:"Military success and progress",
    choice2: "The effectiveness of U.S. counterinsurgency strategies",
    choice3: "The influence of the media on shaping public perception",
    choice4: "The stability of the South Vietnamese government",
    answer: 3
  },
  {
    question: "The 1906 Pure Food and Drug Act and the Meat Inspection Act were responses to concerns raised by:",
    choice1:" Labor unions",
    choice2: "Environmental activists",
    choice3: "Consumer advocates",
    choice4: " Anti-imperialists",
    answer: 3
  },
  {
    question: "The 1942 executive order that authorized the internment of Japanese Americans during World War II was issued by:",
    choice1:"Franklin D. Roosevelt",
    choice2: "Harry S. Truman",
    choice3: " Dwight D. Eisenhower",
    choice4: "Herbert Hoover",
    answer: 1
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



