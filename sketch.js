var bread;
var log1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12,log13,log14,log15,log16,log17,log18,log19,log20,log21,log22,log23,log24;
var bg;
var pacman,pacmanImage
var logGroup;
var pUp,pDown,pLeft,pRight,pClose
var score=0;
var potionOfSwift,potionOfHeal,potionOfPower;
var power1,power2,power3
var heartImage,hungerImage;
var emptyHearImg,emptyHunger;
var ghostImg
var spawnerImg
var carrotImg, boneImg, enchantedImg;
var foodGrp;
var hunger=150
var heart1,heart2,heart3,hunger1,hunger2,hunger3;

function preload(){
  bg=loadImage("./assets/bg.jpg");
  pacmanImage=loadAnimation("./assets/3.png")
//  pUp=loadAnimation("./assets/pacmanAnim.gif");
  potionOfSwift=loadImage("./assets/potionOfSwiftness.png");
  potionOfHeal=loadImage("./assets/PotionOfHealing.png");
  potionOfPower=loadImage("./assets/PotionOfStrength.png");
  heartImage=loadImage("./assets/Life.png");
  hungerImage=loadImage("./assets/hungerBar.png")
  emptyHeartImg=loadImage("./assets/emptyHeart.png");
  ghostImg=loadAnimation("./assets/ghost.gif");
  spawnerImg=loadImage("./assets/spawner.png");
  carrotImg=loadImage("./assets/carrot.png");
  boneImg=loadImage("./assets/bone.png");
  enchantedImg=loadImage("./assets/enchantedFood.gif");
  emptyHunger=loadImage("./assets/emptyHunger.png");
}

function setup(){
createCanvas(1478,715);

logGroup=new Group()
foodGrp=new Group()

log=new Log()

pacman=createSprite(150,630,50,50);
pacman.addAnimation("still",pacmanImage);
// pacman.addAnimation("up",pUp)
pacman.scale=1.5
pacman.debug=false;
 pacman.setCollider("circle",-5,2,17);


//---------------------------------------------------------------

power1=createSprite(1075,350,50,50);
power1.addImage(potionOfSwift);
power1.scale=0.25

power2=createSprite(500,550,50,50);
power2.addImage(potionOfHeal);
power2.scale=0.45;

power3=createSprite(1200,650,50,50);
power3.addImage(potionOfPower);
power3.scale=0.25

//------------------------------------------------------------------

heart1=createSprite(800,30,50,50);
heart1.addImage(heartImage);
heart1.scale=0.05

heart2=createSprite(850,30,50,50);
heart2.addImage(heartImage);
heart2.scale=0.05
heart2.tint="white";

heart3=createSprite(900,30,50,50);
heart3.addImage(heartImage);
heart3.scale=0.05


hunger1=createSprite(960,80,50,50);
hunger1.addImage(hungerImage);
hunger1.scale=0.5

hunger2=createSprite(1010,80,50,50);
hunger2.addImage(hungerImage);
hunger2.scale=0.5

hunger3=createSprite(1060,80,50,50);
hunger3.addImage(hungerImage);
hunger3.scale=0.5
}


//---------------------------------------------------------------

spawner=createSprite(800,600,50,50);
spawner.addImage(spawnerImg);
spawner.scale=0.3;

ghost=createSprite(800,600,50,50);
ghost.addAnimation("ghost",ghostImg);
ghost.scale=0.2
ghost.velocityX=-2
// if(ghost.bounceOff(logGroup)){
//   ghost.velocityY=1
// }

//----------------------------------------------------------------

carrot1=createSprite(800,420,50,50);
carrot1.addImage(carrotImg);
carrot1.scale=0.5
foodGrp.add(carrot1);

carrot2=createSprite(550,200,50,50);
carrot2.addImage(carrotImg);
carrot2.scale=0.5;
foodGrp.add(carrot2);

bone1=createSprite(1380,200,50,50);
bone1.addImage(boneImg);
bone1.scale=0.5
foodGrp.add(bone1)

bone2=createSprite(675,200,50,50);
bone2.addImage(boneImg);
bone2.scale=0.35
foodGrp.add(bone2)

function draw(){
  background(bg);
  drawSprites();
  pacmanMovement(3,3);
  textSize(30);
  fill("white");
  textAlign(CENTER);
  textFont("Courier New");
  strokeWeight(3);
  stroke("red")
  text("Ghost Slayed: "+score,1250,50)

  if(ghost.bounceOff(logGroup)){
    ghost.velocityY=Math.round(random(-5,5))
  }
  
  if(frameCount%10===0){
    hunger=hunger-1;
  }

  if(hunger<=100){
    hunger3.addImage(emptyHunger)
    hunger3.scale=0.3;
    foodGrp.overlap(pacman,hungeradd)
  }

  if(hunger<=50){
    hunger2.addImage(emptyHunger)
    hunger2.scale=0.3
  }

  if(hunger<=0){
    hunger1.addImage(emptyHunger)
    hunger1.scale=0.3
  }

  if(pacman.isTouching(power1)){
    power1.remove();
    pacmanMovement(6,6);
  }

  if(hunger==0){
    heart3.addImage(emptyHeartImg);
    heart2.addImage(emptyHeartImg);
    heart1.addImage(emptyHeartImg);
  }
}

function pacmanMovement(x,y){
  if(keyDown("w")){
    pacman.velocityY=-y
    // pacman.changeAnimation("up",pUp);
  }
  if(keyWentUp("w")){
    pacman.velocityY=0
  }

  if(keyDown("s")){
    pacman.velocityY=y
  }
  if(keyWentUp("s")){
    pacman.velocityY=0
  }

  if(keyDown("a")){
    pacman.velocityX=-x
  }
  if(keyWentUp("a")){
    pacman.velocityX=0
  }

  if(keyDown("d")){
    pacman.velocityX=x
  }
  if(keyWentUp("d")){
    pacman.velocityX=0
  }

  pacman.bounceOff(logGroup);

}

function hungeradd(spriteA,spriteB){
  spriteA.remove();
  hunger=hunger+50;
  if(hunger>=100){
  hunger3.addImage(hungerImage)
  hunger3.scale=0.5
  }

  if(hunger>=50){
    hunger2.addImage(hungerImage)
    hunger2.scale=0.5
  }
  
  if(hunger>=0){
    hunger1.addImage(hungerImage);
    hunger1.scale=0.5
  }
}


function destroySpawner(){
  // if(pacman.isTouching(spawner)){
    
    
}





