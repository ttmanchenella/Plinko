const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var division = [];
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for(var x = 0; x <= width; x = x + 80) {
    division.push(new Division(x, 550, 20, 300));
  }

  for(var x = 20; x < width; x = x + 50) {
    plinkos.push(new Plinko(x, 50, 20));
    plinkos.push(new Plinko(x, 100, 20));
    plinkos.push(new Plinko(x, 150, 20));
    plinkos.push(new Plinko(x, 200, 20));
    plinkos.push(new Plinko(x, 250, 20));
    plinkos.push(new Plinko(x, 300, 20));
    plinkos.push(new Plinko(x, 350, 20));
  }
}

function draw() {
  background("black");  
  Engine.update(engine);

  for(var pos = 0; pos < division.length; pos = pos + 1) {
    division[pos].display();
  }

  for(var pos = 0; pos < plinkos.length; pos = pos + 1) {
    plinkos[pos].display();
  }

  if(frameCount % 70 == 0) {
    particles.push(new Particle(random(0, 800), 10, 20));
  }

  for(var pos = 0; pos < particles.length; pos = pos + 1) {
    particles[pos].display();
  }

  ground.display();
}