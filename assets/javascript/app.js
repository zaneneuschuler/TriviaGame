let rightAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
let questionOne = newQuestion("What is the name of Beatmania IIDX 22?", "answerThree", "SPADA", "Happy Sky", "Pendual", "Distorted", "Pendual");
let questionTwo = newQuestion("What year did Sound Voltex BOOTH come out?", "answerTwo", "2010", "2012", "2013", "2011", "2012")
let questionThree = newQuestion("Who won the DDR KAC in 2017?", "answerThree", "FEFEMZ", "HO4-KETI", "iamchris4life", "Fungah", "iamchris4life");
let questionFour = newQuestion("What has always been the final song in IIDX SP Kaiden?", "answerOne", "Mei", "Beach Side Bunny", "Scorpion Fire", "Himiko", "Mei");
let questionFive = newQuestion("Whose alias is 'Cuvelia'?", "answerFour", "TAG", "L.E.D.", "猫又Master", "dj TAKA", "djTAKA");
let questionSix = newQuestion("Which artist is behind 'Breaking the Ground'?", "answerTwo", "RoughSketch", "Art of Fighters", "L.E.D.", "Gucci Mane", "Art of Fighters");
let questionSeven = newQuestion("Which Smile.DK song is most known for being in Dance Dance Revolution?", "answerOne", "Butterfly", "Koko Soko", "Boys", "Doki Doki", "Butterfly");
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
var timeoutTimer;
var timer = 10;
var index=0;
var gameArea = $('.game-area');


$(document).ready(function () {
    let playButton = $('.play-game');
    playButton.on("click", function () {
        playButton.css("display", "none");
        startQuestion(questions[index]);

    })



}); //end of ready function

function startQuestion(question) {
    let gameArea = $('.game-area');
    gameArea.empty();
    gameArea.html(`
   <div class='row'><h1>${question.triviaQuestion}</h1></div>
   <div class='row justify-content-center'><button class='btn questionButton buttonz' answer='answerOne'>${question.answerOne}</button></div>
   <div class='row justify-content-center'><button class='btn questionButton buttonz'answer='answerTwo'>${question.answerTwo}</button></div>
   <div class='row justify-content-center'><button class='btn questionButton buttonz'answer='answerThree'>${question.answerThree}</button></div>
   <div class='row justify-content-center'><button class='btn questionButton buttonz'answer='answerFour'>${question.answerFour}</button></div>
   <p class='lead timeLeft'></p>
   `);
    startTimer();

    $('.questionButton').on("click", function(){
        stop();
      let buttonPressed=  $(this).attr('answer');
      console.log(buttonPressed);
      console.log(question.answer);
      answered(buttonPressed, question.answer, question);

    });



}

function answered(guess, correct, question) {
    index++;
    if (guess === correct) {
        let gameArea = $('.game-area');
        rightAnswers++;
        gameArea.html('');
        gameArea.html(`
        <div class='row justify-content-center'><h1>Correct!</h1></div>
        <div class='row justify-content-center'><h2>The right answer was: ${question.answerText}</h2></div>
        `);
        
    } else {
        let gameArea = $('.game-area');
        wrongAnswers++;
        gameArea.empty();
        gameArea.html(`
        <div class='row justify-content-center'><h1>Wrong!</h1></div>
        <div class='row justify-content-center'><h2>The right answer was: ${question.answerText}</h2></div>
        `);  
    }
    if (index !== questions.length){
        setTimeout(() => {
            startQuestion(questions[index]);
        }, 5000);
        
    }else{
        setTimeout(() => {
            endGame();
        }, 5000);
    }

    
}

function startTimer() {
    clearInterval(timeoutTimer);
    timeoutTimer = setInterval(decrement, 1000);

}

function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #show-number tag.
    $(".timeLeft").text(`Time remaining: ${timer} seconds.`);


    //  Once number hits zero...
    if (timer === 0) {

        //  ...run the stop function.
        stop();
        noAnswer(questions[index]);

    }
}

//  The stop function
function stop() {
 clearInterval(timeoutTimer);
 timer = 10;

}

function endGame() {
    index=0;
    let gameArea = $('.game-area');
    gameArea.empty();
    gameArea.html(`
    <div class='row justify-content-center'><h1>Game over!</h1></div>
    <div class='row justify-content-center'><h2>Correct answers: ${rightAnswers}</h2></div>
    <div class='row justify-content-center'><h2>Wrong answers: ${wrongAnswers}</h2></div>
    <div class='row justify-content-center'><h2>Unanswered: ${unanswered}</h2></div>
    <div class='row justify-content-center'><button class="play-game btn buttonz">Play again?</button></div>
    `);
    let playButton = $('.play-game');
    playButton.on("click", function () {
        playButton.css("display", "none");
        startQuestion(questions[index]);

    });
    
}
function noAnswer(question) {
    unanswered++;
    index++;
            let gameArea = $('.game-area');
            gameArea.empty();
            gameArea.html(`
        <div class='row justify-content-center'><h1>You didn't answer!</h1></div>
        <div class='row justify-content-center'><h2>The right answer was: ${question.answerText}</h2></div>
        `);
    


    if (index !== questions.length) {
        setTimeout(() => {
            startQuestion(questions[index]);
        }, 5000);

    } else {
        setTimeout(() => {
            endGame();
        }, 5000);
    }
    
}




function newQuestion(quest, ans, one, two, three, four, text) {
    var temp = new Object();
    temp.triviaQuestion = quest;
    temp.answer = ans;
    temp.answerOne = one;
    temp.answerTwo = two;
    temp.answerThree = three;
    temp.answerFour = four;
    temp.answerText = text;
    return temp;

}