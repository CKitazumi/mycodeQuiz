const questionEl = document.getElementById('questions');
const TextA = document.getElementById('textA');
const TextB = document.getElementById('textB');
const TextC = document.getElementById('textC');
const TextD = document.getElementById('textD');
const results = document.getElementById('.results');
const answerEls = document.querySelectorAll('.chosen');

let currentQuestion = 0;
let score = 0;

const codeQuiz = [
    {
        question: "Which HTML element would you use to link your JavaScript file?",
        a: '<link>',
        b: '<section>',
        c: '<header>',
        d: '<script>',
        correct: 'd',
    },
    {
        question: "What is concatenation?",
        a: 'Combining two strings together.',
        b: 'Converting text into numbers.',
        c: 'Linking your HTML to your JavaScript.',
        d: 'Separating two strings apart.',
        correct: 'a',
    },
    {
        question: "In JavaScript, what method would you use to add to the end of an array?",
        a: 'pop()',
        b: 'push()',
        c: 'unshift()',
        d: 'shift()',
        correct: 'b',
    },
    {
        question: 'Arrays in JavaScript can be used to store ________.', 
        a: 'numbers and strings',
        b: 'other arrays',
        c: 'booleans',
        d: 'all of the above',
        correct: 'd',
    },
    {
        question: 'The condition in an if / else statement is enclosed with what?', 
        a: 'quotes',
        b: 'curly brackets',
        c: 'parenthesis',
        d: 'square brackets',
        correct: 'b',
    },

];

playGame();

function playGame() {
    const currentQuizData = codeQuiz[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    TextA.innerText = currentQuizData.a;
    TextB.innerText = currentQuizData.b;
    TextC.innerText = currentQuizData.c;
    TextD.innerText = currentQuizData.d;
    unChosen();
}

function getSelected() {
    
    let selected = undefined;

    answerEls.forEach((choice) => {
        if(choice.checked) {
            selected = choice.id;
        }
    });
    return selected; 
}

function unChosen() {
    answerEls.forEach((selected) => {
        selected.checked = false;
    });
}

function text() {
    var x = document.querySelector(".styleSquare");
    var xEl = getComputedStyle(x)
    if (xEl.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
   document.getElementById("hope").style.display = "none";
}


let timer = document.getElementById("timer")
let timeLeft = 50;

let setTimer = setInterval(function() {
    timer.textContent = "Time Left: " + timeLeft + "s"
    timeLeft -= 1;
}, 1000)

subBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer)
    if (answer) {
        if (answer === codeQuiz[currentQuestion].correct) {
            console.log('You got it right')
            score++;
        } else {
            timeLeft -= 5
            console.log(timeLeft)
            console.log('You got it wrong')
        }
    }
    currentQuestion++;
        if (currentQuestion < codeQuiz.length) {
            playGame();
        if (timeLeft === 0) {
            scoreText()
        }
        } else {
            console.log('You finished the test')
            scoreText()
            clearInterval(setTimer)
        }
});  


function scoreText() {
    var y = document.querySelector(".score")
    var yEl = getComputedStyle(y)
    
    if (yEl.display === "none") {
        y.style.display = "block";
        highScore.innerHTML = `<p> You scored ${score}/${codeQuiz.length} <p>`
    } else {
        console.log('it did not work')
    }
}