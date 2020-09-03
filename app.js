'using strict'

function main(){

	function askStringQuestion(questionName, correctAnswer, userInput){
		if (correctAnswer.includes(userInput)){
			alert('You are correct!');
			return(1);
		} else {
			alert('Incorrect!');
			return(0);
		}
	}

	function askIntegerQuestion(questionName, correctAnswer, userInput){
		if (userInput == correctAnswer){
			alert('You are correct!');
			return(1);
		} else if (userInput < correctAnswer){
			alert('Too low!');
			return(0);
		} else {
			alert('Too high');
			return(0);
		}
	}

	function askQuestion(questionName, correctAnswer, guesses, possibleAnswer){

		var isCorrect = 0;
		var newString = '';

		if (typeof(possibleAnswer) == 'object'){
			for (var k = 0; k < possibleAnswer.length-1; k++){
				newString += possibleAnswer[k] + ', ';
			}
			newString += possibleAnswer[possibleAnswer.length-1] + '.';
		} else {
			newString += possibleAnswer;
		}

		for (var i = 0; i < guesses && !isCorrect; i++){			
			var userInput = prompt(questionName + '\n\n' + newString).toLowerCase();
			
  	  if (typeof(correctAnswer) == 'number') {
  	  	userInput = parseInt(userInput);
   		 	if (typeof(userInput) == 'number'){
   		 		isCorrect = askIntegerQuestion(questionName, correctAnswer, userInput);
   		 	} else {
   		 		alert('Please guess with integers!');
   		 		i--;
   		 	} 
	    } else {
    		isCorrect = askStringQuestion(questionName, correctAnswer, userInput);
    	}
		}
		return(isCorrect);
	}

	var user_name = (prompt("Hello, what is your name?") || "Someone");
	var score = 0;
  // for the purpose of using a loop later we'll assign a random correct correctAnswer,
  // cause i do love food and my favorite type changes sometimes!
  var food = ["crab", "sushi", "lobster", "curry",
  "pizza", "lasagna", "malai kofta",
  "vegetable korma", "pupusas", "somosas",
  "spinach dip", "chips", "burgers", "cheesecake",
  "cookies", "baked potatoes", "bahn mi"];

  var questions = [ 

    // [question, correctAnswer, guesses, 'possible correctAnswer list']

    ['Is my name Mark?', ['y', 'yes'], 1, 'yes or no'], 
    ['Was I born in Oklahoma?', ['n', 'no'], 1, 'yes or no'],
    ['Did I grow up in the Seattle area?', ['y', 'yes'], 1, 'yes or no'],
    ['Do I like playing PUBG?', ['y', 'yes'], 1, 'yes or no'],
    ['Am I a turtle?', ['n', 'no'], 1, 'yes or no'],
    ["Pick a number between 1 and 10?", Math.ceil(Math.random() * 10), 4, '1 through 10'],
    ["What is my favorite food?", food[Math.floor(Math.random() * food.length)], 6, food]
    ]

    for(var i = 0; i<questions.length; i++) {
    var questionName = questions[i][0]; // question posed to user
    var correctAnswer   = questions[i][1]; // correct correctAnswer
    var guesses  = questions[i][2]; // number of guesses allowed
    var possibleAnswer = questions[i][3]; // the intended list of correctAnswers

    score += askQuestion(questionName, correctAnswer, guesses, possibleAnswer);
  }


	alert("You've completed the game! Your score is "+score+" out of "+questions.length+" ("+Math.floor((100 * score / questions.length) + .5)+"%)");

}

main();
