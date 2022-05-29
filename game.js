const questionn = document.getElementById('questionn');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
// const scoreText = document.getElementById('score');
// const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
// let score = 0;
let questionCounter = 0;
let availableQuesions = {};

let questions = {};

let questionIndex=0;
let userAnswer=0;
let correctAnswer=0;
let selectedElement;
let containerArray=[];

fetch('questionNew.json')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        const myTimeout = setTimeout(startGame, 1000);
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
// const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;


startGame = () => {
    // questionCounter = 0;
    // score = 0;
    // availableQuesions = [...questions];
    availableQuesions = {...questions};
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    // if (Object.keys(availableQuesions).length === 0 || questionCounter >= MAX_QUESTIONS) {
    if (questionCounter >= MAX_QUESTIONS) {
    // localStorage.setItem('mostRecentScore', score);
        // //go to the end page
        return window.location.assign('/index.html');
    }
    questionIndex++;
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // //Update the progress bar
    // progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    // const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    // const questionIndex=1;
    // let objNumber='data'+ questionIndex;
    // let str=String(objNumber);

    // currentQuestion = availableQuesions.str;//is an object
    let currentQuestion={};
    switch(questionIndex) {
        case 1:
            // console.log(availableQuesions.data1.question);
            
            questionn.innerText = availableQuesions.data1.question;//is an object
            currentQuestion=availableQuesions.data1;
            correctAnswer=availableQuesions.data1.answer;
            break;
        case 2:
            questionn.innerText = availableQuesions.data2.question;//is an object
            currentQuestion=availableQuesions.data2;
            correctAnswer=availableQuesions.data2.answer;
            break;
          case 3:
            questionn.innerText = availableQuesions.data3.question;//is an object
            currentQuestion=availableQuesions.data3;
            correctAnswer=availableQuesions.data3.answer;
            break;
          case 4:
            questionn.innerText = availableQuesions.data4.question;//is an object
            currentQuestion=availableQuesions.data4;
            correctAnswer=availableQuesions.data4.answer;
            break;
            case 5:
                questionn.innerText = availableQuesions.data5.question;//is an object
                currentQuestion=availableQuesions.data5;
                correctAnswer=availableQuesions.data5.answer;
                break;
            default:
          // code block
      }
    // currentQuestion = availableQuesions.data1.question;//is an object
    // console.log(currentQuestion);
    // questionn.innerText = currentQuestion.question;

    

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion.options[number-1];
        // choice.innerText = currentQuestion.options[number-1];
    });

    // availableQuesions.splice(questionIndex, 1);
    // acceptingAnswers = true;
};

// choices.forEach((choice) => {
    //     choice.addEventListener('click', (e) => {
        //         if (!acceptingAnswers) return;
        
        //         acceptingAnswers = false;
        //         const selectedChoice = e.target;
        //         console.log(selectedChoice);
        //         const selectedAnswer = selectedChoice.dataset['number'];
        let flag=0;
        
        choices.forEach((choice)=>{
            choice.addEventListener('click',(e)=>{
                // if (!acceptingAnswers) return;
                
                // acceptingAnswers = false;
                let selectedChoice = e.target;
                selectedElement=selectedChoice;
                userAnswer = selectedChoice.dataset['number'];
                console.log(userAnswer);
                
        containerArray=Array.from(document.getElementsByClassName('choice-container'));

        
        let itemSelected;
    for(let i=0;i<containerArray.length;i++){
    let item=containerArray[i];
    
    if(item.classList.contains("user-answer")){
        itemSelected=item;
        flag=1;
        break;
    }
   

}

if(flag==1){
    // itemSelected.classList.remove("user-answer");
    selectedChoice.parentElement.classList.add("user-answer");


}
else{
    selectedChoice.parentElement.classList.add("user-answer");
    flag=1;
}

        

    })

})

let submitButton=document.getElementById("submitButton")
submitButton.addEventListener('click',(e)=>{
    if(userAnswer==0) alert('Please select an option!')

    else if(userAnswer===correctAnswer){
        selectedElement.parentElement.classList.add("green");

        setTimeout(() => {
            selectedElement.parentElement.classList.remove("user-answer");
            selectedElement.parentElement.classList.remove("green");
            userAnswer=0;
            correctAnswer=0;
            getNewQuestion();
            
        }, 2000);

    }

    else{
        selectedElement.parentElement.classList.add("red");
        let correctElement=containerArray[correctAnswer-1];
        correctElement.classList.add("green")

        setTimeout(() => {
        selectedElement.parentElement.classList.remove("user-answer");
        selectedElement.parentElement.classList.remove("red");        
        correctElement.classList.remove("green");
        userAnswer=0;
        correctAnswer=0;
        getNewQuestion();

        },2000);

    }




  
          



})











// containerArray.forEach((item)=>{
    
//     if(item.classList.contains("selected")){
//         let itemSelected=item;
//         break;

//     }
   
//     // let element=item;
//     // let check=item.classList.contains("selected");

// })

//         const classToApply =
//             selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//         // if (classToApply === 'correct') {
//         //     incrementScore(CORRECT_BONUS);
//         // }

//         let choiceArray=document.getElementsByClassName('choice-container');

//         choice

//         selectedChoice.parentElement.classList.add(classToApply);

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply);
//             getNewQuestion();
//         }, 1000);
//     });
// });

// // incrementScore = (num) => {
// //     score += num;
// //     scoreText.innerText = score;
// // };
