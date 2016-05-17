var gameOver = {
    state:"gameOver"
};

var victory = {
  state: "finished"
};

function endGame() {
  $('#content').css("background-color", "yellow");
}

function drawVictory() {
  $('#content').css("background-color", "blue");
}

function draw(gameState,weather) {
  
  console.log((gameState[weather]));
}

// OBJECT LEVEL 1
var level1 = {
  image: "url",
  cold:  {
    question:"Is Danny a robot?",
    answerA:"Yes",
    answerB:"No"
    },
  mild:  {
    question:"Is this correct 'var string = 'hello';?",
    answerA:"Yes",
    answerB:"No"
    },
  warm:  { //variable name based on temp
    question:"CSS stands for:",
    answerA:"Cascading Style Sheets",
    answerB:"Color & Style Sheets"
    },
  hot:  {
    question:"The latest version of JavaScript is:",
    answerA:"ES6",
    answerB:"ES7"
    },
  level: "1",
  text: "some text",
  choice1: "level2",
  choice2: "gameOver"
};
// OBJECT LEVEL 2
var level2 = {
  image: "url",
  cold:  {     //variable name based on temp
    question:"Who created JavaScript?",
    answerA:"Brendan Eich",
    answerB:"Linus Torvalds"
    },
  mild:  {
    question:"Is a string a primitive value?",
    answerA:"Yes",
    answerB:"No"
    },
  warm:  {
    question:"How do you create a new file in the command line?",
    answerA:"touch file.js",
    answerB:"new file.js"
    },
  hot:  {
    question:"What is the index number at the beginning of an array?",
    answerA:"0",
    answerB:"1"
    },
  level: "2",
  text: "some text",
  choice1: "level3",
  choice2: "gameOver"
};
// OBJECT LEVEL 3
var level3 = {
  image: "url",
  cold:  {
    question:"How do you start using flexbox?",
    answerA:"display:block",
    answerB:"display:flex"
    },
  mild:  {
    question:"Is jQuery a framework or a library?",
    answerA:"A framework",
    answerB:"A library"
    },
  warm:  {   //variable name based on temp
    question:"What does this do <i>?",
    answerA:"Indent",
    answerB:"Italicize"
    },
  hot:  {
    question:"Will .shift() remove the first element of the array or the last?",
    answerA:"Last",
    answerB:"First"
    },
  level: "3",
  text: "some text",
  choice1: "gameOver",
  choice2: "level4"
};

// OBJECT LEVEL 4
var level4 = {
  image: "url",
  cold:  {
    question:"Who created Java?",
    answerA:"Oracle",
    answerB:"Sun Microsystems"
    },
  mild:  {
    question:"Which way is the correct way to select a div in jQuery?",
    answerA:"$(div)",
    answerB:"$('div')"
    },
  warm:  {   //variable name based on temp
    question:"Using two frameworks at once is recommended.",
    answerA:"True",
    answerB:"False"
    },
  hot:  {
    question:"Sass is compiled into CSS.",
    answerA:"True",
    answerB:"False"
    },
  level: "4",
  text: "some text",
  choice1: "gameOver",
  choice2: "level5"
};

// OBJECT LEVEL 5
var level5 = {
  image: "url",
  cold:  {
    question:"Can you use .split() on an array?",
    answerA:"No",
    answerB:"Yes"
    },
  mild:  {
    question:"Can you use .map() on a string?",
    answerA:"No",
    answerB:"Yes"
    },
  warm:  {   //variable name based on temp
    question:"Who is the father of Computer Science?",
    answerA:"Alan Turing",
    answerB:"Bill Gates"
    },
  hot:  {
    question:"Who is Donald Knuth?",
    answerA:"A Computer Scientist",
    answerB:"An Astronomer"
    },
  level: "5",
  text: "some text",
  choice1: "level6",
  choice2: "gameOver"
};

// OBJECT LEVEL 6
var level6 = {
  image: "url",
  cold:  {
    question:"Convert this binary number '10'.",
    answerA:"10",
    answerB:"2"
    },
  mild:  {
    question:"What does SSL stand for?",
    answerA:"Second Secure Layer",
    answerB:"Secure Sockets Layer"
    },
  warm:  {   //variable name based on temp
    question:"Which stack are we learning?",
    answerA:"LAMP stack",
    answerB:"MEAN stack"
    },
  hot:  {
    question:"What is the name of Apple's programming language?",
    answerA:"Golang",
    answerB:"Swift"
    },
  level: "6",
  text: "some text",
  choice1: "gameOver",
  choice2: "level7"
};

// OBJECT LEVEL 7
var level7 = {
  image: "url",
  cold:  {
    question:"Is JavaScript strongly typed?",
    answerA:"Yes",
    answerB:"No"
    },
  mild:  {
    question:"Does Promise.all() return a promise?",
    answerA:"No",
    answerB:"Yes"
    },
  warm:  {   //variable name based on temp
    question:"How do you turn a javascript object to a JSON string?",
    answerA:"JSON.parse",
    answerB:"JSON.stringify"
    },
  hot:  {
    question:"What will this evaluate to? 'false === 0'",
    answerA:"True",
    answerB:"False"
    },
  level: "7",
  text: "some text",
  choice1: "gameOver",
  choice2: "level8"
};

// OBJECT LEVEL 8
var level8 = {
  image: "url",
  cold:  {
    question:"What language is Atom written in?",
    answerA:"JavaScript",
    answerB:"C++"
    },
  mild:  {
    question:"Which HTTP status code should you expect if there is a server error?",
    answerA:"5XX",
    answerB:"4XX"
    },
  warm:  {   //variable name based on temp
    question:"How mane columns is a grid made up of in Boostrap?",
    answerA:"12",
    answerB:"8"
    },
  hot:  {
    question:"What is the <ARIA>?",
    answerA:"Accessible Rich Internet Applications",
    answerB:"Javascript Function"
    },
  level: "8",
  text: "some text",
  choice1: "victory",
  choice2: "gameOver"
};
