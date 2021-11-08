var weight=[30,35,48,40]
function setup()
{ createCanvas(400,400);
var sum = weight[0] + weight[1] + weight[2] + weight[3]; 
var average = sum/weight.length;
 console.log(average); } 
 function draw() { background(51);
if(keyIsDown(DOWN_ARROW))
{
    background("red")
}
 
}

 