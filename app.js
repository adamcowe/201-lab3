'use strict';

//validation Function - Please excuse the function, I did theses labs out of order due to a missed class//

function processResponse(inQuestion, inAnswers) {
  var userAnswer = prompt(inQuestion).toLowerCase();
  for (var answerIndex = 0; answerIndex < inAnswers.length; answerIndex++) {
    if (userAnswer === inAnswers[answerIndex])
      return 'Correct!';
  }
  return 'Incorrect';
}

//Questions//

var questionsArr = [
  {question: 'Does Adam have pets?',
    answers: ['y','yes']},
  {question: 'Does Adam like staring at stars?',
    answers: ['y','yes']},
  {question: 'Does Adam like Blue Cheese Salad Dressing?',
    answers: ['y','yes']},
  {question: 'Does Adam hate his sham iPhone 6?',
    answers: ['n','no']},
  {question: 'Was Adam ever on a Talent Show?',
    answers: ['n','no']}
];

var correctAnswerCount = 0;
for (var i = 0; i < questionsArr.length; i++) {
  var result = processResponse(questionsArr[i].question, questionsArr[i].answers);
  alert(result);
  if (result === 'Correct!') {
    correctAnswerCount++;
  }
}

//add Question 6 and 7 with loop//

alert(correctAnswerCount + ' were correct. Thanks for playing!');

//I used Thom's model on this, he assisted during our team lab//

var adamPetlist = ['Francine','Fergus','Jeff'];
var petsGuessCount = 0;
var petsGuessMax = 3;
var petsAnswerCorrect = false;
var firstAlert = 'My pets are ' + adamPetlist;

while (petsGuessCount < petsGuessMax) {
  var petsGuess = prompt('Adam has three pets, can you guess any of their names?');
  petsGuessCount++;
  console.log('guess: ' + petsGuess);
  console.log('guess count: ' + petsGuessCount);
  for (var petsListIndex = 0; petsListIndex < adamPetlist.length; petsListIndex++) {
    if (petsGuess === adamPetlist[petsListIndex]) {
      petsAnswerCorrect = true;
      petsListIndex = petsListIndex.length;
      petsGuessCount = petsGuessMax;
      correctAnswerCount++;
    }
  }
}

if (petsAnswerCorrect) {
  alert('You got one! ' + firstAlert);
} else {
  alert('Better luck next time. ' + firstAlert);
}

//number game, Thom also assisted in our team lab...//
//...but not able to get the correct answer code to work consistently?//
//I was a able to debug, move the numAnswer var above the loop and it looks goog//

var guessCount = 0;
var guessMax = 9;
var numAnswer = Math.round((Math.random())*50);
while (guessCount < guessMax) {
  console.log(numAnswer);
  var numGuess = prompt('Please guess a number between 1 and 50');
  console.log('answer: ', numAnswer);
  if (numGuess > numAnswer) {
    alert('Pick a lower number.');
    guessCount++;
    //log guess count//
    console.log('current guess ' + numGuess);
    console.log('total guess count: ' + guessCount);
  } else if (numGuess < numAnswer) {
    alert('Pick a higher number.');
    guessCount++;
    console.log('current guess : ' + numGuess);
    console.log('total guess count: ' + guessCount);
    guessCount++;
    console.log('current guess: ' + numGuess);
    console.log('total guess count: ' + guessCount);
  } else {
    alert('Correct, you guessed it in ' + guessCount + ' tries.');
    console.log('current guess ' + numGuess);
    guessCount = 10;
    correctAnswerCount++;
  }
}
