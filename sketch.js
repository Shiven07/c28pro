var stone, tree, ground, boy, boyIMG, launcherOBJ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
boyIMG = loadImage("sprites/boy.png"); 
}
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone(100, 150, 40);
    tree = new Tree(1000, 450);
    mango1 = new Mango(1000, 250, 30);
    mango2 = new Mango(900, 120, 30);
    mango3 = new Mango(1050, 130, 30);
    mango4 = new Mango(850, 210, 30);
    launcherOBJ = new Launcher(stone.body, {x:200 , y: 300});
	Engine.run(engine);
  
}


function draw() {
  background("green");
  rectMode(CENTER);
  Engine.update(engine);
  image(boyIMG, 100, 350, 250, 250);
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  launcherOBJ.display();
detectCollision(stone, mango1);
detectCollision(stone, mango2);
detectCollision(stone, mango3);
detectCollision(stone, mango4);
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherOBJ.fly();

}
function detectCollision(stone, mango) {
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

if(distance<=mango.r + stone.r) {

Matter.Body.setStatic(mango.body, false);

}
}

function keyPressed () {
if (keyCode === 32)
Matter.Body.setPosition(stone.body, {x:235, y:420})
launcherOBJ.attach(stone.body);
}