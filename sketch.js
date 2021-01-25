var banana,obstacles,monkey;
var c,go,monkeyrunning;
var count=0;
function preload(){
  c=loadImage("gold.png");
  go=loadImage("obstacle.png");
  
  monkeyrunning=loadAnimation("man1.png","man2.png","man3.png","man4.png","man5.png","man6.png","man7.png","man8.png","man9.png","man10.png");
  
}
function setup(){
  createCanvas(800,800);
  
monkey = createSprite(150, 350,10,10);
monkey.addAnimation("monkey",monkeyrunning);
  monkey.scale=0.1;


 ground = createSprite(0,760,10000,20);

ground.velocityX=-5;

 
//trex.debug=true;
//trex.setCollider("circle",0,0,25);
//var invground = createSprite(200, 390,400,10);
//invground.visible=false;
 score=0;

 bananagrp = createGroup();
 obsgrp = createGroup();




 gamestate="play";
}
function draw() {
  background("white");
  if(gamestate=="play"){
  if(keyDown("space")&&monkey.y>340) {
    monkey.velocityY=-15;
   // playSound("sound://category_instrumental/chime.mp3");
    
 }
 //score=score+Math.round(frameRate()/60);
  monkey.velocityY=monkey.velocityY+0.6;

  console.log("hello"+7);
 ground.velocityX=-5;
  if (ground.x<0) {
    ground.x=250;
  }
  obstacle();
 bananas();
 if(monkey.isTouching(bananagrp)){
   score=score+1;
   bananagrp.destroyEach();
 }
  
  if (monkey.isTouching(obsgrp)) {
  count=count+1;
    obsgrp.destroyEach();
  
  gamestate="play";}
  if(count==1){
    monkey.scale=0.05;
   
  } 
  if(count>1){
    gamestate="end";
  }
  }
  if(gamestate=="end"){ ground.velocityX=0;
    obsgrp.setVelocityXEach(0);
    bananagrp.setVelocityXEach(0);
   obsgrp.setLifetimeEach(-1);
    bananagrp.setLifetimeEach(-1);
   obsgrp.destroyEach();
   bananagrp.destroyEach();
                       
    
  
    }
  monkey.collide(ground);
  drawSprites();
textSize(20);
text("score"+score, 400, 400);
text(count,500,500)

  

}
function bananas(){
  if (frameCount%80==0) {
    
  
  
   banana1 = createSprite(width/2+200,random(500,700));
  banana1.addImage(c);
  banana1.velocityX=-(2+score/100);
  camera.position.y=banana1.y;

   banana1.lifetime=500;
    banana1.scale=0.1;
   bananagrp.add(banana1);
  }
  
  }

function obstacle(){
  if (frameCount%150==0) {
    
  
  
   obstacle1 = createSprite(width/2+200,750);
  obstacle1.addImage(go);
  obstacle1.velocityX=-(2+score/100);
   obstacle1.lifetime=500;
    obstacle1.scale=0.1;
   obsgrp.add(obstacle1);
  }
  
  }
  
  