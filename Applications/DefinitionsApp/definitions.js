var currentTopic;
var i;
var topicBTNs = document.querySelectorAll(".topic");
var answerBTNs = document.querySelectorAll(".answer");
var filteredList = [];
var outputList = [];
var currentDeffIndex;


//************************************ BTN listeners ***********************************
//************* Topic btns ***************//
for(i=0;i<topicBTNs.length;i++)
{
  document.querySelectorAll(".topic")[i].addEventListener("click", function(e){
    currentTopic = this.innerHTML;
    filterTopics(currentTopic);
    getDefinition();
    setTerms();
  });
}

// ************ Answer btns **********************//
for(i=0;i<answerBTNs.length;i++)
{
  document.querySelectorAll(".answer")[i].addEventListener("click", function(e){


    if(checkAnswer(this.innerHTML))
    {
      this.classList.add("correct");
    }
    else
    {
      this.classList.add("incorrect");
    }


  });
}
//***************** new deff btn ***************//
document.querySelectorAll(".newDeffBTN")[0].addEventListener("click",function(e){
  //reset colours
  resetColors();
  //get a definition and set terms
  getDefinition();
  setTerms();
});

function resetColors()
{
  for(i=0;i<answerBTNs.length;i++)
  {
      document.querySelectorAll(".answer")[i].classList.remove("correct");
      document.querySelectorAll(".answer")[i].classList.remove("incorrect");
  }
}



function filterTopics(topic)
{
  //reset filtered arrays
  filteredList = [];
  outputList = [];
  defs.forEach(d => filteredList.push(d.topic));
  for(i=filteredList.length-1;i>-1;i--)
  {
    if(filteredList[i] == currentTopic)
    {
      //create a new array of definitions based on the index that matches
      outputList.push(defs[i]);

    }
  }
}

function getDefinition()
{
  //get a random number from 0-list length
  var randNum = Math.floor(Math.random()*outputList.length);
  document.querySelectorAll("p")[0].innerHTML = outputList[randNum].definition;
  //set global for def index
  currentDeffIndex = randNum
}
function setTerms()
{
  //clear current setTerms
  document.querySelectorAll(".answer")[0].innerHTML = "";
  document.querySelectorAll(".answer")[1].innerHTML = "";
  document.querySelectorAll(".answer")[2].innerHTML = "";
  document.querySelectorAll(".answer")[3].innerHTML = "";
  //set which answerBox to make correct
  var randNum = Math.floor(Math.random()*4);
  console.log(randNum);
  document.querySelectorAll(".answer")[randNum].innerHTML = outputList[currentDeffIndex].term;
  // Set the 3 remaining boxes to be a random term -- Loop through all and if == to rand numn then skip(do nothing)
  var boxes = [0, 1, 2, 3];
  var remaining = [];
  //loop through and remove element from array
  for (i=0;i<boxes.length;i++)
  {
    if(i!=randNum)
    {
      remaining.push(i);
    }
  }

  for(i=0;i<document.querySelectorAll(".answer").length;i++)//this will loop through all of the answer boxes
  {
    var randNum2 = Math.floor(Math.random()*defs.length);

      // must add check to see if term is already included in answers
    if(remaining.includes(i))
    {
      document.querySelectorAll(".answer")[i].innerHTML = defs[randNum2].term;
    }

  }
}

function checkAnswer(userAnswer)
{

  if(userAnswer==outputList[currentDeffIndex].term)
  {
    return true;

  }
  else
  {
    return false;
  }


}
