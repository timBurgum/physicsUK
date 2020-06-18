// start button buttonClicked
//document.querySelectorAll(".randBTN")[0].addEventListener("click", play);
document.querySelectorAll(".startBTN")[0].addEventListener("click", playMultiples);
//document.querySelectorAll(".testBTN")[0].addEventListener("click", filterTopic);
var scoreTag = document.querySelectorAll("h2")[0];
var currentQID;
var currentQ;
var qNumber = 0;
var playerScore = 0;
var runningGame = false;
var timerOn;
var timeBar = document.querySelectorAll(".timer")[0];
var picture = document.querySelectorAll("img")[0];
console.log(picture);
function play()
{
  //gen a random number up to qArray length
  filterTopic();
  console.log(qArray);
  var rand = Math.floor(Math.random()*qArray.length);
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
  //Get number of selected questions
  var numSelector = document.getElementsByName("noOfQuestions")[0];
  var num = numSelector.options[numSelector.selectedIndex].value;
  //run filters - refactor
  filterTopic();
  filterPaper();
  filterYear();
  //Handle number of questions left in filter error
  //if number of questions in qArray is less than sumber of Q selected then set new number to qArray lenghth and alert
  if(qArray.length==0)
  {
    alert("There are no questions in the database matching your filter selection.");
    //break all calulcations and reset page
    location.reload();
    return false;
  }
  else if(qArray.length<num)
  {
    num = qArray.length;
    alert("There are "+qArray.length+" questions that match your filters. This number has now been set.");
  }


  createQuestionArray(num);
  if(timerOn)
  {
    startTimer();
  }
  nextQuestion();
}
var gameQuestions = [];
function createQuestionArray(n)
{
  //Clear the array ready for a new set

  //Generate an array of random numbers
  for (i=0;i<n;i++)
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
//******************************FILTERS***********************//
function filterTopic()
{
var selectedT = document.getElementsByName("topics")[0];
var topicID = selectedT.options[selectedT.selectedIndex].value;
if(topicID == "any")
{

}
else
{
var idArray = [];
var arrayOfTopicIndex = [];

qArray.forEach(q=>idArray.push(q.topic));
//create a new array of topic where the index represents the id
//loop through new array and create array of index of each matching topic
  for(i=idArray.length;i>0;i--)
  {
    if((idArray[i-1]==topicID))
    {
      arrayOfTopicIndex.push(i-1);
    }
  }
// Create a new array of the question objects linked to those index values
var newArray =[];
//loop through new array
arrayOfTopicIndex.forEach(que => newArray.push(qArray[que]));
qArray = newArray;
}
}

function filterPaper()
{
  var selectedP = document.getElementsByName("paper")[0];
  var paperID = selectedP.options[selectedP.selectedIndex].value;
  if(paperID == "any")
  {

  }
  else
  {
  var idArray = [];
  var arrayOfPaperIndex = [];

  qArray.forEach(q=>idArray.push(q.year));
  //create a new array of topic where the index represents the id
  //loop through new array and create array of index of each matching topic
    for(i=idArray.length;i>0;i--)
    {
      if((idArray[i-1]==paperID))
      {
        arrayOfPaperIndex.push(i-1);
      }
    }
  // Create a new array of the question objects linked to those index values
  var newArray =[];
  //loop through new array
  arrayOfPaperIndex.forEach(que => newArray.push(qArray[que]));
  qArray = newArray;
  }
}

function filterYear()
{
  var selectedY = document.getElementsByName("year")[0];
  console.log(selectedY);
  var yearID = selectedY.options[selectedY.selectedIndex].value;
  console.log(yearID);
  if(yearID == "any")
  {

  }
  else
  {
  var idArray = [];
  var arrayOfYearIndex = [];

  qArray.forEach(q=>idArray.push(q.year));
  //create a new array of topic where the index represents the id
  //loop through new array and create array of index of each matching topic
    for(i=idArray.length;i>0;i--)
    {
      if((idArray[i-1]==yearID))
      {
        arrayOfYearIndex.push(i-1);
      }
    }
  // Create a new array of the question objects linked to those index values
  var newArray =[];
  //loop through new array
  arrayOfYearIndex.forEach(que => newArray.push(qArray[que]));
  qArray = newArray;
  }
}

//************************ Timer functions ************************//
//get timeBar getElement

//get which time option is selected
function whichTimeSelected()
{
  var which;
  for(i=0;i<document.querySelectorAll(".radioBTN").length;i++)
  {
    if(document.querySelectorAll(".radioBTN")[i].checked)
    {
      which = document.querySelectorAll(".radioBTN")[i].getAttribute("value");
    }

  }
    if(which!="noTimer")
    {
      timerOn = true;
      setTimer(which);
    }
    else
    {
      //turn off timer
      timerOn = false;
    }

}

function setTimer(maxTime)
{
    timeBar.setAttribute("max",maxTime);
    timeBar.setAttribute("value",maxTime);
}
function decrementTimer()
{
  //check if timer is on 0
  if(timeBar.getAttribute("value")==0)
  {
    clearInterval(startTimer);
    console.log("timer stopped");
    //iff game is running call nextQuestion
    isGameOver();

  }
  else
  {
    timeBar.setAttribute("value",timeBar.getAttribute("value")-1);
  }


}

function startTimer()
{
  whichTimeSelected()
  var startTimer = setInterval(decrementTimer,1000);
  console.log("timer started");
}
function resetTimer()
{
  whichTimeSelected();
  console.log("timer reset");
}


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
  isGameOver();
  // Give next question if game  is running

}
function isGameOver()
{
  clearInterval(startTimer);

  if(qNumber == gameQuestions.length)
  {
    console.log("running game set to false");
    runningGame = false;
    // set qpic to completed screen
    var filePath = "CompletedRoundScreen.png";
    picture.setAttribute("src",filePath);
    startTimer=false;
    clearInterval(startTimer);



    alert("Your score is " + playerScore)
    location.reload();

  }
  if(runningGame == true)
  {
    nextQuestion();
  }
}
//*****************************************************************//

function nextQuestion()
{
  //Stop any timing errors

//set questionPicture and current q for answer check
currentQ = qArray[gameQuestions[qNumber]];
var filePath = "QuestionImages/"+ qArray[gameQuestions[qNumber]].iD  +".png";
picture.setAttribute("src",filePath);
//inrement qNumber
  qNumber++;
resetTimer()

}
//*******************************************************************//
