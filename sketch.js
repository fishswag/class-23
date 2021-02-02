const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(200,380, 400, 20)

  box1 = new Box(100,200,50,50)
  box2 = new Box(140,50,50,100)
}

function draw() {
  background(0,0,0);  

Engine.update(engine)
  
ground.display();

  
box1.display();
box2.display();
}


