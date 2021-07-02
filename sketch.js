const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,background1;
var engine;
var snow = []
function preload(){
 background1=loadImage("snow2.jpg")
}
function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background(background1);
if(frameCount%5==0){
	snow.push(new Snow(random(0,800),30,30))

}
for(var j=0 ; j<snow.length;j++){
snow[j].display();
}
	}



