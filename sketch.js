var car;
var wall;
var speed;
var weight;
function setup() {
 createCanvas(1400,400)
 car=createSprite(50,200,50,40)
 wall=createSprite(1350,190,50,200);
 speed=random(55,90)
 weight=random(400,1500)
 
 
 car.velocityx=speed;
 car .shapeColor=("Cyan")
 wall.shapeColor=("grey")
}                                                                                                        

function draw() {
  background("white");  
car.x=World.mouseX;
car.y=World.mouseY;
if (isTouching(car,wall)){


  wall.shapeColor=("grey");
  car.shapeColor=("yellow");
}
else{
  car.shapeColor=("Cyan")
 wall.shapeColor=("grey")
}
if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
{
car.shapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}

if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}
}
  drawSprites();
}

