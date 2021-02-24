
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Roof(350,150,400,10);

	bob1=new Bob(190,150,40);
	bob2=new Bob(270,150,40);
	bob3=new Bob(350,150,40);
	bob4=new Bob(430,150,40);
	bob5=new Bob(510,150,40);
	

	hanger1=new Hanger(bob1.body,{x:190,y:150});
	hanger2=new Hanger(bob2.body,{x:270,y:150});
	hanger3=new Hanger(bob3.body,{x:350,y:150});
	hanger4=new Hanger(bob4.body,{x:430,y:150});
	hanger5=new Hanger(bob5.body,{x:510,y:150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
 
 
 
 
 
  drawSprites();
 
	ground.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();


	hanger1.display();
	hanger2.display();
	hanger3.display();
	hanger4.display();
	hanger5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setPosition(bob1.body,{x:150,y:200});
	}
}



