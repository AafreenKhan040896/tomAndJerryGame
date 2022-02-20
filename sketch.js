var road, roadImg;
var tom, tomImg;
var jerry, jerryImg;

function preload(){
  roadImg = loadImage("road.jpg");
  tomImg = loadImage("tom.png");
  jerryImg = loadImage("jerry.png");
}

function setup() {
  createCanvas(1600, 600);

  road = createSprite(800,300);
  road.addImage(roadImg);
  road.scale = 1.5;
  road.velocityX = -5;
  road.x = road.width/2;

  tom = createSprite(100, 300);
  tom.addImage(tomImg);
  tom.scale = 0.4;

  jerry = createSprite(1400,300);
  jerry.addImage(jerryImg);
  jerry.scale = 0.2;
}

function draw() {
  background(51);

  if(road.x < 600){
    road.x = road.width / 2;
  }


  drawSprites();
}