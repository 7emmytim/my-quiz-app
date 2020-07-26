// Generate and Upload Questions
let list = document.querySelector("ol");

let currentAffairs = 
[
    { question: "Who is the current Chief of staff to the president of Nigeria?", firstAns: { ans: "Prof. Ibrahim Gambari", value: "A" }, nextAns: { ans: "Prof. Ibrahim Garba", value: "B" } },
    { question: "What is the capital of the United Arab Emirates?", firstAns: { ans: "Abu Dhabi", value: "A" }, nextAns: { ans: "Delhi", value: "B" } },
    { question: "Africa's first COVID-19 case was recorded in?", firstAns: { ans: "Egypt", value: "A" }, nextAns: { ans: "Ghana", value: "B" } },
    { question: "How many countries in Africa have their names starting with the letter 'A'?", firstAns: { ans: "4", value: "B" }, nextAns: { ans: "2", value: "A" } },
    { question: "What is the name of the first-ever female combat helicopter pilot?", firstAns: { ans: "Tolulope Agboola", value: "B" }, nextAns: { ans: "Tolulope Arotile", value: "A" } },
    { question: "Who is the current Emir of Kano?", firstAns: { ans: "Aminu Ado Bayero", value: "A" }, nextAns: { ans: "Amir Sa'ad Abubakar", value: "B" } },
    { question: "Which is the smallest country in the world?", firstAns: { ans: "Vatican City", value: "A" }, nextAns: { ans: "Chile", value: "B" } },
    { question: "The USA has the most stars of any flag with 50. What country's flag comes in second with 27?", firstAns: { ans: "Brazil", value: "A" }, nextAns: { ans: "Uzbekistan", value: "B" } },
    { question: "Which country does not have any of the seven wonders of the world?", firstAns: { ans: "South Korea", value: "A" }, nextAns: { ans: "Mexico", value: "B" } },
    { question: "The world's first heart transplant was performed by Dr. Christiaan Banard in which country", firstAns: { ans: "South Africa", value: "A" }, nextAns: { ans: "Germany", value: "B" } },    
    { question: "Which is part of the names of the Vice President of Nigeria?", firstAns: { ans: "Olayemisi", value: "B" }, nextAns: { ans: "Oluleke", value: "A" } },
    { question: "The richest man in the world founded", firstAns: { ans: "Microsoft", value: "B" }, nextAns: { ans: "Amazon", value: "A" } },
    { question: "United Nations celebrates World Chess Day globally on which date?", firstAns: { ans: "July 20", value: "A" }, nextAns: { ans: "July 19", value: "B" } },
    { question: "When is Mandela International Day celebrated?", firstAns: { ans: "July 19", value: "B" }, nextAns: { ans: "July 18", value: "A" } },
    { question: "Grand Central Terminal, Park Avenue, New York is the world's", firstAns: { ans: "largest railway station", value: "A" }, nextAns: { ans: "longest railway station", value: "B" } },
    { question: "Each year World Red Cross and Red Crescent Day is celebrated on", firstAns: { ans: "May 18", value: "B" }, nextAns: { ans: "May 8", value: "A" } },
    { question: "India has largest deposits of ____ in the world.", firstAns: { ans: "copper", value: "B" }, nextAns: { ans: "mica", value: "A" } },
    { question: "What is an Olympiad?", firstAns: { ans: "climax of an Olympics Event", value: "B" }, nextAns: { ans: "period between Olympic Games", value: "A" } },
    { question: "In the US military, what is a Purple Heart awarded for?", firstAns: { ans: "Killing a terrorist", value: "B" }, nextAns: { ans: "Wounded or killed in action", value: "A" } },
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
    
    { question: "Which is the only truly African language of the six official working languages of the African Union?", firstAns: { ans: "Swahili", value: "A" }, nextAns: { ans: "Arabic", value: "B" } },
    { question: "Which European country is not a member of the United Nations?", firstAns: { ans: "Andorra", value: "B" }, nextAns: { ans: "The Vatican", value: "A" } },
    
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * currentAffairs.length);
    //console.log(generator);
    questionsArr.push(currentAffairs[generator]);
}

// let findDuplicates = questionsArr.filter((a,i) => a[i] == a[i++] );
// console.log(findDuplicates);
//console.log(questionsArr);


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
            //console.log(answerArr);
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