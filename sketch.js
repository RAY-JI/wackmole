var gameState=0;

var score=0;
var fieldImg, moleImg, hammerImg, titleImg;
var field, mole, hammer, hammerAtk;
var hole1,hole2,hole3,hole4,hole5;
var playButton,button1,button2, endButton, cosmeticBtn;
var time=0;
var gameMode=0;
var masMoleImg;
var snowfieldImg
var BGskinSelected = 1;
var hammerSkinSelected = 1;
var moleSkinSelected = 1;
var snowHammerImg, snowHammerAtk, snowHammerbtn



function preload(){
fieldImg=loadImage("assets/field.png");
moleImg=loadImage("assets/mole.png");
hammerImg=loadImage("assets/hammer.png");
hammerAtk=loadImage("assets/hammerAttack.png");
masMoleImg = loadImage("assets/Chrismasmole.png");
snowfieldImg=loadImage("assets/SNOWfield.png");
snowHammerImg=loadImage("assets/Snowhammer.png");
snowHammerAtk=loadImage("assets/SnowhammerAttack.png");

}

function setup() {
  createCanvas(800, 800);


mole=createSprite(200,200,50,70);
mole.addImage('mole',moleImg);
mole.addImage('masMole', masMoleImg);
mole.scale=1.1;
mole.visible=true;

hammer=createSprite(400,560,60,80);
hammer.addImage('hammer',hammerImg);
hammer.addImage('hammerAtk', hammerAtk);
hammer.addImage('snowHammer', snowHammerImg);
hammer.addImage('snowHammerAtk', snowHammerAtk);
hammer.scale=0.14

playButton = createImg('assets/play.png');
playButton.position(360,380);
playButton.size(100,100)
playButton.mouseClicked(play);

button1=createImg('assets/60secs.png');
button1.position(110,170);
button1.size(100,100)
button1.mouseClicked(start60);
button1.hide();

button2=createImg('assets/infinite.png');
button2.position(625,175);
button2.size(100,100)
button2.mouseClicked(startend);
button2.hide();

cosmeticBtn=createImg('assets/cosmetic.png');
cosmeticBtn.position(110,580);
cosmeticBtn.size(100,100);
cosmeticBtn.mouseClicked(skinSelect);
cosmeticBtn.hide();

snowfield=createImg('assets/SNOWfield.png');
snowfield.position(625,175);
snowfield.size(100,100);
snowfield.mouseClicked(SFselected);
snowfield.hide();

fieldbtn=createImg('assets/field.png');
fieldbtn.position(110,170);
fieldbtn.size(100,100);
fieldbtn.mouseClicked(Fselected);
fieldbtn.hide();

hammerbtn=createImg('assets/hammer.png');
hammerbtn.position(110,580);
hammerbtn.size(100,100);
hammerbtn.mouseClicked(defaultHammer);
hammerbtn.hide();

snowHammerbtn=createImg('assets/Snowhammer.png');
snowHammerbtn.position(625,580);
snowHammerbtn.size(100,100);
snowHammerbtn.mouseClicked(snowHammer);
snowHammerbtn.hide();

masMolebtn=createImg('assets/Chrismasmole.png');
masMolebtn.position(625,350);
masMolebtn.size(100,100);
masMolebtn.mouseClicked(snowMole);
masMolebtn.hide();

Molebtn=createImg('assets/mole.png');
Molebtn.position(110,350);
Molebtn.size(100,100);
Molebtn.mouseClicked(Mole);
Molebtn.hide();

endButton=createImg('assets/end.png');
endButton.position(350,25);
endButton.size(100,100);
endButton.mouseClicked(end);
endButton.hide();

titleImg=createImg('assets/title.png');
titleImg.position(250,50);
titleImg.size(360,240);


hole1=createSprite(160,210,60,60);
hole1.visible=false;

hole2=createSprite(675,210,60,60);
hole2.visible=false;

hole3=createSprite(410,400,60,60);
hole3.visible=false;

hole4=createSprite(150,610,60,60);
hole4.visible=false;

hole5=createSprite(655,620,60,60)
hole5.visible=false

}

function draw() {
  if(BGskinSelected == 1){
  background(fieldImg);
  } else if(BGskinSelected == 2){
    background(snowfieldImg);
  }

  if(hammerSkinSelected > 3){
    hammerSkinSelected = 2
  } else if(hammerSkinSelected < 0){
    hammerSkinSelected = 1
  }

  if(hammerSkinSelected === 1){
hammer.changeImage('hammer');
  } else if(hammerSkinSelected === 2){
    hammer.changeImage('snowHammer');
  }

  if(moleSkinSelected == 1){
    mole.changeImage('mole');
  } else if(moleSkinSelected == 2){
    mole.changeImage('masMole');
  }

  fill("black")
  textSize(24)
  text("Score:"+score,50,50);
  text("Time:"+time+"s",600,50);

  if(gameState===0){

    
    mole.visible=false
  }


if(gameState===1){

  hammer.x = World.mouseX;
hammer.y = World.mouseY;
playButton.hide();

if(frameCount % 30 ===0){
  time=time+1
}

if(frameCount % Math.round(random(50,100)) === 0){
  mole.x=hole1.x
  mole.y=hole1.y
  mole.visible=true;
}

if(frameCount % Math.round(random(60,120)) === 0){
  mole.x=hole2.x
  mole.y=hole2.y
  mole.visible=true;
}

if(frameCount % Math.round(random(70,140)) === 0){
  mole.x=hole3.x
  mole.y=hole3.y
  mole.visible=true;
}

if(frameCount % Math.round(random(80,160)) === 0){
  mole.x=hole4.x
  mole.y=hole4.y
  mole.visible=true;
}

if(frameCount % Math.round(random(90,180)) === 0){
  mole.x=hole5.x
  mole.y=hole5.y
  mole.visible=true;
}

if(time===60 && gameMode===1){
  gameState=2; 
}

if(gameMode===2){
  endButton.show();
}

if(keyDown("space")){
  mousePressed();
}

keyPressed();
}
if(gameState===2){
end();
}
//console.log(mole.x)

drawSprites();
}

function mousePressed(){
  if(hammer.isTouching(mole)){
    mole.visible=false
    mole.x=1000
    mole.y=1000
    score=score+1
  }
}

function keyPressed(){
  if(keyDown("space") && hammerSkinSelected == 1){
    hammer.changeImage('hammerAtk');
  }
  else(hammer.changeImage('hammer'))

  if(keyDown("space") && hammerSkinSelected == 2){
    hammer.changeImage('snowHammerAtk')
  }
  else(hammer.changeImage('snowHammer'))
}

function play(){
mole.visible=false;
playButton.hide();
titleImg.hide();
button1.show();
button2.show();
cosmeticBtn.show();
snowfield.hide();
fieldbtn.hide();
hammerbtn.hide();
snowHammerbtn.hide();
masMolebtn.hide();
Molebtn.hide();
}

function start60(){
button1.hide();
button2.hide();
cosmeticBtn.hide();
gameState=1
gameMode=1
}
function startend(){
button2.hide();
button1.hide();
cosmeticBtn.hide();
gameState=1
gameMode=2
}

function skinSelect(){
button1.hide();
button2.hide();
cosmeticBtn.hide();
snowfield.show();
fieldbtn.show();
playButton.show();
hammerbtn.show();
snowHammerbtn.show();
masMolebtn.show();
Molebtn.show();
mole.visible=true;
}

function SFselected(){
BGskinSelected = 2;
}

function Fselected(){
  BGskinSelected = 1;
}

function defaultHammer(){
  hammerSkinSelected--;
  console.log("1");
}

function snowHammer(){
  hammerSkinSelected++;
  console.log("2");
}

function snowMole(){
  moleSkinSelected =2;
}

function Mole(){
  moleSkinSelected =1;
}



function end(){
gameState=2
  swal({
    title:'Game over',
    text:'Score:'+score,
    imageUrl:"https://ray-ji.github.io/class46/assets/mole.png",
    imageSize: "150x150",
    confirmButtonText: 'Play again'
  },
  function (isConfirm){
    if(isConfirm){
      location.reload();
    }
  }
  )
}