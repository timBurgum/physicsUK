var canvas = document.querySelector("canvas");
canvas.width = 700;
canvas.height = 700;
var c = canvas.getContext('2d');
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var tX = 0;
var tY = 0;
setAxis();

//Create a colour array to identify each vector to its text
var colours = ["red", "blue","green","purple"];
//draw a test Vectors

function Vector(x, y)
{
  this.x = x;
  this.y = y;
}

function setAxis()
{

  //add axis lines
  c.strokeStyle = "black";
  c.lineWidth = 2;
  //Y axis
  c.beginPath();
  c.moveTo(centerX,0);
  c.setLineDash([5, 15]);
  c.lineTo(centerX,canvas.height);
  c.stroke();

  //X axis
  c.beginPath();
  c.moveTo(0,centerY);
  c.setLineDash([5, 15]);
  c.lineTo(canvas.width,centerY);
  c.stroke();
}
function precise(x,n) {
  return Number.parseFloat(x).toPrecision(n);
}
function createRandomVector(n)
{
  c.setLineDash([0, 0]);
  for(var i=0;i<n;i++)
  {
    //create random x and y vals - need to allow negative vals
    var x = ((Math.random()-0.5)*((canvas.width/2)));
    var y = ((Math.random()-0.5)*((canvas.height/2)));
    console.log("X; "+x+ " Y; "+y);
    //Create arrow positions
    var mag = Math.sqrt((x*x) + (y*y));
    var angle = Math.atan( y / x)* (180/Math.PI);
    // create vector lines
    c.beginPath();
    c.moveTo(centerX,centerY);
    c.lineTo(centerX + x,centerY+y);
    c.strokeStyle = colours[i];
    c.lineWidth = 8;
    c.stroke();
    // Calculate magnitude and angle to 2 sf

    // add text  above lines
    console.log(mag + "    " + angle);
    c.fillStyle = colours[i];

    //c.font = bold 16px Arial;
    c.fillText("Magnitude: " + precise(mag,3)/10 + " " + "Angle: " + Math.abs(precise(angle,3)), centerX + x + 10, centerY + y - 10);

    //set ans vars
    tX = tX + x;
    tY = tY + y;

  }

}
function calcRMag(x, y)
{
  return precise(Math.sqrt((precise(x,2)*precise(x,2))+(precise(y,2)*precise(y,2)))/10,2);
}
function calcRAngle(x,y)
{
  return precise(Math.atan( precise(y,2) / precise(x,2)) * (180/Math.PI),2);
}
