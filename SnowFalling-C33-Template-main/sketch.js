const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine

var tarray=[]




function preload(){
  backgroundImage=loadImage("snow3.jpg")



}




function setup() {
  createCanvas(800,400);
  engine=Engine.create()
    world=engine.world

  

  
}

function draw() {

  Engine.update(engine)
  background(backgroundImage); 
  
  if(frameCount%10===0){
    tarray.push(new Snow(Math.round(random(20,790)),-10))
  }
 for (i=0;i<tarray.length;i++){
  tarray[i].display()
 }
  drawSprites();
}