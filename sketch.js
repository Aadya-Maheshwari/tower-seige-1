const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19;
var polygon,poly;
var sling;


function preload(){
  //poly=loadImage("polygon.png");
}

function setup(){
    createCanvas(1600,400);

    engine=Engine.create();
    world=engine.world;

    ground = new Ground(340,315,200,20);
    ground2 = new Ground(500,415,200,20);
 
  //row1
    block1 = new Box(290,290,30,30);
    block2 = new Box(320,290,30,30);
    block3 = new Box(350,290,30,30);
    block4 = new Box(380,290,30,30);

  //row2
    block5 = new Box(308,260,30,30);
    block6 = new Box(338,260,30,30);
    block7 = new Box(368,260,30,30);

  //row3
    block8 = new Box(323,230,30,30);
    block9 = new Box(350,230,30,30);

  //row4
    block10 = new Box(336,200,30,30);

  //stack 2 row 1
   block11 = new Box(500,240,30,30);
   block12 = new Box(530,240,30,30);
   block13 = new Box(560,240,30,30);
   block14 = new Box(590,240,30,30);
   block15 = new Box(620,240,30,30);

  //row 2
   block16 = new Box(530,210,30,30);
   block17 = new Box(560,210,30,30);
   block18 = new Box(590,210,30);

  //row 3
   block19 = new Box(560,180,30,30);

    polygon = new Polygon(100,250,70);

    sling=new SlingShot(polygon.body,{x:100,y:100});

   
}
function draw(){
  background("#A1F5F7");
    ground.display();
    ground2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();


    sling.display();

    polygon.display();
}

function mouseDragged(){
 
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100});
    sling.attached(polygon.body);
  }
}
