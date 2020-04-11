const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 ;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,320,70,70);           
  box2 = new Box(920,320,70,70);
  box3 = new Box(1040,320,70,70);
  box4 = new Box(700,360,70,70);
  box5 = new Box(920,360,70,70);
  box6 = new Box(1040,360,70,70);
  
}  

function draw() {
  
  Engine.update(engine);
  strokeWeight(4);
  box1.display();
  box2.display(); 
}