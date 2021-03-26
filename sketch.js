var PLAY = 1;
var END = 0;
var gameState = PLAY;

var killer,killerimg;
function preload(){
  killerimg = loadAnimation("killer.png")

  bgi = loadAnimation("bg.png")

}

function setup() {
 createCanvas(700,350);
   
  bg = createSprite(300,200,200,200);
  bg.addAnimation("bg.png",bgi)

  killer = createSprite(60,240,20,20);
  killer.addAnimation("killer.png",killerimg)
  killer.scale = 0.16;
  
  score = 0;

}

function draw() {

  //text("Score : "+ score, 80,50);

  //background();

  //if(gameState === PLAY){
    //killer.visible = false;
    //move the ground
    //ground.velocityX = -4;
    //scoring
    //score = score + Math.round(frameCount/60);
  //}
   // if (ground.x < 0){
  //    ground.x = ground.width/2;
  //  }
   //if(keyDown("space")) {
      //var killer1 = createSprite(200,200,200);
      
     // }
  
 drawSprites();
}