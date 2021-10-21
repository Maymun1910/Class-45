function preload(){

}

function setup(){
  createCanvas(windowWidth,windowHeight)
  ground=createSprite(windowWidth/2,windowHeight/2,width,10)
}

function draw(){
  background("blue")
  ground.velocityX=0 
  ground.velocityY=10

drawSprites()
}

