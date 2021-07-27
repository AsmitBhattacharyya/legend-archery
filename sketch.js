const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var canvas, tower;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
}


function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower();

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);


  Engine.update(engine);
  tower.display();
}