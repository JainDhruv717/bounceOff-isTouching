var fixedRect, movingRect,mouseRect;

var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  mouseRect = createSprite(500,300,100,80);
  mouseRect.shapeColor = "yellow";

  rect1 = createSprite(100,800,50,80);
  rect1.shapeColor  ="green";

  rect2 = createSprite(200,800,50,80);
  rect2.shapeColor  ="green";
  
  rect3 = createSprite(300,800,50,80);
  rect3.shapeColor  ="green";

  rect4 = createSprite(500,800,50,80);
  rect4.shapeColor  ="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  


  mouseRect.x = World.mouseX
  mouseRect.y = World.mouseY

  bounceOff(movingRect,fixedRect);
  if(isTouching(mouseRect,rect1)){
    rect1.shapeColor = "white"
  }

  if(isTouching(mouseRect,rect2)){
    rect2.shapeColor = "blue"
  }

  if(isTouching(mouseRect,rect3)){
    rect3.destroy();
  }

  if(isTouching(mouseRect,rect4)){
    rect4.destroy();
  }
  drawSprites();
}


