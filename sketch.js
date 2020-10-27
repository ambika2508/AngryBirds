const E = Matter.Engine;
const B = Matter.Bodies;
const W = Matter.World;
var engine, world;
var box1, ground, bird, box2, box3, box4, box5, pig1, pig2, log1, log2, log3, log4;
var bg;



function setup() {
  createCanvas(1200,400);
  engine = E.create();
  world = engine.world; 
  //new keyword allocates memory for a new object.
  // whenever class name is used, it basically refers to constructor. Constructor is called to generate objects.
  ground = new Ground()

  box1 = new Box(900,360,70,70);
  box2 = new Box(1100,360,70,70);
  box3 = new Box(900,257,70,70)
  box4 = new Box(1100, 257, 70,70)
  box5 = new Box(1000,205,70,70)

  pig1 = new Pig(1000,370)
  pig2 = new Pig(1000,285)

  // 1 PI = 180 degree (PI in radians)
  log1 = new Log(1000,315,15,300,PI/2)
  log2 = new Log(1000,225,15,300,PI/2)
  log3 = new Log(970,160,15,150,PI/6)
  log4 = new Log(1030,160,15,150, -PI/6)

  bird = new Bird(100,100)
}

function preload(){
  bg = loadImage("sprites/bg.png")
}

function draw() {
  background(bg);  
  E.update(engine);
  // functions in classes are called using their object name
  ground.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  pig1.display()
  pig2.display()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  bird.display()
}