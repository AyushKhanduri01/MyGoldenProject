var canvas, back,backgroundImage;

var gameState = 0;
var playerCount;

var database;
var elec,bg, bgImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var computer,computerStop,computerWork;
var form, player, game;
var fan, fanWork, fanStop;
var shin;
var tele,teleImg;
var elecSound;
var teleWork;

function preload(){
  bgImg = loadImage("../images/background.jpg"); 
  computerStop = loadImage("../images/comS.png");
  computerWork = loadImage("../images/comW.png");
  elecSound = loadSound("../sounds/elecFlow.mp3");
  back = loadImage("../images/back.jpg")
  fanStop = loadImage("../images/fanS.png");
  fanWork = loadImage("../images/fanW.png");
  shin = loadImage("../images/shine.png");
  teleImg = loadImage("../images/tv.png");
  teleWork = loadImage("../images/teleS.png");
}

function setup(){
  canvas = createCanvas(1325,600);
  game = new Game();
  game.start();
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
}
