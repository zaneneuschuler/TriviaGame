let rightAnswers = 0;
let wrongAnswers = 0;

$(document).ready(function(){



});//end of ready function



















function newQuestion(quest, ans, one, two, three, four) {
   var temp = new Object();
   temp.triviaQuestion = quest;
   temp.answer = ans;
   temp.answerOne = one;
   temp.answerTwo = two;
   temp.answerThree = three;
   temp.answerFour = four;
   return temp;

}