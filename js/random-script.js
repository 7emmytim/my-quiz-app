// Generate and Upload Questions
let list = document.querySelector("ol");

let randomArr = 
[
    { question: "The smallest country in the world is", firstAns: { ans: "Vatican City", value: "A" }, nextAns: { ans: "Chile", value: "B" } },
    { question: "12, 11, 13, 12, 14, 13, … What number should come next?", firstAns: { ans: "15", value: "A" }, nextAns: { ans: "14", value: "B" } },
    { question: "Who is the founder of Facebook ?", firstAns: { ans: "Mark Zuckerberg", value: "A" }, nextAns: { ans: "Murtala Muhammed", value: "B" } },
    { question: "Which is the longest river in the world ?", firstAns: { ans: "River Niger", value: "B" }, nextAns: { ans: "River Nile", value: "A" } },
    { question: "Nomophobia is the fear of", firstAns: { ans: "Being without a phone", value: "A" }, nextAns: { ans: "money", value: "B" } },        
    { question: "Hippopotomonstrosesquippedaliophobia is the fear of", firstAns: { ans: "long words", value: "A" }, nextAns: { ans: "hippopotamus", value: "B" } },
    { question: "Ablutophobia is the fear of", firstAns: { ans: "bathing", value: "A" }, nextAns: { ans: "dancing", value: "B" } },
    { question: "Who won the 2010 Ballon d'Or ?", firstAns: { ans: "Yakubu Aiyegbeni", value: "B" }, nextAns: { ans: "Lionel Messi", value: "A" } },
    { question: "With how many bricks is the Empire State Building is made of?", firstAns: { ans: "15 million", value: "B" }, nextAns: { ans: "10 million", value: "A" } },
    { question: "How many years old the oldest piece of chewing gum?", firstAns: { ans: "9000 years", value: "A" }, nextAns: { ans: "6000 years", value: "B" } },
    { question: "On Sunday what is illegal to sell in Columbus, Ohio?", firstAns: { ans: "hotdogs", value: "B" }, nextAns: { ans: "cornflakes", value: "A" } },
    { question: "The heart of a shrimp is located in its", firstAns: { ans: "head", value: "A" }, nextAns: { ans: "leg", value: "B" } },
    { question: "How long can a snail sleep for ?", firstAns: { ans: "three years", value: "A" }, nextAns: { ans: "ten years", value: "B" } },
    { question: "Elephants are the only animal that can't jump", firstAns: { ans: "false", value: "B" }, nextAns: { ans: "true", value: "A" } },
    { question: "If you are in a dark room with a candle, a wood stove and a gas lamp. You only have one match, so what do you light first?", firstAns: { ans: "the candle", value: "B" }, nextAns: { ans: "the match", value: "A" } },
    { question: "The first selfie stick was invented in the", firstAns: { ans: "1980s", value: "A" }, nextAns: { ans: "1970s", value: "B" } },
    { question: "The credit for inventing the flush toilet goes to _____", firstAns: { ans: "Sir Fredrick Hummels", value: "B" }, nextAns: { ans: "Sir John Harrington", value: "A" } },
    { question: "Who composed the music for Sonic the Hedgehog 3?", firstAns: { ans: "Michael Jackson", value: "A" }, nextAns: { ans: "John Legend", value: "B" } },
    { question: "Who is the current Chief of staff to the president of Nigeria ?", firstAns: { ans: "Prof. Ibrahim Gambari", value: "A" }, nextAns: { ans: "Prof. Ibrahim Garba", value: "B" } },
    { question: "What is the capital of the United Arab Emirates ?", firstAns: { ans: "Abu Dhabi", value: "A" }, nextAns: { ans: "Delhi", value: "B" } },
    { question: "Africa's first COVID-19 case was recorded in ?", firstAns: { ans: "Egypt", value: "A" }, nextAns: { ans: "Ghana", value: "B" } },
    { question: "How many countries in Africa have their names starting with the letter 'A' ?", firstAns: { ans: "4", value: "B" }, nextAns: { ans: "2", value: "A" } },
    { question: "What is the name of the first-ever female combat helicopter pilot ?", firstAns: { ans: "Tolulope Agboola", value: "B" }, nextAns: { ans: "Tolulope Arotile", value: "A" } },
    { question: "Who is the current Emir of Kano ?", firstAns: { ans: "Aminu Ado Bayero", value: "A" }, nextAns: { ans: "Amir Sa'ad Abubakar", value: "B" } },
    { question: "Which is the smallest country in the world ?", firstAns: { ans: "Vatican City", value: "A" }, nextAns: { ans: "Chile", value: "B" } },
    { question: "The USA has the most stars of any flag with 50. What country's flag comes in second with 27 ?", firstAns: { ans: "Brazil", value: "A" }, nextAns: { ans: "Uzbekistan", value: "B" } },
    { question: "Which country does not have any of the seven wonders of the world ?", firstAns: { ans: "South Korea", value: "A" }, nextAns: { ans: "Mexico", value: "B" } },
    { question: "The world's first heart transplant was performed by Dr. Christiaan Banard in which country", firstAns: { ans: "South Africa", value: "A" }, nextAns: { ans: "Germany", value: "B" } },
    { question: "Pigs are some of the cleanest animals around", firstAns: { ans: "false", value: "B" }, nextAns: { ans: "true", value: "A" } },
    { question: "Which planet is known as the Red Planet?", firstAns: { ans: "Mercury", value: "B" }, nextAns: { ans: "Mars", value: "A" } },
    { question: "I'm standing right in front of Eiffel Tower, which country am I?", firstAns: { ans: "France", value: "A" }, nextAns: { ans: "Italy", value: "B" } },
    { question: "What is the Largest fresh water lake of the world?", firstAns: { ans: "Lake Laogai", value: "B" }, nextAns: { ans: "Lake Superior", value: "A" } },
    { question: "Which star is at the centre of our Solar System?", firstAns: { ans: "The Sun", value: "A" }, nextAns: { ans: "Sirius", value: "B" } },
    { question: "How many regional divisions does Africa have?", firstAns: { ans: "7", value: "B" }, nextAns: { ans: "6", value: "A" } },
    { question: "Which state in Nigeria has the smallest number of LGAs?", firstAns: { ans: "Gombe", value: "B" }, nextAns: { ans: "Abuja", value: "A" } },
    { question: "Which state has the highest percentage of contribution to oil revenue in Nigeria?", firstAns: { ans: "Delta State", value: "A" }, nextAns: { ans: "Lagos State", value: "B" } },
    { question: "Who was the last governor before Nigeria’s independence?", firstAns: { ans: "Sir Frederick Lugard", value: "B" }, nextAns: { ans: "Sir James Wilson Robertson", value: "A" } },
    { question: "When did the first world war take place?", firstAns: { ans: "1914-1919", value: "A" }, nextAns: { ans: "1939-1945", value: "B" } },
    { question: "When did the Nigerian civil war begin?", firstAns: { ans: "1976", value: "B" }, nextAns: { ans: "1967", value: "A" } },
    { question: "Which is part of the names of the Vice President of Nigeria?", firstAns: { ans: "Olayemisi", value: "B" }, nextAns: { ans: "Oluleke", value: "A" } },
    { question: "Manchester United was founded in the year", firstAns: { ans: "1878", value: "A" }, nextAns: { ans: "1876", value: "B" } },
    { question: "The richest man in the world founded", firstAns: { ans: "Microsoft", value: "B" }, nextAns: { ans: "Amazon", value: "A" } },
    { question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:", firstAns: { ans: "42, 33", value: "A" }, nextAns: { ans: "39, 30", value: "B" } },
    { question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:", firstAns: { ans: "600", value: "B" }, nextAns: { ans: "700", value: "A" } },
    { question: "If one-third of one-fourth of a number is 15, then three-tenth of that number is:", firstAns: { ans: "45", value: "B" }, nextAns: { ans: "54", value: "A" } },
    { question: "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:", firstAns: { ans: "11", value: "B" }, nextAns: { ans: "15", value: "A" } },
    { question: "Which one of the following is not a prime number?", firstAns: { ans: "91", value: "A" }, nextAns: { ans: "71", value: "B" } },
    { question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?", firstAns: { ans: "5 years", value: "B" }, nextAns: { ans: "4 years", value: "A" } },
    { question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?", firstAns: { ans: "10 years", value: "A" }, nextAns: { ans: "8 years", value: "B" } },
    { question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?", firstAns: { ans: "8", value: "B" }, nextAns: { ans: "(1/8)", value: "A" } },
    { question: "Window is to pane as book is to", firstAns: { ans: "cover", value: "B" }, nextAns: { ans: "page", value: "A" } },
    { question: "Odometer is to mileage as compass is to", firstAns: { ans: "speed", value: "B" }, nextAns: { ans: "direction", value: "A" } },
    { question: "If a - b = 3 and a2 + b2 = 29, find the value of ab.", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "10", value: "A" } },
    { question: "United Nations celebrates World Chess Day globally on which date?", firstAns: { ans: "July 20", value: "A" }, nextAns: { ans: "July 19", value: "B" } },
    { question: "When is Mandela International Day celebrated?", firstAns: { ans: "July 19", value: "B" }, nextAns: { ans: "July 18", value: "A" } },
    { question: "Grand Central Terminal, Park Avenue, New York is the world's", firstAns: { ans: "largest railway station", value: "A" }, nextAns: { ans: "longest railway station", value: "B" } },
    { question: "Entomology is the science that studies", firstAns: { ans: "The origin and history of technical and scientific terms", value: "B" }, nextAns: { ans: "Insects", value: "A" } },
    { question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of", firstAns: { ans: "Africa", value: "A" }, nextAns: { ans: "Australia", value: "B" } },
    { question: "Which of the following is used in pencils?", firstAns: { ans: "Charcoal", value: "B" }, nextAns: { ans: "Graphite", value: "A" } },
    { question: "Most soluble in water is", firstAns: { ans: "common salt", value: "B" }, nextAns: { ans: "sugar", value: "A" } },
    { question: "The reading of a barometer going down is an indication of", firstAns: { ans: "snow", value: "B" }, nextAns: { ans: "rainfall", value: "A" } },
    { question: "Fathom is the unit of", firstAns: { ans: "distance", value: "B" }, nextAns: { ans: "depth", value: "A" } },
    { question: "What invention caused many deaths while testing it?", firstAns: { ans: "Parachute", value: "A" }, nextAns: { ans: "Dynamite", value: "B" } },
    { question: "In what decade was the telephone invented?", firstAns: { ans: "1860s", value: "B" }, nextAns: { ans: "1870s", value: "A" } },
    { question: "Exposure to sunlight helps a person improve his health because", firstAns: { ans: "the ultraviolet rays convert skin oil into Vitamin D", value: "A" }, nextAns: { ans: "the infrared light kills bacteria in the body", value: "B" } },
    { question: "Golf player Vijay Singh belongs to which country?", firstAns: { ans: "India", value: "B" }, nextAns: { ans: "Fiji", value: "A" } },
    { question: "First China War was fought between", firstAns: { ans: "China and America", value: "B" }, nextAns: { ans: "China and Britain", value: "A" } },
    { question: "Each year World Red Cross and Red Crescent Day is celebrated on", firstAns: { ans: "May 18", value: "B" }, nextAns: { ans: "May 8", value: "A" } },
    { question: "Friction can be reduced by changing from", firstAns: { ans: "rolling to sliding", value: "B" }, nextAns: { ans: "sliding to rolling", value: "A" } },
    { question: "One kilometre is equal to how many miles?", firstAns: { ans: "0.5", value: "B" }, nextAns: { ans: "0.62", value: "A" } },
    { question: "kilohertz is a unit which measures", firstAns: { ans: "frequencies", value: "A" }, nextAns: { ans: "voltage", value: "B" } },
    { question: "India has largest deposits of ____ in the world.", firstAns: { ans: "copper", value: "B" }, nextAns: { ans: "mica", value: "A" } },
    { question: "Who is the English physicist responsible for the 'Big Bang Theory'?", firstAns: { ans: "George Gamow", value: "A" }, nextAns: { ans: "Albert Einstein", value: "B" } },
    { question: "When was the toothbrush invented?", firstAns: { ans: "1740", value: "B" }, nextAns: { ans: "1770", value: "A" } },
    { question: "What is Usain Bolt’s 100m world record time?", firstAns: { ans: "9.48 seconds", value: "B" }, nextAns: { ans: "9.58 seconds", value: "A" } },
    { question: "Which England footballer was famously never given a yellow card?", firstAns: { ans: "Wayne Rooney", value: "B" }, nextAns: { ans: "Gary Lineker", value: "A" } },
    { question: "How many times has Roger Federer won the French Open?", firstAns: { ans: "once", value: "A" }, nextAns: { ans: "thrice", value: "B" } },
    { question: "The LA Lakers and New York Knicks play which sport?", firstAns: { ans: "cricket", value: "B" }, nextAns: { ans: "Basketball", value: "A" } },
    { question: "Who discovered that all objects, heavy or light, fall at the same rate (with the same acceleration)?", firstAns: { ans: "Galileo Galilei", value: "A" }, nextAns: { ans: "Isaac Newton", value: "B" } },
    { question: "On which planet is the tallest mountain in the Solar System?", firstAns: { ans: "Venus", value: "B" }, nextAns: { ans: "Mars", value: "A" } },
    { question: "What is the name of a single dot on a computer monitor screen?", firstAns: { ans: "Pixel", value: "A" }, nextAns: { ans: "Matrix", value: "B" } },
    { question: "What was the Wright Brother's first successful aeroplane called?", firstAns: { ans: "Birdie", value: "B" }, nextAns: { ans: "Flyer", value: "A" } },
    { question: "On the moon, what colour is the sky?", firstAns: { ans: "Red", value: "B" }, nextAns: { ans: "Black", value: "A" } },
    { question: "What did Tim Berners-Lee create?", firstAns: { ans: "The First Browser", value: "B" }, nextAns: { ans: "The World Wide Web", value: "A" } },
    { question: "What is the angle between the hands of a clock at 1 o'clock?", firstAns: { ans: "30 degrees", value: "A" }, nextAns: { ans: "15 degrees", value: "B" } },
    { question: "Tuberculosis is caused by", firstAns: { ans: "Virus", value: "B" }, nextAns: { ans: "Bacteria", value: "A" } },
    { question: "A method of growing plants without soil", firstAns: { ans: "Hydroponics", value: "A" }, nextAns: { ans: "Hydrolysis", value: "B" } },
    { question: "Humans and chimpanzees share roughly how much DNA?", firstAns: { ans: "60%", value: "B" }, nextAns: { ans: "98%", value: "A" } },
    { question: "How many points of the compass are there?", firstAns: { ans: "16", value: "B" }, nextAns: { ans: "32", value: "A" } },
    { question: "Which country had, until 2011, a flag with only a solid colour?", firstAns: { ans: "Algeria", value: "B" }, nextAns: { ans: "Libya", value: "A" } },
    { question: "Why was the capital of Spain moved to Madrid?", firstAns: { ans: "It's location at centre of the country", value: "A" }, nextAns: { ans: "Civil war", value: "B" } },
    { question: "What's the former name of Bangladesh?", firstAns: { ans: "Nothern Pakistan", value: "B" }, nextAns: { ans: "East Pakistan", value: "A" } },
    { question: "What is an Olympiad?", firstAns: { ans: "climax of an Olympics Event", value: "B" }, nextAns: { ans: "period between Olympic Games", value: "A" } },
    { question: "Which sport has the highest ratio of officials to players?", firstAns: { ans: "Volleyball", value: "B" }, nextAns: { ans: "Tennis", value: "A" } },
    { question: "Which country won the first FIFA World Cup held in 1930?", firstAns: { ans: "Brazil", value: "B" }, nextAns: { ans: "Uruguay", value: "A" } },
    { question: "What was Hitler's reaction to Jesse Owens winning four gold medals in the Olympics?", firstAns: { ans: "Amazed", value: "B" }, nextAns: { ans: "Irritated", value: "A" } },
    { question: "How many pockets does a snooker table have?", firstAns: { ans: "6", value: "A" }, nextAns: { ans: "8", value: "B" } },
    { question: "In which sport do neither the participants nor the spectators know the score until the end?", firstAns: { ans: "Water polo", value: "B" }, nextAns: { ans: "Boxing", value: "A" } },
    { question: "What is James Naismith best known for in Basketball?", firstAns: { ans: "Winning most medals", value: "B" }, nextAns: { ans: "Inventing the game", value: "A" } },
    { question: "BASIC, Perl, and Python are types of what?", firstAns: { ans: "ISPs", value: "B" }, nextAns: { ans: "Computer languages", value: "A" } },
    { question: "What shape is the DNA molecule?", firstAns: { ans: "Single helix", value: "B" }, nextAns: { ans: "A double helix", value: "A" } },
    { question: "What does DVD stand for?", firstAns: { ans: "Digital Volatile Disc", value: "B" }, nextAns: { ans: "Digital Versatile Disc", value: "A" } },
    { question: "What does the FM in radio stations stand for?", firstAns: { ans: "Frequency Modulation", value: "A" }, nextAns: { ans: "Free Modulation", value: "B" } },
    { question: "The duration of a game of Polo is measured in what?", firstAns: { ans: "Water polo", value: "B" }, nextAns: { ans: "Boxing", value: "A" } },
    { question: "Which sport cannot be played left handed since 1975, for safety reasons?", firstAns: { ans: "Cycling", value: "B" }, nextAns: { ans: "Polo", value: "A" } },
    { question: "How many balls are there on a snooker table at the start of a game?", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "22", value: "A" } },
    { question: "What is Tiger Woods' first name?", firstAns: { ans: "Franklin", value: "B" }, nextAns: { ans: "Eldrick", value: "A" } },
    { question: "How many hurdles are there in the men's 110m race?", firstAns: { ans: "11", value: "B" }, nextAns: { ans: "10", value: "A" } },
    { question: "How many teeth does an adult human have?", firstAns: { ans: "36", value: "B" }, nextAns: { ans: "32", value: "A" } },
    { question: "Which chemical element gets it's name from a greek word meaning 'stranger'?", firstAns: { ans: "Boron", value: "B" }, nextAns: { ans: "Xenon", value: "A" } },
    { question: "Which computer operating system has a penguin as its logo?", firstAns: { ans: "Ubuntu", value: "B" }, nextAns: { ans: "Linux", value: "A" } },
    { question: "What kind of animal is a basilisk?", firstAns: { ans: "A Snake", value: "B" }, nextAns: { ans: "A Lizard", value: "A" } },
    { question: "Aquaculture is the correct term for what?", firstAns: { ans: "Fish farming", value: "A" }, nextAns: { ans: "Cattle rearing", value: "B" } },
    { question: "Which branch of physics deals with sound?", firstAns: { ans: "Harmonics", value: "B" }, nextAns: { ans: "Acoustics", value: "A" } },
    { question: "There are three types of nuclear radiation. What are they called?", firstAns: { ans: "Alpha, Beta, and delta", value: "B" }, nextAns: { ans: "Alpha, Beta, and Gamma", value: "A" } },
    { question: "What sort of substances are adrenaline, cortisone, insulin, and oestrogens?", firstAns: { ans: "Neurons", value: "B" }, nextAns: { ans: "Hormones", value: "A" } },
    { question: "Which is the lightest gas?", firstAns: { ans: "Helium", value: "B" }, nextAns: { ans: "Hydrogen", value: "A" } },
    { question: "In which animal species does the male get pregnant?", firstAns: { ans: "Sea urchin", value: "B" }, nextAns: { ans: "Sea Horse", value: "A" } },
    { question: "What is the SI unit of electrical current?", firstAns: { ans: "Hertz", value: "B" }, nextAns: { ans: "Ampere", value: "A" } },
    { question: "What does IBM stand for?", firstAns: { ans: "International Business Machines", value: "A" }, nextAns: { ans: "International Business Management", value: "B" } },
    { question: "Which two planets do not have moons?", firstAns: { ans: "Mars and Jupiter", value: "B" }, nextAns: { ans: "Mercury and Venus", value: "A" } },
    { question: "Sun versus Water, which is denser?", firstAns: { ans: "Water", value: "B" }, nextAns: { ans: "Sun", value: "A" } },
    { question: "Which is a character in the movie Harry Potter", firstAns: { ans: "Hagrid", value: "A" }, nextAns: { ans: "Jonas Will", value: "B" } },
    { question: "Which came first: colour or sound films?", firstAns: { ans: "Sound films", value: "B" }, nextAns: { ans: "Colour films", value: "A" } },
    { question: "Which is always the first event of the Men's Decathlon?", firstAns: { ans: "200 metres", value: "B" }, nextAns: { ans: "100 metres", value: "A" } },
    { question: "What is South America's equivalent of the Champions League called?", firstAns: { ans: "Copa America", value: "B" }, nextAns: { ans: "Copa Libertadores", value: "A" } },
    { question: "In the US military, what is a Purple Heart awarded for?", firstAns: { ans: "Killing a terrorist", value: "B" }, nextAns: { ans: "Wounded or killed in action", value: "A" } },
    { question: "What is 1999 in Roman numerals?", firstAns: { ans: "MCMXXCIX", value: "B" }, nextAns: { ans: "MCMXCIX", value: "A" } },
    { question: "Which country use Western European Time?", firstAns: { ans: "Italy", value: "B" }, nextAns: { ans: "Portugal", value: "A" } },
    { question: "What is the currency of India?", firstAns: { ans: "Rupee", value: "A" }, nextAns: { ans: "India Dollars", value: "B" } },
    { question: "Which country occupies practically one half of the land of South America?", firstAns: { ans: "Mexico", value: "B" }, nextAns: { ans: "Brazil", value: "A" } },
    { question: "What are the official languages of Israel?", firstAns: { ans: "Hebrew and Latin", value: "B" }, nextAns: { ans: "Hebrew and Arabic", value: "A" } },
    { question: "How many time zones are there in China?", firstAns: { ans: "Two", value: "B" }, nextAns: { ans: "One", value: "A" } },
    { question: "Which is the second largest country in Europe (by area) after Russia?", firstAns: { ans: "France", value: "B" }, nextAns: { ans: "Ukraine", value: "A" } },
    { question: "Which country has a birth rate of zero?", firstAns: { ans: "The Vatican", value: "A" }, nextAns: { ans: "Cuba", value: "B" } },
    { question: "What does GPS stand for?", firstAns: { ans: "Global Pointing System", value: "B" }, nextAns: { ans: "Global Positioning System", value: "A" } },
    { question: "Guaraní is both the currency and an official language of which country?", firstAns: { ans: "Panama", value: "B" }, nextAns: { ans: "Paraguay", value: "A" } },
    { question: "Which country's has it's official languges as English, Malay, Mandarin, and Tamil?", firstAns: { ans: "China", value: "B" }, nextAns: { ans: "Singapore", value: "A" } },
    { question: "What is the study of mushrooms called?", firstAns: { ans: "Muscology", value: "B" }, nextAns: { ans: "Mycology", value: "A" } },
    { question: "In electronics, what does DC stand for?", firstAns: { ans: "Direct Charge", value: "B" }, nextAns: { ans: "Direct Current", value: "A" } },
    { question: "How many hearts do octopuses have?", firstAns: { ans: "Zero", value: "B" }, nextAns: { ans: "Three", value: "A" } },
    { question: "About how many galaxies are there in the universe?", firstAns: { ans: "25 billion", value: "A" }, nextAns: { ans: "25 million", value: "B" } },
    { question: "Which of these is a galaxy?", firstAns: { ans: "Jupiter", value: "B" }, nextAns: { ans: "Milky Way", value: "A" } },
    { question: "Which of these contain large quantities of ice?", firstAns: { ans: "asteroids", value: "B" }, nextAns: { ans: "comets", value: "A" } },
    { question: "Which is not a scientific optical instrument?", firstAns: { ans: "endoscope", value: "B" }, nextAns: { ans: "periscope", value: "A" } },
    { question: "Who are the owners of Liverpool FC?", firstAns: { ans: "Standard Chartered", value: "B" }, nextAns: { ans: "Fenway Sports Group", value: "A" } },
    { question: "Who has won more Grand Slams, Roger Federer or Serena Williams?", firstAns: { ans: "Roger Federer", value: "B" }, nextAns: { ans: "Serena Williams", value: "A" } },
    { question: "The Pittsburgh Penguins play which sport?", firstAns: { ans: "Baseball", value: "B" }, nextAns: { ans: "Ice Hockey", value: "A" } },
    { question: "A penalty in football is taken how many yards away from the goal?", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "12", value: "A" } },
    { question: "How many minutes is a rugby match?", firstAns: { ans: "90", value: "B" }, nextAns: { ans: "80", value: "A" } },
    { question: "How matches did Mohammed Ali lose in his career?", firstAns: { ans: "None", value: "B" }, nextAns: { ans: "One", value: "A" } },
    { question: "What is the name of the Barcelona football stadium?", firstAns: { ans: "Camp Nou", value: "A" }, nextAns: { ans: "Santiago", value: "B" } },
    { question: "In which sport can you win the Davis Cup?", firstAns: { ans: "Formula One", value: "B" }, nextAns: { ans: "Tennis", value: "A" } },
    { question: "Which of them does not have a twitter account?", firstAns: { ans: "Jeff Bezos", value: "B" }, nextAns: { ans: "Mark Zuckerberg", value: "A" } }
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 10; i++ ) {
    let generator = Math.floor(Math.random() * randomArr.length);
    //console.log(generator);
    questionsArr.push(randomArr[generator]);
}

//Display of questions in html
function templateFunc(x, y, z, a, b, i, outputCorrection) {
    let template =

        `
    <li class="my-5 question-div">
        <p>${x}</p>
        <label>
            <input type="radio" name="q${i}" value="${a}"> ${y}
        </label> <br>
        <label>
            <input type="radio" name="q${i}" value="${b}"> ${z}
        </label>
        <div class="row">
            <div class="col-lg-3 correction mt-4">
                <p>The Correct answer is <br> ${outputCorrection} </p>
            </div>
            <div class="col-lg-6"></div>
        </div>
    </li>
    `;

    list.innerHTML += template;
}

questionsArr.forEach((a, i) => {
    let { question, firstAns, nextAns } = a;
    if (firstAns.value == "A") {
        outputCorrection = firstAns.ans;
    } else {
        outputCorrection = nextAns.ans;
    }
    // console.log(outputCorrection);
    templateFunc(question, firstAns.ans, nextAns.ans, firstAns.value, nextAns.value, i, outputCorrection);
});


// Check Answers and Show Result

let questionInput = document.querySelectorAll('input');
let btn = document.querySelector('.btn');
let resultDisplay = document.querySelector(".result-heading");
let result = document.querySelector('.result');
let correction = document.querySelectorAll(".correction");
let checkAnswer = document.querySelector(".check-answer");

let answerArr = [];
let score = 0;

btn.addEventListener('click', function () {
    questionInput.forEach(a => {
        if (a.checked && a.value == "A") {
            answerArr.push(a.value);
            console.log(answerArr);
        }
    });
    score = answerArr.length * 10;
    resultDisplay.style.display = "block";
    answerArr = [];
    scrollTo(0, document.body.scrollHeight);
    // Score counter
    let output = 0;
    const timer = setInterval(() => {
        result.textContent = output;
        if(output === score){
            clearInterval(timer);
        } else {
            output ++;
        } 
    }, 15);
    btn.style.display = "none";
    correction.forEach(a => a.style.display = "block");
});
