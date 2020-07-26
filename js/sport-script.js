// Generate and Upload Questions
let list = document.querySelector("ol");

let sportArr = 
[
    { question: "What is an Olympiad?", firstAns: { ans: "climax of an Olympics Event", value: "B" }, nextAns: { ans: "period between Olympic Games", value: "A" } },
    { question: "Manchester United was founded in the year", firstAns: { ans: "1878", value: "A" }, nextAns: { ans: "1876", value: "B" } },
    { question: "What are the five colours of the Olympics rings ?", firstAns: { ans: "Black, red, yellow, blue and green", value: "A" }, nextAns: { ans: "Blue, yellow, white, green and red", value: "B" } },
    { question: "How many players are there in a rugby league team ?", firstAns: { ans: "12", value: "B" }, nextAns: { ans: "13", value: "A" } },
    { question: "Which football club has the least number of European Cups won ?", firstAns: { ans: "AC Milan", value: "B" }, nextAns: { ans: "Barcelona", value: "A" } },
    { question: "Which of the following has the highest goals in European Football ?", firstAns: { ans: "Atletico Madrid", value: "B" }, nextAns: { ans: "Ronaldo", value: "A" } },
    { question: "Which Dutch footballer was voted 'European Player of the Century' in 1999?", firstAns: { ans: "Johan Cyruff", value: "A" }, nextAns: { ans: "Gary Lineker", value: "B" } },
    { question: "Who won the 2010 Ballon d'Or ?", firstAns: { ans: "Cristiano Ronaldo", value: "B" }, nextAns: { ans: "Lionel Messi", value: "A" } },
    { question: "Golf player Vijay Singh belongs to which country?", firstAns: { ans: "India", value: "B" }, nextAns: { ans: "Fiji", value: "A" } },
    { question: "What is Usain Bolt’s 100m world record time?", firstAns: { ans: "9.48 seconds", value: "B" }, nextAns: { ans: "9.58 seconds", value: "A" } },
    { question: "Which England footballer was famously never given a yellow card?", firstAns: { ans: "Wayne Rooney", value: "B" }, nextAns: { ans: "Gary Lineker", value: "A" } },
    { question: "How many times has Roger Federer won the French Open?", firstAns: { ans: "once", value: "A" }, nextAns: { ans: "thrice", value: "B" } },
    { question: "The LA Lakers and New York Knicks play which sport?", firstAns: { ans: "cricket", value: "B" }, nextAns: { ans: "Basketball", value: "A" } },
    { question: "Which country won the first FIFA World Cup held in 1930?", firstAns: { ans: "Brazil", value: "B" }, nextAns: { ans: "Uruguay", value: "A" } },
    { question: "How many pockets does a snooker table have?", firstAns: { ans: "6", value: "A" }, nextAns: { ans: "8", value: "B" } },
    { question: "In which sport do neither the participants nor the spectators know the score until the end?", firstAns: { ans: "Water polo", value: "B" }, nextAns: { ans: "Boxing", value: "A" } },
    { question: "What is James Naismith best known for in Basketball?", firstAns: { ans: "Winning most medals", value: "B" }, nextAns: { ans: "Inventing the game", value: "A" } },
    { question: "The duration of a game of Polo is measured in what?", firstAns: { ans: "Water polo", value: "B" }, nextAns: { ans: "Boxing", value: "A" } },
    { question: "Which sport cannot be played left handed since 1975, for safety reasons?", firstAns: { ans: "Cycling", value: "B" }, nextAns: { ans: "Polo", value: "A" } },
    { question: "How many balls are there on a snooker table at the start of a game?", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "22", value: "A" } },
    { question: "What is Tiger Woods' first name?", firstAns: { ans: "Franklin", value: "B" }, nextAns: { ans: "Eldrick", value: "A" } },
    { question: "How many hurdles are there in the men's 110m race?", firstAns: { ans: "11", value: "B" }, nextAns: { ans: "10", value: "A" } },
    { question: "Who are the owners of Liverpool FC?", firstAns: { ans: "Standard Chartered", value: "B" }, nextAns: { ans: "Fenway Sports Group", value: "A" } },
    { question: "Who has won more Grand Slams, Roger Federer or Serena Williams?", firstAns: { ans: "Roger Federer", value: "B" }, nextAns: { ans: "Serena Williams", value: "A" } },
    { question: "The Pittsburgh Penguins play which sport?", firstAns: { ans: "Baseball", value: "B" }, nextAns: { ans: "Ice Hockey", value: "A" } },
    { question: "A penalty in football is taken how many yards away from the goal?", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "12", value: "A" } },
    { question: "How many minutes is a rugby match?", firstAns: { ans: "90", value: "B" }, nextAns: { ans: "80", value: "A" } },
    { question: "How matches did Mohammed Ali lose in his career?", firstAns: { ans: "None", value: "B" }, nextAns: { ans: "One", value: "A" } },
    { question: "What is the name of the Barcelona football stadium?", firstAns: { ans: "Camp Nou", value: "A" }, nextAns: { ans: "Santiago", value: "B" } },
    { question: "In which sport can you win the Davis Cup?", firstAns: { ans: "Formula One", value: "B" }, nextAns: { ans: "Tennis", value: "A" } },  
    { question: "Which sport has the highest ratio of officials to players?", firstAns: { ans: "Volleyball", value: "B" }, nextAns: { ans: "Tennis", value: "A" } },
    { question: "What was Hitler's reaction to Jesse Owens winning four gold medals in the Olympics?", firstAns: { ans: "Amazed", value: "B" }, nextAns: { ans: "Irritated", value: "A" } },
    { question: "Which is always the first event of the Men's Decathlon?", firstAns: { ans: "200 metres", value: "B" }, nextAns: { ans: "100 metres", value: "A" } },
    { question: "What is South America's equivalent of the Champions League called?", firstAns: { ans: "Copa America", value: "B" }, nextAns: { ans: "Copa Libertadores", value: "A" } },
    
    { question: "Which ball is worth the most points in English snooker?", firstAns: { ans: "The blue ball", value: "B" }, nextAns: { ans: "The black ball", value: "A" } },
    { question: "Where were the Olympic Games held in 1996 ?", firstAns: { ans: "Atlanta", value: "A" }, nextAns: { ans: "Cairo", value: "B" } },
    { question: "In which country were the first Olympic Games held?", firstAns: { ans: "Germany", value: "B" }, nextAns: { ans: "Greece", value: "A" } },
    { question: "Against which team did Maradona score the famous 'hand of god' goal?", firstAns: { ans: "England", value: "A" }, nextAns: { ans: "France", value: "B" } },
    { question: "Who has scored the most Premier League hat-tricks?", firstAns: { ans: "Sergio Aguero", value: "A" }, nextAns: { ans: "Alan Shearer", value: "B" } },
    { question: "Who is the Premier League’s all-time top scorer?", firstAns: { ans: "Sergio Aguero", value: "B" }, nextAns: { ans: "Alan Shearer", value: "A" } },
    { question: "Which team did David Beckham not play for?", firstAns: { ans: "Inter Milan", value: "A" }, nextAns: { ans: "AC Milan", value: "B" } },
    { question: "Who did Cristiano Ronaldo make his Premier League debut against in 2003?", firstAns: { ans: "QPR", value: "B" }, nextAns: { ans: "Bolton Wanderers", value: "A" } },
    
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * sportArr.length);
    //console.log(generator);
    questionsArr.push(sportArr[generator]);
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
    score = answerArr.length * 25;
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