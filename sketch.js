var snowImage
var snow1Image,snow2Image,snow1,snow2
var edges
function preload(){
snowImage=loadImage("snow3.jpg")
snow1Image=loadImage("snow4.webp")
snow2Image=loadImage("snow5.webp")
}
function setup() {
  createCanvas(1000,600);
  edges=createEdgeSprites();
 snow1= createSprite(50, 50, 50, 50);
  snow1.addImage("snow1",snow1Image)
snow1.scale=0.2;
snow1.velocityX=-2;
snow1.velocityY=3;

  snow2= createSprite(750, 50, 50, 50);
  snow2.addImage("snow2",snow2Image)
snow2.scale=0.2;
snow2.velocityX=3;
snow2.velocityY=-2;

}



function draw() {
  background(snowImage);  
  snow1.bounceOff(edges)
  snow2.bounceOff(edges)
  drawSprites();

}