const quizObj = [
    {
        question: "What is the purpose of MongoDB in the MERN stack?",
        options: ["To handle client-side routing", "To manage the application's state", "To store and manage the application's data", "To render dynamic user interfaces"],
        answer: 2 // Index of correct option
    },
    {
        question: "Which component of the MERN stack is used for building server-side applications and APIs?",
        options: ["React.js", "MongoDB", "Node.js", "Express.js"],
        answer: 3
    },
    {
        question: "Which JavaScript runtime environment is commonly used in the backend of MERN applications?",
        options: ["Chromium", "V8", "SpiderMonkey", "Node.js"],
        answer: 3
    },
    {
        question: "What is the role of React.js in the MERN stack?",
        options: ["To handle server-side rendering", "To manage databases", "To create interactive user interfaces", "To handle HTTP requests"],
        answer: 2
    },
    {
        question: "Which of the following statements is true about Express.js in the MERN stack?",
        options: ["It is a front-end framework", "It provides a server-side rendering engine", "It facilitates the creation of RESTful APIs", "It is used for database management"],
        answer: 2
    },
    {
        question: "What is the purpose of JSX in React.js?",
        options: ["To define routes for client-side navigation", "To provide a query language for MongoDB", "To define component structure using HTML-like syntax", "To manage server-side routing"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a valid data type in MongoDB?",
        options: ["Number", "String", "Boolean", "Array"],
        answer: 3
    },
    {
        question: "Which Node.js module is commonly used for handling asynchronous operations?",
        options: ["fs (File System)", "http", "path", "async"],
        answer: 3
    },
    {
        question: "In the MERN stack, what is typically used for handling client-side routing?",
        options: ["Express.js", "React Router", "Node.js", "MongoDB"],
        answer: 1
    },
    {
        question: "What is the purpose of the package.json file in a Node.js project?",
        options: ["To define project dependencies and scripts", "To store client-side configuration settings", "To define server-side routing rules", "To specify MongoDB database credentials"],
        answer: 0
    }
];


let startPage = document.querySelector('#start-page')
let startBtn = document.querySelector('#start-btn');
let quizContainer = document.querySelector('#quiz-container')
let reachedQuestion = document.querySelector('#reached-Q');
let totalQuestions = document.querySelector('#total-Q');
let showScore = document.querySelector('#score'); 
let question = document.querySelector('#question');
let optionList = document.querySelectorAll('#options li');
let nextBtn = document.querySelector('#next-btn');
let showResultScore = document.querySelector('#result-score')
let resultPage = document.querySelector('#result-page')
let reStartBtn = document.querySelector('#restart-btn')




//--------------- Varibles ------------------

let numberOfCurrentQuestion = 0;
let currentQuiz = ''

let ansByUser = ''; // this will store the answer selected by user
let optionCLicked = false; //this will check user had selected any option or not.
let score = 0;// counting score




//there are three pages in app so initialy we are showing only start page
quizContainer.style.display = 'none'
resultPage.style.display = 'none';






// ------------------- functions ---------------

// this function is created to update quiz after clicking on next button.
function updateQuiz(){  

currentQuiz = quizObj[numberOfCurrentQuestion];// according to current question number we are updating the quiz

question.innerHTML = currentQuiz.question;// printing question
totalQuestions.innerHTML = quizObj.length; // printing total questions

if(numberOfCurrentQuestion < quizObj.length){
    reachedQuestion.innerHTML = numberOfCurrentQuestion + 1;//numberOfCurrentQuestion is array index so we are adding 1 to it to show question count  start from 1  in quiz app(UI part)
}

// printing options in UI part
optionList[0].innerHTML = currentQuiz.options[0];
optionList[1].innerHTML = currentQuiz.options[1];
optionList[2].innerHTML = currentQuiz.options[2];
optionList[3].innerHTML = currentQuiz.options[3];

// when quiz will update at a time remove the green bg and red bg from options.
optionList.forEach(option => {
    option.style = 'background-color: transparent;';
}) 

// do optionClicked to false 
optionCLicked = false

}    

//  Initail Call 
updateQuiz();


// show answer
function showAnswer(){
// console.log("show answer");
let currentAnswer = currentQuiz.answer;

// if answer is same and option is clicked by the user then do green bg to option do red bg to correct option.
if(currentQuiz.answer == ansByUser && !optionCLicked){
optionList[currentAnswer].style = 'background-color: #3bff89;';//green
checkAns()
}
  // if answer is not same then do red bg to option clicked by user and do green bg to correct option.
else if(currentAnswer !== ansByUser && !optionCLicked){
optionList[ansByUser].style = 'background-color:#ff3b4f '//red
optionList[currentAnswer].style = 'background-color: #3bff89;'//green
}
}



// update score function
function scoreUpdate(){
score++;
}

// Print score in Quiz page and result page
function printScore(){
showScore.innerHTML = score + '/' + quizObj.length;
showResultScore.innerHTML = score + '/' + quizObj.length;
}

// check the answer given by user if it is correct the increase score and print it.
function checkAns(){
if(ansByUser == currentQuiz.answer){
    scoreUpdate()
    printScore()
}

}






// ---------------------- Event Listeners ----------------------


// In starter page if user click on start Btn then hide starter page and show quiz page.
startBtn.addEventListener('click',() => {
quizContainer.style.display = '';
startPage.style.display = 'none';
})

// event listner on next Btn
nextBtn.addEventListener('click',() => {
// if option clicked then increase count of number of current question.
if(optionCLicked){
    numberOfCurrentQuestion++;
}
// if count of current question is less then total quiz then only update the quiz.
if(numberOfCurrentQuestion < quizObj.length){
     updateQuiz();
}
// if user is clicking next Btn after last question then show result page.
if(numberOfCurrentQuestion ==  quizObj.length){
quizContainer.style.display = 'none'
resultPage.style.display = ''
}

})

// event listner on all options
optionList.forEach((option, index) => {
option.addEventListener('click',() => {
    // console.log(index)
    ansByUser = index;

  // if the optionClicke is true and user had given the answer then do bg gray on answered option by user.
    if(!optionCLicked && !ansByUser){
        option.style = 'background-color: #a5a5a5;'; // gray color
    }
    showAnswer();// calling to the showAnswer function to highlight the correct option.
    optionCLicked = true;
 })
})

// event Listner on restart Btn
reStartBtn.addEventListener('click',() => {
// if user click on restart Btn then hide result page.
resultPage.style.display = 'none';

// reset score and current question
numberOfCurrentQuestion = 0;
score = 0;

// update quiz and print initial score.
updateQuiz();
printScore()

// show quiz container.
quizContainer.style.display = ''; 
})
