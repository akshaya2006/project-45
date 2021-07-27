var boy, boyImage;
var mushroom, mushroomImage;
var ground, groundImg;
var obsticleGroup;
var invisibleGround;

function preload(){
  boyImage = loadAnimation("boy0.png","boy1.png","boy2.png",
  "boy3.png","boy4.png","boy5.png");
  mushroomImage = loadImage("mushroom.png");
  groundImg = loadImage("background.png");
}

function setup() {
  createCanvas(700,500);

  ground = createSprite(200,200,800,600);
  ground.addImage(groundImg);
  ground.scale=1.1;


  boy = createSprite(700,380,50,50);
  boy.addAnimation("running",boyImage);
  boy.scale = 1;
 
  invisibleGround = createSprite(200, 500, 1200,20);
  invisibleGround.visible = true;
  
  edges = createEdgeSprites();
   

}
function draw() {
  background(255,255,255);  

     if (keyDown("right")){
     boy.x = boy.x+1
   }
    if (keyDown("left")){
    boy.x = boy.x-1
   } 
   if (keyDown("space")&&boy.y>=100){
    boy.velocityY = -12;
   }
   boy.velocityY = boy.velocityY+0.5;
   
   boy.collide(invisibleGround);
   boy.collide(edges);
 
   

  drawSprites();
}