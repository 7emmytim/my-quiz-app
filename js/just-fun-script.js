// Generate and Upload Questions
let list = document.querySelector("ol");

let funnyArr =  
[
    { question: "Nomophobia is the fear of", firstAns: { ans: "Being without a phone", value: "A" }, nextAns: { ans: "money", value: "B" } },        { question: "Hippopotomonstrosesquippedaliophobia is the fear of", firstAns: { ans: "long words", value: "A" }, nextAns: { ans: "hippopotamus", value: "B" } },
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
    { question: "Pigs are some of the cleanest animals around", firstAns: { ans: "false", value: "B" }, nextAns: { ans: "true", value: "A" } },
    { question: "Humans and chimpanzees share roughly how much DNA?", firstAns: { ans: "60%", value: "B" }, nextAns: { ans: "98%", value: "A" } },
    { question: "What was Hitler's reaction to Jesse Owens winning four gold medals in the Olympics?", firstAns: { ans: "Amazed", value: "B" }, nextAns: { ans: "Irritated", value: "A" } },
    { question: "How many hearts do octopuses have?", firstAns: { ans: "Zero", value: "B" }, nextAns: { ans: "Three", value: "A" } },
    { question: "Who is the founder of Facebook ?", firstAns: { ans: "Mark Zuckerberg", value: "A" }, nextAns: { ans: "Murtala Muhammed", value: "B" } },
    { question: "When was the toothbrush invented?", firstAns: { ans: "1740", value: "B" }, nextAns: { ans: "1770", value: "A" } },
    { question: "Which is a character in the movie Harry Potter", firstAns: { ans: "Hagrid", value: "A" }, nextAns: { ans: "Jonas Will", value: "B" } },
    { question: "Which came first: colour or sound films?", firstAns: { ans: "Sound films", value: "B" }, nextAns: { ans: "Colour films", value: "A" } },
    { question: "What is 1999 in Roman numerals?", firstAns: { ans: "MCMXXCIX", value: "B" }, nextAns: { ans: "MCMXCIX", value: "A" } },
    { question: "How many hearts do octopuses have?", firstAns: { ans: "Zero", value: "B" }, nextAns: { ans: "Three", value: "A" } },
    { question: "Which of them does not have a twitter account?", firstAns: { ans: "Jeff Bezos", value: "B" }, nextAns: { ans: "Mark Zuckerberg", value: "A" } },
    
    { question: "According to the Hakuna Matata song from 'The Lion King' movie, what does the phrase Hakuna Matata mean?", firstAns: { ans: "all is well", value: "B" }, nextAns: { ans: "no troubles", value: "A" } },
    { question: "Hakuna Matata from 'The Lion King' movie is from which language", firstAns: { ans: "Swahili", value: "A" }, nextAns: { ans: "Hindi", value: "B" } },
    { question: "What is the name of the main character in the 'Home Alone' movie?", firstAns: { ans: "Harry", value: "B" }, nextAns: { ans: "Kevin", value: "A" } },
    { question: "Who directed Titanic, Avatar and The Terminator?", firstAns: { ans: "James Cameron", value: "A" }, nextAns: { ans: "Ridley Scott", value: "B" } },
    { question: "Most notations for piano music are in Italian, and that even includes the word 'piano' itself. What does 'piano' translate to in English?", firstAns: { ans: "keyboard", value: "B" }, nextAns: { ans: "soft", value: "A" } },
    
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * funnyArr.length);
    //console.log(generator);
    questionsArr.push(funnyArr[generator]);
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