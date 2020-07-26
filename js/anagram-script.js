// Generate and Upload Questions
let list = document.querySelector("ol");

let anagramArr = [
        { question: "What is the smallest country in the world ?", firstAns: { ans: "Vatican City", value: "A" }, nextAns: { ans: "Chile", value: "B" } },
        { question: "12, 11, 13, 12, 14, 13, … What number should come next?", firstAns: { ans: "15", value: "A" }, nextAns: { ans: "14", value: "B" } },
        { question: "Who is the founder of Facebook ?", firstAns: { ans: "Mark Zuckerberg", value: "A" }, nextAns: { ans: "Murtala Muhammed", value: "B" } },
        { question: "What is the longest river in the world ?", firstAns: { ans: "River Niger", value: "B" }, nextAns: { ans: "River Nile", value: "A" } },
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * anagramArr.length);
    //console.log(generator);
    questionsArr.push(anagramArr[generator]);
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