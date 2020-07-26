// Generate and Upload Questions
let list = document.querySelector("ol");

let mathsArr = 
[
    { question: "12, 11, 13, 12, 14, 13, … What number should come next?", firstAns: { ans: "15", value: "A" }, nextAns: { ans: "14", value: "B" } },
    { question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:", firstAns: { ans: "42, 33", value: "A" }, nextAns: { ans: "39, 30", value: "B" } },
    { question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:", firstAns: { ans: "600", value: "B" }, nextAns: { ans: "700", value: "A" } },
    { question: "If one-third of one-fourth of a number is 15, then three-tenth of that number is:", firstAns: { ans: "45", value: "B" }, nextAns: { ans: "54", value: "A" } },
    { question: "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:", firstAns: { ans: "11", value: "B" }, nextAns: { ans: "15", value: "A" } },
    { question: "Which one of the following is not a prime number?", firstAns: { ans: "91", value: "A" }, nextAns: { ans: "71", value: "B" } },
    { question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?", firstAns: { ans: "5 years", value: "B" }, nextAns: { ans: "4 years", value: "A" } },
    { question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?", firstAns: { ans: "10 years", value: "A" }, nextAns: { ans: "8 years", value: "B" } },
    { question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?", firstAns: { ans: "8", value: "B" }, nextAns: { ans: "(1/8)", value: "A" } },
    { question: "If a - b = 3 and a^2 + b^2 = 29, find the value of ab.", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "10", value: "A" } }, 
    { question: "What is 1999 in Roman numerals?", firstAns: { ans: "MCMXXCIX", value: "B" }, nextAns: { ans: "MCMXCIX", value: "A" } },
    { question: "What is the angle between the hands of a clock at 1 o'clock?", firstAns: { ans: "30 degrees", value: "A" }, nextAns: { ans: "15 degrees", value: "B" } },
    
    
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * mathsArr.length);
    //console.log(generator);
    questionsArr.push(mathsArr[generator]);
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