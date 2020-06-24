var btn = document.querySelector(".vectorGen1");

btn.addEventListener("click", function(){

  tX = 0;
  tY = 0;
  c.clearRect(0,0,innerWidth,innerHeight);
  setAxis();
  createRandomVector(2);

  console.log(tX/10 + "  ;   " + tY/10);
    console.log(calcRMag(tX, tY));
    console.log(calcRAngle(tX, tY));

});

var btn = document.querySelector(".vectorGen2");

btn.addEventListener("click", function(){

    tX = 0;
    tY = 0;
  c.clearRect(0,0,innerWidth,innerHeight);
  setAxis();
  createRandomVector(3);

});

var btn = document.querySelector(".vectorGen3");

btn.addEventListener("click", function(){

    tX = 0;
    tY = 0;
  c.clearRect(0,0,innerWidth,innerHeight);
  setAxis();
  createRandomVector(4);

});

document.querySelector(".submitM").addEventListener("click", function(){
  checkMag();
});
document.querySelector(".submitA").addEventListener("click", function(){
  checkAng();
});
function checkMag()
{
  document.querySelector(".answerMag").classList.remove("goGreen");
  document.querySelector(".answerMag").classList.remove("goRed");
  var inputM = document.querySelector(".answerMag").value;
  var ans = parseFloat(calcRMag(tX, tY));
  var high = ans + (ans*0.1);
  var low = ans - (ans*0.1);
  //if((inputM >= calcRMag(tX, tY)-(calcRMag(tX, tY)*0.1)) && (inputM <= (calcRMag(tX, tY) + (calcRMag(tX, tY)*0.2))))
  if(inputM>=low && inputM<=high)
  {
    document.querySelector(".answerMag").classList.add("goGreen");
  }
  else{
    document.querySelector(".answerMag").classList.add("goRed");
  }
}
function checkAng()
{
  //remove colours
  document.querySelector(".answerAng").classList.remove("goGreen");
  document.querySelector(".answerAng").classList.remove("goRed");

  var inputA = document.querySelector(".answerAng").value;
  var ans = parseFloat(calcRAngle(tX, tY));
  var high = ans + (ans*0.1);
  var low = ans - (ans*0.1);
  //if((inputM >= calcRMag(tX, tY)-(calcRMag(tX, tY)*0.1)) && (inputM <= (calcRMag(tX, tY) + (calcRMag(tX, tY)*0.2))))
  if(inputA>=low && inputA<=high)
  {
    document.querySelector(".answerAng").classList.add("goGreen");
  }
  else{
    document.querySelector(".answerAng").classList.add("goRed");
  }
}
