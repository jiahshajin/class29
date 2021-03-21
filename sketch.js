var ground
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var block2;
function preload() {
    
}



function setup() {
    createCanvas(1000,400);
     rectMode(CENTER)
    createSprite(390,161,30,40)
    
   engine = Engine.create();
    world = engine.world;
    
   
   Engine.run(engine);

    
   ground= new Ground( 400,300,250,10);
   ground1= new Ground(800,220,210,10) ;
     
  block2= new Block(356,201,30,40);
   block2.shapeColor=color(134,205,233)
    
  
}

function draw() {
  background(55,43,43);  
  drawSprites();

 ground.display()
 ground1.display()
 block2.display()


}