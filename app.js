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
//add Question 6 and 7 with loop//

/*var mathQuestionsArr = [
  {question: 'How many dogs does Adam have?',
    answers: ['y','yes']},
  {question: 'How many stars are in the sky?',
  answers: ['y','yes']},
];*/

var correctAnswerCount = 0;
for (var i = 0; i < questionsArr.length; i++) {
  var result = processResponse(questionsArr[i].question, questionsArr[i].answers);
  alert(result);
  if (result === 'Correct!') {
    correctAnswerCount++;
  }
}

alert('You got ' + correctAnswerCount + ' answers right.');
