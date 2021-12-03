var readlineSync = require('readline-sync');

var userName = readlineSync.question("Please enter your name....")

var welcomeMessage = "Hey " + userName + "! Welcome to Karan's NeoG MarkOne quiz on himself." 

console.log(welcomeMessage);

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("---------------------")

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("Oh No! You are wrong!")
    score = score -1;
  }
  console.log("Current Score = " + score);
  console.log("---------------------")
}


var questionBankOne = [
  {
    question:"When was Karan Born? ",
    answer: "16 January 2003"
  },
  {
    question: "How many times has Karan changed the ROM on his phone? "  ,
    answer: "5"
  },
  {
    question: "What is Karan's favourite IDE? ",
    answer: "VS Code" 
  },
  {
    question:  "Who is Karan's Favourite Astronaut? ",
    answer: "Jim Lovell"
  },
  {
    question: "On what spaceflight did an astronaut manually configure the directions after losing a resistance based gyrocope? This got Karan interested into Cosmos... " ,
    answer: "Apollo 8"
  },
  {
    question: "Physics vs Mathematics? ",
    answer: "Mathematics"
  }

]


for (var i=0; i<questionBankOne.length; i++){
  var currentQuestion = questionBankOne[i];

  play(currentQuestion.question, currentQuestion.answer);

}


var questionBankTwo = [
  {
    question:"Where does Karan Live? ",
    answer: "Delhi"
  },
  {
    question: "Where did Karan go to School? "  ,
    answer: "DAV Pushpanjali"
  },
  {
    question: "On what device is Karan doing the LevelZero on? ",
    answer: "Chromebook" 
  },
  {
    question: "What was Karan's First Car? ",
    answer: "Vista"
  },
  {
    question: "Which language did Karan learn after doing Sanskrit for 3 years after he switched schools? " ,
    answer: "French"
  },
  {
    question: "Who is Karan's FITTR Coach? ",
    answer: "Himanshu Sachdeva"
  }

]


if (score < 2){
  console.log("You have not scored enough to continue onto the next level. Please reload the page to try again!")
} else {
  var startLevelTwo = readlineSync.question("You have scored enough to proceed to Level Two, Press ENTER to keep Playing or E to exit.")

  if (startLevelTwo.toUpperCase() === "e".toUpperCase()){
    console.log("Oh No! We're Sorry to see you go, please go play again!")
  } else {
    console.log("----------------")
    for (var j=0; j<6; j++){
      var currentQuestionLtwo = questionBankTwo[j];
      play(currentQuestionLtwo.question, currentQuestionLtwo.answer);
    }

    var finalScore = score;
    console.log("Your Final Score is: " + score);
    console.log("Let's see if you have beaten any High Scores...")
    console.log("----------------")

    var highScores = [
      { name: "Meenakshi",
        score: "10"
      },
      { name: "Gaurav",
        score: "09"
      }
    ]

    for (var k=0; k<highScores.length; k++){
      var scoreDisplay = highScores[k];
      console.log("----------------")
      console.log(scoreDisplay.name + ": " + scoreDisplay.score)
      console.log("----------------")
    }

    
    if(finalScore > 10){
      console.log("Congratulations! You won the first spot! Email us this screenshot at karanmaneetgandhi@gmail.com and we'll put your name here.")
    } else{ 
      if (finalScore === 10){
        console.log("Great Work! You tied for the first place. Send us this screenshot at karanmaneetgandhi@gmail.com and we will put you here!")
      } else{ 
        if(finalScore === 9){
          console.log("Great! You have Tied for the second place! Send us this screenshot at karanmaneetgandhi@gmail.com and we will put you here")
        } else{
          console.log("Great Work!, you have come in third place. Send us this Screenshot at karanmaneetgandhi@gmail.com and we will put you here.")
        }
      }

    }
    }
  }

