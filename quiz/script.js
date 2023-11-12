var questions=[
    {
        question:"Which country has won the most Cricket World Cups?",
        answers:[
            { text:"Australia" , correct:true },
            { text:"India" , correct:false },
            { text:"West Indies" , correct:false },
            { text:"Pakistan" , correct:false }
        ]
    },
    {
        question:"Who holds the record for the highest individual score in a single World Cup innings?",
        answers:[
            { text:"Ricky Ponting" , correct:false },
            { text:"Chris Gayle" , correct:false },
            { text:"Sachin Tendulkar" , correct:true },
            { text:"Martin Guptill" , correct:false }
        ]
    },
    {
        question:"Which player has the most centuries in Cricket World Cup history? ",
        answers:[
            { text:"Ricky Ponting" , correct:false },
            { text:"Rohit Sharma" , correct:true },
            { text:"Sachin Tendulkar" , correct:false },
            { text:"Virat Kohli" , correct:false }
        ]
    },
    {
        question:"Who captained India to victory in the 1983 Cricket World Cup? ",
        answers:[
            { text:"Kapil Dev" , correct:true },
            { text:"Sunil Gavaskar" , correct:false },
            { text:"Ravi Shastri" , correct:false },
            { text:"Mohinder Amarnath" , correct:false }
        ]
    }
];
var questionNumber=document.querySelector("#Question");
var answerButtons=document.querySelector("#answer-buttons");
var nextQuestion=document.querySelector("#nextQuestion");

var currentQuestionNumber=0;
var score=0;

function startQuiz(){
    currentQuestionNumber=0;
    score=0;
    nextQuestion.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    reset();
    var currentQuestion=questions[currentQuestionNumber];
    var questionNo=currentQuestionNumber+1;
    var current=currentQuestion.question;
    questionNumber.innerHTML=questionNo + ". " +current;
    currentQuestion.answers.forEach(function(answer){
        var button=document.createElement("button");
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.innerHTML=answer.text;
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",choosecinc);
    });   
}
function reset(){
    nextQuestion.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function choosecinc(e){
    var selectedBtn=e.target;
    var isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(function(button){
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextQuestion.style.display="block";
}
nextQuestion.addEventListener("click",function(){
    if(currentQuestionNumber < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
function handleNextButton(){
    currentQuestionNumber++;
    if(currentQuestionNumber < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
function showScore(){
    reset();
    questionNumber.innerHTML=`Your score is ${score} out of ${questions.length}!`;
    nextQuestion.innerHTML="Play again";
    nextQuestion.style.display="block";
}
startQuiz();