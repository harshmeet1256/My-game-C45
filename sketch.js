var bg, bgImg;
var angryMan,angrymangif;
var tree, treeImg;

var gameLevel = 1;
function preload(){
  bgImg=loadImage("Images/background1.jpg");
  angrymangif=loadAnimation("Images/VPt.gif");
  treeImg=loadImage("Images/tree2.jpg")
}
function setup() {
  createCanvas(1400,700);

 
  angryMan=createSprite(400, 200, 50, 50);
  angryMan.addAnimation("climbing",angrymangif);

  tree=createSprite(1200,500,50,50);
  tree.addImage(treeImg);
  
}

function draw() {
  background(bgImg); 
  drawSprites();

  if(gameLevel === 1){
    fill("yellow")
    level1();
  }
  
}