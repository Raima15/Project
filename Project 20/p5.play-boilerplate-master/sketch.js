function setup() {
  var car,wall;
  createCanvas(800,400);
  car = createSprite(40, 200, 50, 10);
  car.shapeColor="white";
  wall = createSprite(700,200,20,300);
  car.shapeColor="white";
  speed=random(50,60);
  car.velocityX=speed;

}
var speed,weight;
function draw() {
  background("black"); 
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if (deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}
}
}
