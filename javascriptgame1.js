//for page 1

function clearAll() {
const riddleContainer = document.querySelector('.riddleContent');
const jokeContainer = document.querySelector('.jokeContent');

riddleContainer.innerHTML='';
jokeContainer.innerHTML='';

}



function showJoke() {

    console.log('Joke button clicked');

const randomJokeText = getRandomData("jokes");

  const jokeContainer = document.querySelector(".jokeContent");
  const newJoke = document.createElement("p");
  newJoke.textContent = randomJokeText;

  clearAll();

  jokeContainer.appendChild(newJoke);

}


function showRiddle() {
    console.log('Riddle button clicked');
    
  
    const randomRiddleText = getRandomData("riddles");
  
    const riddleContainer = document.querySelector(".riddleContent");
    const newRiddleText = document.createElement("p");
    const newRiddleAnswer = document.createElement("p");

  newRiddleText.textContent = randomRiddleText.question;
  newRiddleAnswer.textContent = "- " + randomRiddleText.answer;
  newRiddleAnswer.setAttribute("id", "riddleAnswer");

  clearAll();

  newRiddleAnswer.hidden = true;

  riddleContainer.appendChild(newRiddleText);
  riddleContainer.appendChild(newRiddleAnswer);
  
}


function revealAnswer() {
    console.log('Reveal button clicked');

    
  const riddleContent = document.querySelector(".riddleContent");
  const riddle = riddleContent.querySelector("p");
  const riddleAnswer = document.querySelector("#riddleAnswer");

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("THE ANSWER IS BEING DISPLAYED, SILLY! :) ");
  } else {
    alert("OOPS! YOU NEED TO HAVE A RIDDLE FIRST!");
  }
}



function getRandomData(type) {
  return data[type][rn(data[type].length)];
} 


// Sourced from: http://www.devtopics.com/best-programming-jokes/

const jokes = [
    "This statement",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    "The generation of random numbers is too important to be left to chance.",
    "Debugging: Removing the needles from the haystack.",
    "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
    "There are two ways to write error-free programs; only the third one works.",
    "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  ];

  // Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
    {
      question:
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
      answer: "An echo",
    },
    {
      question:
        "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
      answer: "A Candle",
    },
    {
      question:
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
      answer: "A Map",
    },
    {
      question:
        "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
      answer: 'The letter "R"',
    },
    {
      question:
        "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
      answer: "All the people were married",
    },
    {
      question:
        "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
      answer: "Heroine",
    },
  ];

  function rn(len) {
    return Math.floor(Math.random() * len);
  }

  const data = {
    jokes,
    riddles,
  };