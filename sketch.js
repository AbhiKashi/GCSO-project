
var car,car1,car2;
var speed,speed1,speed2;
function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 50, 50);
  car1=createSprite(50,300,50,50);
  car2=createSprite(50,400,50,50);
  speed=random(5,100);
  speed1=random(5,100);
  speed2=random(5,100);
  car.velocityX=speed;
car1.velocityX=speed1;
car2.velocityX=speed2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}