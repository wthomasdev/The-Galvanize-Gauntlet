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
    answerA:"True",
    answerB:"False"
    },
  mild:  {
    question:"Is this correct 'var string: 'hello';?",
    answerA:"Yes",
    answerB:"No"
    },
  warm:  { //variable name based on temp
    question:"CSS stands for Color & Style Sheets",
    answerA:"True",
    answerB:"False"
    },
  hot:  {
    question:"The latest version of JavaScript is ES7",
    answerA:"True",
    answerB:"False"
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
    answerA:"new file.js",
    answerB:"touch file.js"
    },
  hot:  {
    question:"What is the index number at the beginning of an array?",
    answerA:"1",
    answerB:"0"
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
    answerA:"display:flex",
    answerB:"display:block"
    },
  mild:  {
    question:"Is jQuery a framework or a library?",
    answerA:"A library",
    answerB:"A framework"
    },
  warm:  {   //variable name based on temp
    question:"What does this do <i>?",
    answerA:"Italicize",
    answerB:"Indent"
    },
  hot:  {
    question:"Will .shift() remove the first element of the array or the last?",
    answerA:"Last",
    answerB:"First"
    },
  level: "3",
  text: "some text",
  choice1: "level4",
  choice2: "gameOver"
};

// OBJECT LEVEL 4
var level4 = {
  image: "url",
  cold:  {
    question:"Who created Java?",
    answerA:"Sun Microsystems",
    answerB:"Oracle"
    },
  mild:  {
    question:"Which way is the correct way to select a div in jQuery?",
    answerA:"$('div')",
    answerB:"$(div)"
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
  choice1: "level5",
  choice2: "gameOver"
};

// OBJECT LEVEL 5
var level5 = {
  image: "url",
  cold:  {
    question:"Can you use .split() on an array?",
    answerA:"Yes",
    answerB:"No"
    },
  mild:  {
    question:"Can you use .map() on a string?",
    answerA:"Yes",
    answerB:"No"
    },
  warm:  {   //variable name based on temp
    question:"Who is the father of Computer Science?",
    answerA:"Bill Gates",
    answerB:"Alan Turing"
    },
  hot:  {
    question:"Who is Donald Knuth?",
    answerA:"An Astronomer",
    answerB:"A Computer Scientist"
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
    answerA:"2",
    answerB:"10"
    },
  mild:  {
    question:"What does SSL stand for?",
    answerA:"Secure Sockets Layer",
    answerB:"Second Secure Layer"
    },
  warm:  {   //variable name based on temp
    question:"Which stack are we learning?",
    answerA:"MEAN stack",
    answerB:"LAMP stack"
    },
  hot:  {
    question:"What is the name of Apple's programming language?",
    answerA:"Swift",
    answerB:"Golang"
    },
  level: "6",
  text: "some text",
  choice1: "level7",
  choice2: "gameOver"
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
  choice1: "level8",
  choice2: "gameOver"
};

// OBJECT LEVEL 8
var level8 = {
  image: "url",
  cold:  {
    question:"What language is Atom written in?",
    answerA:"C++",
    answerB:"JavaScript"
    },
  mild:  {
    question:"Which HTTP status code should you expect if there is a server error?",
    answerA:"4XX",
    answerB:"5XX"
    },
  warm:  {   //variable name based on temp
    question:"How mane columns is a grid made up of in Boostrap?",
    answerA:"8",
    answerB:"12"
    },
  hot:  {
    question:"What is the <ARIA>?",
    answerA:"Javascript Function",
    answerB:"Accessible Rich Internet Applications"
    },
  level: "8",
  text: "some text",
  choice1: "victory",
  choice2: "gameOver"
};
