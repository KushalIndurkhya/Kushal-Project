var track;
var car;
var gameState;

function preload(){
track = loadImage("Images/trackimg.jpg")
carimg= loadImage("Images/pinkcar.png")
signimg= loadImage("Images/sign.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight)
/*bg=createSprite(width/2,height/2,width,height)
bg.addImage(track)
bg.scale=6*/
car = createSprite(width/2,height,20,20)
car.addImage(carimg)
car.scale=0.1
car.velocityY=-5
 signsGroup = new Group();
 gameState=0
}

function draw(){
background(0)
image(track,0,-displayHeight*8,displayWidth,displayHeight*10)
camera.position.x=width/2
camera.position.y=car.y
if(keyDown("LEFT_ARROW")){
  car.x=car.x-3;
}

if(keyDown("RIGHT_ARROW")){
  car.x=car.x+3;
}

if(signsGroup.isTouching(car)){
  gameState=1
}

if( (car.x<40) || (car.x>460)){
gameState=2
}

if(gameState===1){
  car.velocityY=-0
}
spawnSigns();
console.log(car.velocityY)
//console.log(gameState)
drawSprites();
}

function spawnSigns(){
  if(frameCount%20==0){
  ran=random(550,width-550)
  sign=createSprite(ran,car.y-500,10,10)
  signsGroup.add(sign)
  sign.addImage(signimg)
  sign.scale=0.3
  sign.velocityY=2

  }
}