// start button buttonClicked
document.querySelectorAll(".randBTN")[0].addEventListener("click", play);
document.querySelectorAll(".startBTN")[0].addEventListener("click", playMultiples);
var scoreTag = document.querySelectorAll("h2")[0];
var currentQID;
var currentQ;
var qNumber = 0;
var playerScore = 0;
var runningGame = false;
var picture = document.querySelectorAll("img")[0];
console.log(picture);
function play()
{
  //gen a random number up to qArray length
  var rand = Math.floor(Math.random()*qArray.length);
  console.log(rand);
  //set global var as that question iD
  currentQ = qArray[rand]
  currentQID = qArray[rand].iD;
  //Display picure for that question
  var filePath = "QuestionImages/"+currentQID+".png";
  picture.setAttribute("src",filePath);
}
//*******************************************************************//
function playMultiples()
{
  qNumber = 0;
  playerScore = 0;
  gameQuestions = [];
  runningGame = true;
  createQuestionArray();
  nextQuestion();
}
var gameQuestions = [];
function createQuestionArray()
{
  //Clear the array ready for a new set

  //Generate an array of random numbers
  for (i=0;i<5;i++)
  {
    //check if number exists in array first
    var randGameQ = Math.floor(Math.random()*qArray.length);
    while(gameQuestions.includes(randGameQ))
    {
      randGameQ = Math.floor(Math.random()*qArray.length);
    }
    gameQuestions.push(randGameQ)

  }

}
//*******************************************************************//



//************************* ANSWER BUTTONS ************************//
var selectedAns;
document.querySelectorAll(".ansBTN")[0].addEventListener("click", function(){
  selectedAns = "a";
  checkAnswer();
});
document.querySelectorAll(".ansBTN")[1].addEventListener("click", function(){
  selectedAns = "b";
  checkAnswer();
});
document.querySelectorAll(".ansBTN")[2].addEventListener("click", function(){
  selectedAns = "c";
  checkAnswer();
});
document.querySelectorAll(".ansBTN")[3].addEventListener("click", function(){
  selectedAns = "d";
  checkAnswer();
});
//*******************************************************************//

function checkAnswer()
{
  if(selectedAns == currentQ.answer)
  {
    playerScore++;
  }
  console.log(playerScore);
  //Update players score inn html
  scoreTag.innerHTML = "Player score: " + playerScore;
  // Give next question if game  is running
  if(qNumber == gameQuestions.length)
  {
    console.log("running game set to false");
    runningGame = false;
    // set qpic to completed screen
    var filePath = "CompletedRoundScreen.png";
    picture.setAttribute("src",filePath);
  }
  if(runningGame == true)
  {
    nextQuestion();
  }
}
//*****************************************************************//

function nextQuestion()
{
//set questionPicture and current q for answer check
currentQ = qArray[gameQuestions[qNumber]];
var filePath = "QuestionImages/"+ qArray[gameQuestions[qNumber]].iD  +".png";
picture.setAttribute("src",filePath);
//inrement qNumber
  qNumber++;


}
//*******************************************************************//
