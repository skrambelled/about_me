'use strict';
console.log("JS loaded");

function set_greeting() {
  var userName = prompt("What is your name?");
  if (typeof(userName) === "string")
    // capitalize the first letter of their name, we wont make any other assumptions about their name
    // example from: https://dzone.com/articles/capitalize-first-letter-string-javascript
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    document.getElementById("greeting").innerHTML = "Hello " + userName + ", its great to meet you!";
}

// Using a single function to validate a yes/no answer for each prompted question
function valid_prompt(message) {
  var visible;
  
  visible = prompt(message, "yes");

  if(visible.charAt(0).toLowerCase() === "y")
    visible = "yes";
  else
    visible = "no";

  console.log("question: "+message, "answer: " +visible);
  alert("You answered "+visible)
  return visible;
}

function set_visibility(thing, spam_about_thing) {
  var prompt_spam;
  var visible;

  switch(thing) {
    case "bio":
      prompt_spam = "my biography";
      break;
    case "edu":
      prompt_spam = "my education";
      break;
    case "job":
      prompt_spam = "my work experience";
      break;
    case "goal":
      prompt_spam = "my goals";
      break;
    case "hobby":
      prompt_spam = "my hobbies";
      break;

    default:
      console.log("Illegal action: set_visibility("+thing+")");
      return;
  }
  
  visible = valid_prompt("Would you like to know about "+prompt_spam+" (yes/no)?", "yes");
  if(visible === "yes")
    document.getElementById(thing).innerHTML = document.getElementById(thing).innerHTML + "<br>" + spam_about_thing;
}