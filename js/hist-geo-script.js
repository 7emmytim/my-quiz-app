// Generate and Upload Questions
let list = document.querySelector("ol");

let histArr = 
[
    { question: "Which is the longest river in the world ?", firstAns: { ans: "River Niger", value: "B" }, nextAns: { ans: "River Nile", value: "A" } },
    { question: "Which is the smallest country in the world ?", firstAns: { ans: "Vatican City", value: "A" }, nextAns: { ans: "Chile", value: "B" } },
    { question: "Which country does not have any of the seven wonders of the world ?", firstAns: { ans: "South Korea", value: "A" }, nextAns: { ans: "Mexico", value: "B" } },
    { question: "The world's first heart transplant was performed by Dr. Christiaan Banard in which country", firstAns: { ans: "South Africa", value: "A" }, nextAns: { ans: "Germany", value: "B" } },
    { question: "Which planet is known as the Red Planet?", firstAns: { ans: "Mercury", value: "B" }, nextAns: { ans: "Mars", value: "A" } },
    { question: "I'm standing right in front of Eiffel Tower, which country am I?", firstAns: { ans: "France", value: "A" }, nextAns: { ans: "Italy", value: "B" } },
    { question: "What is the Largest fresh water lake of the world?", firstAns: { ans: "Lake Laogai", value: "B" }, nextAns: { ans: "Lake Superior", value: "A" } },
    { question: "Which star is at the centre of our Solar System?", firstAns: { ans: "The Sun", value: "A" }, nextAns: { ans: "Sirius", value: "B" } },
    { question: "How many regional divisions does Africa have?", firstAns: { ans: "7", value: "B" }, nextAns: { ans: "6", value: "A" } },
    { question: "Which state in Nigeria has the smallest number of LGAs?", firstAns: { ans: "Gombe", value: "B" }, nextAns: { ans: "Abuja", value: "A" } },
    { question: "When did the first world war take place?", firstAns: { ans: "1914-1919", value: "A" }, nextAns: { ans: "1939-1945", value: "B" } },
    { question: "When did the Nigerian civil war begin?", firstAns: { ans: "1976", value: "B" }, nextAns: { ans: "1967", value: "A" } },
    { question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of", firstAns: { ans: "Africa", value: "A" }, nextAns: { ans: "Australia", value: "B" } },
    { question: "What invention caused many deaths while testing it?", firstAns: { ans: "Parachute", value: "A" }, nextAns: { ans: "Dynamite", value: "B" } },
    { question: "In what decade was the telephone invented?", firstAns: { ans: "1860s", value: "B" }, nextAns: { ans: "1870s", value: "A" } },
    { question: "First China War was fought between", firstAns: { ans: "China and America", value: "B" }, nextAns: { ans: "China and Britain", value: "A" } },
    { question: "India has largest deposits of ____ in the world.", firstAns: { ans: "copper", value: "B" }, nextAns: { ans: "mica", value: "A" } },
    { question: "On which planet is the tallest mountain in the Solar System?", firstAns: { ans: "Venus", value: "B" }, nextAns: { ans: "Mars", value: "A" } },
    { question: "On the moon, what colour is the sky?", firstAns: { ans: "Red", value: "B" }, nextAns: { ans: "Black", value: "A" } },
    { question: "What was the Wright Brother's first successful aeroplane called?", firstAns: { ans: "Birdie", value: "B" }, nextAns: { ans: "Flyer", value: "A" } },
    { question: "Which country had, until 2011, a flag with only a solid colour?", firstAns: { ans: "Algeria", value: "B" }, nextAns: { ans: "Libya", value: "A" } },
    { question: "Why was the capital of Spain moved to Madrid?", firstAns: { ans: "It's location at centre of the country", value: "A" }, nextAns: { ans: "Civil war", value: "B" } },
    { question: "What's the former name of Bangladesh?", firstAns: { ans: "Nothern Pakistan", value: "B" }, nextAns: { ans: "East Pakistan", value: "A" } },
    { question: "What kind of animal is a basilisk?", firstAns: { ans: "A Snake", value: "B" }, nextAns: { ans: "A Lizard", value: "A" } },
    { question: "Sun versus Water, which is denser?", firstAns: { ans: "Water", value: "B" }, nextAns: { ans: "Sun", value: "A" } },
    { question: "Which country use Western European Time?", firstAns: { ans: "Italy", value: "B" }, nextAns: { ans: "Portugal", value: "A" } },
    { question: "Which country occupies practically one half of the land of South America?", firstAns: { ans: "Mexico", value: "B" }, nextAns: { ans: "Brazil", value: "A" } },
    { question: "How many time zones are there in China?", firstAns: { ans: "Two", value: "B" }, nextAns: { ans: "One", value: "A" } },
    { question: "Which is the second largest country in Europe (by area) after Russia?", firstAns: { ans: "France", value: "B" }, nextAns: { ans: "Ukraine", value: "A" } },
    { question: "What does GPS stand for?", firstAns: { ans: "Global Pointing System", value: "B" }, nextAns: { ans: "Global Positioning System", value: "A" } },
    { question: "About how many galaxies are there in the universe?", firstAns: { ans: "25 billion", value: "A" }, nextAns: { ans: "25 million", value: "B" } },
    { question: "Which of these is a galaxy?", firstAns: { ans: "Jupiter", value: "B" }, nextAns: { ans: "Milky Way", value: "A" } },
    { question: "Which of these contain large quantities of ice?", firstAns: { ans: "asteroids", value: "B" }, nextAns: { ans: "comets", value: "A" } },
    
    { question: "What lies above the troposphere?", firstAns: { ans: "Ionosphere", value: "B" }, nextAns: { ans: "stratosphere", value: "A" } },
    
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * histArr.length);
    //console.log(generator);
    questionsArr.push(histArr[generator]);
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