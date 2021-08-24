const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  c2=new computerbase(width-300,500,180,150)
	c1=new computer(width-280,c2.body.position.y-150,50,180)
p1=new playerbase(200,500,180,150)
p2=new player(285,p1.body.position.y-150,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
c1.display()
c2.display()
p1.display(
p2.display()
)
   //display Player and computerplayer


}
