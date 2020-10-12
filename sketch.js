var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 

  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";

 movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x && 
   movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x &&
   movingRect.width/2 + fixedRect.width/2 > movingRect.y - fixedRect.y &&
   fixedRect.width/2 + movingRect.width/2 > fixedRect.y - movingRect.y ) {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";


}

else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}
  drawSprites();
}   