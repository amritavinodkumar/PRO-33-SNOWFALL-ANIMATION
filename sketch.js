const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snowfall;
var snow = [];

function preload(){
  getBackgroundImg();
}

function setup(){
  var canvas = createCanvas(900,600);
  
  engine = Engine.create();
  world = engine.world;

  
}

function draw(){
  if(backgroundImg)
  background(backgroundImg); 
  
  Engine.update(engine);

  if(frameCount%100===0){
    snow.push(new Snow(width/2-200, width/2-450, 200, 200));
  }

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }

 //drawSprites();

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);

   if(hour>=10 && hour<=15){
    bg = "snow1.jpg";
  }
  
   if(hour>=15 && hour<=20){
    bg = "snow3.jpg" 
  }

   if(hour>=20 && hour<=10){
    bg = "snow2.jpg"
  }

   backgroundImg = loadImage(bg);
   console.log(backgroundImg);

}