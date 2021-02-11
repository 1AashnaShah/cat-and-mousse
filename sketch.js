var ball1,ball2,ball3;
function setup() {
  createCanvas(800,400);
 
  ball1=createSprite(100,100,50,50);
  ball1.shapeColor="Red";
  ball2=createSprite(600,100,50,50);
  ball2.shapeColor="Red";
  ball3=createSprite(200,300,50,50);
  ball3.shapeColor="Red";
  ball1.velocityY=1;
  ball2.velocityY=-1;
}

function draw() {
  background(255,255,255);  
 
  /**if(isTouching(ball2,ball3)) {
    ball3.shapeColor="green";
    ball2.shapeColor="green";
  }
  else{
    ball3.shapeColor="red";
    ball2.shapeColor="red";
  }
  **/
 bounceOff(ball2,ball1);
  drawSprites();
}

