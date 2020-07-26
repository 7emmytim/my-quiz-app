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
    { question: "Spot the odd one: 3, 5, 11, 14, 17, 21", firstAns: { ans: "14", value: "A" }, nextAns: { ans: "21", value: "B" } },
    { question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:", firstAns: { ans: "18", value: "B" }, nextAns: { ans: "16", value: "A" } },
    { question: "If selling price is doubled, the profit triples. Find the profit percent.", firstAns: { ans: "100", value: "A" }, nextAns: { ans: "75.3", value: "B" } }, 
    { question: "If 5^a = 3125, then the value of 5^(a - 3) is:", firstAns: { ans: "125", value: "B" }, nextAns: { ans: "25", value: "A" } },
    { question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.", firstAns: { ans: "4s", value: "A" }, nextAns: { ans: "7", value: "B" } },
    { question: "Look at this series: F2, __, D8, C16, B32, ... What number should fill the blank?", firstAns: { ans: "E4", value: "A" }, nextAns: { ans: "E3", value: "B" } },
    { question: "Look at this series: V, VIII, XI, XIV, __, XX, ... What number should fill the blank?", firstAns: { ans: "XV", value: "B" }, nextAns: { ans: "XVII", value: "A" } },
    { question: "Look at this series: J14, L16, __, P20, R22, ... What number should fill the blank?", firstAns: { ans: "N18", value: "A" }, nextAns: { ans: "M18", value: "B" } }, 
    { question: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?", firstAns: { ans: "2", value: "B" }, nextAns: { ans: "7.2", value: "A" } },
    { question: "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:", firstAns: { ans: "50km", value: "A" }, nextAns: { ans: "56km", value: "B" } },
    { question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?", firstAns: { ans: "15 days", value: "A" }, nextAns: { ans: "12 days", value: "B" } },
    { question: "A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:", firstAns: { ans: "18", value: "21 days" }, nextAns: { ans: "22.5 days", value: "A" } },
    { question: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?", firstAns: { ans: "756", value: "A" }, nextAns: { ans: "758", value: "B" } }, 
    { question: "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?", firstAns: { ans: "360", value: "B" }, nextAns: { ans: "720", value: "A" } },
    { question: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:", firstAns: { ans: "3:2", value: "A" }, nextAns: { ans: "2:3", value: "B" } },
    { question: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:", firstAns: { ans: "245m", value: "A" }, nextAns: { ans: "49m", value: "B" } },
    { question: "The angle of elevation of a ladder leaning against a wall is 60 degrees and the foot of the ladder is 4.6 m away from the wall. The length of the ladder is:", firstAns: { ans: "4.6m", value: "B" }, nextAns: { ans: "9.2m", value: "A" } },
    { question: "From a point P on a level ground, the angle of elevation of the top tower is 30°. If the tower is 100 m high, the distance of point P from the foot of the tower is:", firstAns: { ans: "173m", value: "A" }, nextAns: { ans: "176m", value: "B" } }, 
    { question: "What decimal of an hour is a second ?", firstAns: { ans: "0.00036", value: "B" }, nextAns: { ans: "0.00027", value: "A" } },
    { question: "If 2994 ÷ 14.5 = 172, then 29.94 ÷ 1.45 = ?", firstAns: { ans: "17.2", value: "A" }, nextAns: { ans: "172", value: "B" } },
    { question: "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:", firstAns: { ans: "4 : 5", value: "A" }, nextAns: { ans: "5 : 4", value: "B" } },
    { question: "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is:", firstAns: { ans: "120 litres", value: "B" }, nextAns: { ans: "60 litres", value: "A" } },
    { question: "A and B take part in 100 m race. A runs at 5 kmph. A gives B a start off 8 m and still beats him by 8 seconds. The speed of B is:", firstAns: { ans: "4.14 kmph", value: "A" }, nextAns: { ans: "4.4 kmph", value: "B" } }, 
    { question: "In a 500 m race, the ratio of the speeds of two contestants A and B is 3 : 4. A has a start of 140 m. Then, A wins by:", firstAns: { ans: "24m", value: "B" }, nextAns: { ans: "20m", value: "A" } },
    { question: "In a 100 m race, A beats B by 10 m and C by 13 m. In a race of 180 m, B will beat C by:", firstAns: { ans: "6m", value: "A" }, nextAns: { ans: "5.4m", value: "B" } },
    
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