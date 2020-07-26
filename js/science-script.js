// Generate and Upload Questions
let list = document.querySelector("ol");

let scienceArr = 
[
    { question: "The richest man in the world founded", firstAns: { ans: "Microsoft", value: "B" }, nextAns: { ans: "Amazon", value: "A" } },
    { question: "Odometer is to mileage as compass is to", firstAns: { ans: "speed", value: "B" }, nextAns: { ans: "direction", value: "A" } },
    { question: "Entomology is the science that studies", firstAns: { ans: "The origin and history of technical and scientific terms", value: "B" }, nextAns: { ans: "Insects", value: "A" } },
    { question: "Which of the following is used in pencils?", firstAns: { ans: "Charcoal", value: "B" }, nextAns: { ans: "Graphite", value: "A" } },
    { question: "Most soluble in water is", firstAns: { ans: "common salt", value: "B" }, nextAns: { ans: "sugar", value: "A" } },
    { question: "The reading of a barometer going down is an indication of", firstAns: { ans: "snow", value: "B" }, nextAns: { ans: "rainfall", value: "A" } },
    { question: "Fathom is the unit of", firstAns: { ans: "distance", value: "B" }, nextAns: { ans: "depth", value: "A" } },
    { question: "Exposure to sunlight helps a person improve his health because", firstAns: { ans: "the ultraviolet rays convert skin oil into Vitamin D", value: "A" }, nextAns: { ans: "the infrared light kills bacteria in the body", value: "B" } },
    { question: "Friction can be reduced by changing from", firstAns: { ans: "rolling to sliding", value: "B" }, nextAns: { ans: "sliding to rolling", value: "A" } },
    { question: "One kilometre is equal to how many miles?", firstAns: { ans: "0.5", value: "B" }, nextAns: { ans: "0.62", value: "A" } },
    { question: "kilohertz is a unit which measures", firstAns: { ans: "frequencies", value: "A" }, nextAns: { ans: "voltage", value: "B" } },
    { question: "Who is the English physicist responsible for the 'Big Bang Theory'?", firstAns: { ans: "George Gamow", value: "A" }, nextAns: { ans: "Albert Einstein", value: "B" } },
    { question: "Who discovered that all objects, heavy or light, fall at the same rate (with the same acceleration)?", firstAns: { ans: "Galileo Galilei", value: "A" }, nextAns: { ans: "Isaac Newton", value: "B" } },
    { question: "On which planet is the tallest mountain in the Solar System?", firstAns: { ans: "Venus", value: "B" }, nextAns: { ans: "Mars", value: "A" } },
    { question: "What is the name of a single dot on a computer monitor screen?", firstAns: { ans: "Pixel", value: "A" }, nextAns: { ans: "Matrix", value: "B" } },
    { question: "What was the Wright Brother's first successful aeroplane called?", firstAns: { ans: "Birdie", value: "B" }, nextAns: { ans: "Flyer", value: "A" } },
    { question: "On the moon, what colour is the sky?", firstAns: { ans: "Red", value: "B" }, nextAns: { ans: "Black", value: "A" } },
    { question: "What did Tim Berners-Lee create?", firstAns: { ans: "The First Browser", value: "B" }, nextAns: { ans: "The World Wide Web", value: "A" } },
    { question: "Tuberculosis is caused by", firstAns: { ans: "Virus", value: "B" }, nextAns: { ans: "Bacteria", value: "A" } },
    { question: "A method of growing plants without soil", firstAns: { ans: "Hydroponics", value: "A" }, nextAns: { ans: "Hydrolysis", value: "B" } },
    { question: "BASIC, Perl, and Python are types of what?", firstAns: { ans: "ISPs", value: "B" }, nextAns: { ans: "Computer languages", value: "A" } },
    { question: "What shape is the DNA molecule?", firstAns: { ans: "Single helix", value: "B" }, nextAns: { ans: "A double helix", value: "A" } },
    { question: "What does DVD stand for?", firstAns: { ans: "Digital Volatile Disc", value: "B" }, nextAns: { ans: "Digital Versatile Disc", value: "A" } },
    { question: "What does the FM in radio stations stand for?", firstAns: { ans: "Chukkas", value: "A" }, nextAns: { ans: "Chakras", value: "B" } },
    { question: "How many teeth does an adult human have?", firstAns: { ans: "36", value: "B" }, nextAns: { ans: "32", value: "A" } },
    { question: "What kind of animal is a basilisk?", firstAns: { ans: "A Snake", value: "B" }, nextAns: { ans: "A Lizard", value: "A" } },
    { question: "Aquaculture is the correct term for what?", firstAns: { ans: "Fish farming", value: "A" }, nextAns: { ans: "Cattle rearing", value: "B" } },
    { question: "Which branch of physics deals with sound?", firstAns: { ans: "Harmonics", value: "B" }, nextAns: { ans: "Acoustics", value: "A" } },
    { question: "There are three types of nuclear radiation. What are they called?", firstAns: { ans: "Alpha, Beta, and delta", value: "B" }, nextAns: { ans: "Alpha, Beta, and Gamma", value: "A" } },
    { question: "What sort of substances are adrenaline, cortisone, insulin, and oestrogens?", firstAns: { ans: "Neurons", value: "B" }, nextAns: { ans: "Hormones", value: "A" } },
    { question: "Which is the lightest gas?", firstAns: { ans: "Helium", value: "B" }, nextAns: { ans: "Hydrogen", value: "A" } },
    { question: "In which animal species does the male get pregnant?", firstAns: { ans: "Sea urchin", value: "B" }, nextAns: { ans: "Sea Horse", value: "A" } },
    { question: "What is the SI unit of electrical current?", firstAns: { ans: "Hertz", value: "B" }, nextAns: { ans: "Ampere", value: "A" } },
    { question: "What does IBM stand for?", firstAns: { ans: "International Business Machines", value: "A" }, nextAns: { ans: "International Business Management", value: "B" } },
    { question: "Which two planets do not have moons?", firstAns: { ans: "Mars and Jupitar", value: "B" }, nextAns: { ans: "Mercury and Venus", value: "A" } },
    { question: "Sun versus Water, which is denser?", firstAns: { ans: "Water", value: "B" }, nextAns: { ans: "Sun", value: "A" } },
    { question: "Which chemical element gets it's name from a greek word meaning 'stranger'?", firstAns: { ans: "Boron", value: "B" }, nextAns: { ans: "Xenon", value: "A" } },
    { question: "Which computer operating system has a penguin as its logo?", firstAns: { ans: "Ubuntu", value: "B" }, nextAns: { ans: "Linux", value: "A" } },
    { question: "What is the study of mushrooms called?", firstAns: { ans: "Muscology", value: "B" }, nextAns: { ans: "Mycology", value: "A" } },
    { question: "In electronics, what does DC stand for?", firstAns: { ans: "Direct Charge", value: "B" }, nextAns: { ans: "Direct Current", value: "A" } },
    { question: "How many hearts do octopuses have?", firstAns: { ans: "Zero", value: "B" }, nextAns: { ans: "Three", value: "A" } },
    { question: "About how many galaxies are there in the universe?", firstAns: { ans: "25 billion", value: "A" }, nextAns: { ans: "25 million", value: "B" } },
    { question: "Which of these is a galaxy?", firstAns: { ans: "Jupiter", value: "B" }, nextAns: { ans: "Milky Way", value: "A" } },
    { question: "Which of these contain large quantities of ice?", firstAns: { ans: "asteroids", value: "B" }, nextAns: { ans: "comets", value: "A" } },
    { question: "Which is not a scientific optical instrument?", firstAns: { ans: "endoscope", value: "B" }, nextAns: { ans: "periscope", value: "A" } },
    { question: "Which of them does not have a twitter account?", firstAns: { ans: "Jeff Bezos", value: "B" }, nextAns: { ans: "Mark Zuckerberg", value: "A" } },

    { question: "On the periodic table, what symbol stands for silver?", firstAns: { ans: "Fe", value: "B" }, nextAns: { ans: "Ag", value: "A" } },
    { question: "What is a material that will not carry an electrical charge called?", firstAns: { ans: "Insulator", value: "A" }, nextAns: { ans: "Capacitor", value: "B" } },
    { question: "How many vertebrae does the average human possess?", firstAns: { ans: "23", value: "B" }, nextAns: { ans: "33", value: "A" } },
    { question: "What name is given for the number of protons found in the nucleus of an atom?", firstAns: { ans: "Atomic Number", value: "A" }, nextAns: { ans: "Mass Number", value: "B" } },
    { question: "At what temperature are Celsius and Fahrenheit equal?", firstAns: { ans: "273", value: "B" }, nextAns: { ans: "-40", value: "A" } },
    { question: "Which famous British physicist wrote A Brief History of Time?", firstAns: { ans: "Stephen Hawkings", value: "A" }, nextAns: { ans: "George Gamow", value: "B" } },
    { question: "What is the most abundant gas in the Earth’s atmosphere?", firstAns: { ans: "Oxygen", value: "B" }, nextAns: { ans: "Nitrogen", value: "A" } },
    { question: "What is the SI unit of temperature?", firstAns: { ans: "Kelvin", value: "A" }, nextAns: { ans: "Degree Kelvin", value: "B" } },
    { question: "What do astronauts have in outer space?", firstAns: { ans: "weight", value: "B" }, nextAns: { ans: "mass", value: "A" } },
    { question: "What is the SI unit of force?", firstAns: { ans: "Newton", value: "A" }, nextAns: { ans: "Joules", value: "B" } },
    { question: "What lies above the troposphere?", firstAns: { ans: "Ionosphere", value: "B" }, nextAns: { ans: "stratosphere", value: "A" } },
    { question: "What is the chemical symbol for Ozone?", firstAns: { ans: "O3", value: "A" }, nextAns: { ans: "O2", value: "B" } },
    { question: "Whats the the name for the bending of light as it passes from one medium to another?", firstAns: { ans: "Diffraction", value: "B" }, nextAns: { ans: "Refraction", value: "A" } },
    { question: "Evaporation is changing from a liquid to gas. What is changing from a solid to a gas called?", firstAns: { ans: "Sublimation", value: "A" }, nextAns: { ans: "Crystallization", value: "B" } },
    { question: "Litmus paper turns what colour when in contact with an acid?", firstAns: { ans: "pink", value: "B" }, nextAns: { ans: "red", value: "A" } },
    { question: "What is calcium carbonate normally known as?", firstAns: { ans: "chalk", value: "A" }, nextAns: { ans: "charcoal", value: "B" } },
    { question: "What is the name given to rain with a particularly low pH?", firstAns: { ans: "Alkaline Rain", value: "B" }, nextAns: { ans: "Acid Rain", value: "A" } },
];

//Generate four random arrays to use
let questionsArr = [];
for ( let i = 0; i < 4; i++ ) {
    let generator = Math.floor(Math.random() * scienceArr.length);
    //console.log(generator);
    questionsArr.push(scienceArr[generator]);
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