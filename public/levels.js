var gameOver = {
    state: "gameOver"
};

var victory = {
    state: "finished"
};

function endGame() {
    $('#content').empty();
    $('#content').addClass('gameOver');
    $('#content').addClass('shake');
}

function drawVictory() {
    $('#content').empty();
    $('#content').addClass('win');
    $('#content').addClass('rotate');
}

function hardCore() {
    $('#welcomeScreen').remove();
    $('#whatMode').append("<h3 class='modeText'>The temperature at your location is cold so the game has been set to hardcore mode</h3>");
}

function extreme() {
    $('#welcomeScreen').remove();
    $('#whatMode').append("<h3 class='modeText'>The temperature at your location is mild so the game has been set to extreme mode</h3>");
}

function hell() {
    $('#welcomeScreen').remove();
    $('#whatMode').append("<h3 class='modeText'>The temperature at your location is warm so the game has been set to hell mode</h3>");
}

function traumatic() {
    $('#welcomeScreen').remove();
    $('#whatMode').append("<h3 class='modeText'>The temperature at your location is hot so the game has been set to nightmare mode</h3>");
}

function draw(gameState, weather) {
    $('.question').empty();
    $('.answerA').empty();
    $('.answerB').empty();
    $('#image').empty();
    $('#logo').empty();
    $('#logo').append('<p id="threaten">' + gameState.text + '</p>');
    $('#image').append('<img src=' + gameState.image + '>');
    $('.question').append(gameState[weather].question).fadeIn(2000);
    $('.answerA').append(gameState[weather].answerA);
    $('.answerB').append(gameState[weather].answerB);

}

// OBJECT LEVEL 1
var level1 = {
    image: "images/elana.png",
    cold: {
        question: "Is Danny a robot?",
        answerA: "Yes",
        answerB: "No"
    },
    mild: {
        question: "Is this correct:   var string = 'hello'; ?",
        answerA: "Yes",
        answerB: "No"
    },
    warm: { //variable name based on temp
        question: "CSS stands for:",
        answerA: "Cascading Style Sheets",
        answerB: "Color & Style Sheets"
    },
    hot: {
        question: "The latest version of JavaScript is:",
        answerA: "ES6",
        answerB: "ES7"
    },
    level: "1",
    text: "How dare you challenge me?",
    choice1: "level2",
    choice2: "gameOver"
};
// OBJECT LEVEL 2
var level2 = {
    image: "images/elana.png",
    cold: { //variable name based on temp
        question: "Who created JavaScript?",
        answerA: "Brendan Eich",
        answerB: "Linus Torvalds"
    },
    mild: {
        question: "Is a string a primitive value?",
        answerA: "Yes",
        answerB: "No"
    },
    warm: {
        question: "How do you create a new file in the command line?",
        answerA: "touch file.js",
        answerB: "new file.js"
    },
    hot: {
        question: "What is the index number at the beginning of an array?",
        answerA: "0",
        answerB: "1"
    },
    level: "2",
    text: "Your skills are weak..",
    choice1: "level3",
    choice2: "gameOver"
};
// OBJECT LEVEL 3
var level3 = {
    image: "images/roberto.png",
    cold: {
        question: "How do you start using flexbox?",
        answerA: "display:block",
        answerB: "display:flex"
    },
    mild: {
        question: "Is jQuery a framework or a library?",
        answerA: "A framework",
        answerB: "A library"
    },
    warm: { //variable name based on temp
        question: "How many arguments does .pop() take?",
        answerA: "1",
        answerB: "0"
    },
    hot: {
        question: "Will .shift() remove the first element of the array or the last?",
        answerA: "Last",
        answerB: "First"
    },
    level: "3",
    text: "Get a question wrong, and you'll end up as Iago's dinner",
    choice1: "gameOver",
    choice2: "level4"
};

// OBJECT LEVEL 4
var level4 = {
    image: "images/roberto.png",
    cold: {
        question: "Who created Java?",
        answerA: "Oracle",
        answerB: "Sun Microsystems"
    },
    mild: {
        question: "Which way is the correct way to select a div in jQuery?",
        answerA: "$(div)",
        answerB: "$('div')"
    },
    warm: { //variable name based on temp
        question: "Using two frameworks at once is recommended.",
        answerA: "True",
        answerB: "False"
    },
    hot: {
        question: "Sass is compiled into CSS.",
        answerA: "True",
        answerB: "False"
    },
    level: "4",
    text: "You'll never beat me!!!",
    choice1: "gameOver",
    choice2: "level5"
};

// OBJECT LEVEL 5
var level5 = {
    image: "images/danny.png",
    cold: {
        question: "Can you use .split() on an array?",
        answerA: "No",
        answerB: "Yes"
    },
    mild: {
        question: "Can you use .map() on a string?",
        answerA: "No",
        answerB: "Yes"
    },
    warm: { //variable name based on temp
        question: "Who is the father of Computer Science?",
        answerA: "Alan Turing",
        answerB: "Bill Gates"
    },
    hot: {
        question: "Who is Donald Knuth?",
        answerA: "A Computer Scientist",
        answerB: "An Astronomer"
    },
    level: "5",
    text: "Beep boop beep boop boop",
    choice1: "level6",
    choice2: "gameOver"
};

// OBJECT LEVEL 6
var level6 = {
    image: "images/danny.png",
    cold: {
        question: "Convert this binary number '10'.",
        answerA: "10",
        answerB: "2"
    },
    mild: {
        question: "What does SSL stand for?",
        answerA: "Second Secure Layer",
        answerB: "Secure Sockets Layer"
    },
    warm: { //variable name based on temp
        question: "Which stack are we learning?",
        answerA: "LAMP stack",
        answerB: "MEAN stack"
    },
    hot: {
        question: "What is the name of Apple's programming language?",
        answerA: "Golang",
        answerB: "Swift"
    },
    level: "6",
    text: "Does not compute!!",
    choice1: "gameOver",
    choice2: "level7"
};

// OBJECT LEVEL 7
var level7 = {
    image: "images/kyle.png",
    cold: {
        question: "Is JavaScript strongly typed?",
        answerA: "Yes",
        answerB: "No"
    },
    mild: {
        question: "Does Promise.all() return a promise?",
        answerA: "No",
        answerB: "Yes"
    },
    warm: { //variable name based on temp
        question: "How do you turn a javascript object to a JSON string?",
        answerA: "JSON.parse",
        answerB: "JSON.stringify"
    },
    hot: {
        question: "What will this evaluate to? 'false === 0'",
        answerA: "True",
        answerB: "False"
    },
    level: "7",
    text: "Welcome to Kingdom Kyle... let's see if you survive",
    choice1: "gameOver",
    choice2: "level8"
};

// OBJECT LEVEL 8
var level8 = {
    image: "images/kyle.png",
    cold: {
        question: "What language is Atom written in?",
        answerA: "JavaScript",
        answerB: "C++"
    },
    mild: {
        question: "Which HTTP status code should you expect if there is a server error?",
        answerA: "5XX",
        answerB: "4XX"
    },
    warm: { //variable name based on temp
        question: "How many columns is a grid made up of in Boostrap?",
        answerA: "12",
        answerB: "8"
    },
    hot: {
        question: "What is the &lt;ARIA&gt;?",
        answerA: "Accessible Rich Internet Applications",
        answerB: "Javascript Function"
    },
    level: "8",
    text: "You'll never be a programmer if you can't defeat me!",
    choice1: "victory",
    choice2: "gameOver"
};
