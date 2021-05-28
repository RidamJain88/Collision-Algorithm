var fixedRect , movingRect ;
var gameObject1 , gameObject2 , gameObject3 , gameObject4 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = 'blue' ;
  movingRect = createSprite(300 , 500 , 20 ,50)
  movingRect.shapeColor = 'red' ;
  gameObject1 = createSprite(300 , 200 , 70 ,50)
  gameObject1.shapeColor = 'purple' ;
  gameObject2 = createSprite(500 , 200 , 70 ,50)
  gameObject2.shapeColor = 'magenta' ;
  gameObject3 = createSprite(700 , 200 , 70 ,50)
  gameObject3.shapeColor = 'orange' ;
  gameObject4 = createSprite(900 , 200 , 70 ,50)
  gameObject4.shapeColor = 'yellow' ;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX ;
  movingRect.y = World.mouseY ;
 
 if (isTouching(gameObject1 , movingRect)) {
  gameObject1.shapeColor = 'green' ;
  movingRect.shapeColor = 'green' ;
}
else{
gameObject1.shapeColor = 'blue' ;
movingRect.shapeColor = 'red' ;  
}
 
  drawSprites();
}


