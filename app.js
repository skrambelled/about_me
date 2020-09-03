'using strict'

var user_name = (prompt("Hello, what is your name?") || "Someone");
var score = 0;
// for the purpose of using a loop later we'll assign a random correct answer,
// cause i do love food and my favorite type changes sometimes!
var food = ["crab", "sushi", "lobster", "curry",
            "pizza", "lasagna", "malai kofta",
            "vegetable korma", "pupusas", "somosas",
            "spinach dip", "chips", "burgers", "cheesecake",
            "cookies", "baked potatoes", "bahn mi"];

var questions = [
  // [ question, answer, guesses 
  ['Is my name Mark?', 'y', 1], 
  ['Was I born in Oklahoma?', 'n', 1],
  ['Did I grow up in the Seattle area?', 'y', 1],
  ['Do I like playing PUBG?', 'y', 1],
  ['Am I a turtle?', 'n', 1],
  ["Pick a number between 1 and 10?", Math.floor(Math.random() * 10), 4],
  ["What is my favorite seafood?", food[Math.floor(Math.random() * food.length)], 6]
]

for(var i = 0; i<questions.length; i++) {
  var question = questions[i][0]; // question posed to user
  var answer   = questions[i][1]; // correct answer
  var guesses  = questions[i][2]; // number of guesses allowed

  while(guesses) {
    guess = prompt(question);

    console.log("q: "+question);
    console.log("a: "+answer);
    console.log("g: "+guess);

    // for string answers 
    if(typeof(answer) == "string") {
      // for yes/no questions, try to validate the user input
      if(answer === 'y' || answer === 'n') {
        if(typeof(guess) === 'string') {
          guess = guess.charAt(0).toLowerCase();
        } else {
          alert("Please answer with 'yes' or 'no'.");
          continue; // give them a do-over if they didn't put a string in
        }
        
        if(guess === answer) {
          alert("Yep, you got it right!");
          score++;
          break; // they dont need any more attempts
        } else {
          guesses--;
          alert("Incorrect.");
        }
      } else { // is a string answer, but not y or n, so must be the food question
        if(guess === answer) {
          alert("You are totally right! I love "+answer+"!");
          score++;
          break; // we don't need more attempts
        } else {
          guesses--;
  
          
          var spam = null;
          for(var j = 0; j<food.length; j++) {
            if(!spam) // first item
              spam = food[j];
            else if(j === food.length -1) // last item
              spam = spam + " and " + food[j];
            else // middle items
              spam = spam + ", " + food[j];
          }
  
          if(guesses)
            alert("Nope, "+guess+" is not my favorite food today. You have "+guesses+" guess"+(guesses===1?"":"es")+" left. Here's a hint, I enjoy: "+spam+".");
          else
            alert("Darn, you are out of guesses. My favorite food today is "+answer);
          continue;
        }
      }
    }

    // for number guessing game, format input into a number
    else if(typeof(answer) === 'number') {
      if(!(guess = parseInt(guess)) || guess < 1 || guess > 10) {
        alert("Please answer with a number between 1 and 10.");
        continue; // mulligan
      }

      if(guess < answer) {
        guesses--;
        alert("Too low. You have "+guesses+" guess"+(guesses===1?"":"es")+" remaining.");
        continue;
      } else if(guess > answer) {
        guesses--;
        alert("Too high. You have "+guesses+" guess"+(guesses===1?"":"es")+" remaining.");
        continue;
      } else {
        alert("You guessed it! "+answer+" is correct.");
        score++;
        break; // they don't need more attempts
      }
    }

  }
}

alert("You've completed the game! Your score is "+score+" out of "+questions.length+" ("+Math.floor((100 * score / questions.length) + .5)+"%)");