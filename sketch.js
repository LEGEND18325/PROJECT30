const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var polygonimg,polygon;
var  slingshot;
function preload() {
    polygonimg=loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    stand1=new Stand(450,350,250,20)
    stand2=new Stand(820,250,200,20)
    block1=new Blocks(370,340,30,40)
    block2=new Blocks(395,340,30,40)
    block3=new Blocks(420,340,30,40)
    block4=new Blocks(445,340,30,40)
    block5=new Blocks(470,340,30,40)
    block6=new Blocks(495,340,30,40)
    block7=new Blocks(520,340,30,40)

    block8=new Blocks(395,330,30,40)
    block9=new Blocks(420,330,30,40)
    block10=new Blocks(445,330,30,40)
    block11=new Blocks(470,330,30,40)
    block12=new Blocks(495,330,30,40)

    block13=new Blocks(420,320,30,40)
    block14=new Blocks(445,320,30,40)
    block15=new Blocks(470,320,30,40)

    block16=new Blocks(445,310,30,40)


    block17=new Blocks(770,240,30,40)
    block18=new Blocks(795,240,30,40)
    block19=new Blocks(820,240,30,40)
    block20=new Blocks(845,240,30,40)
    block21=new Blocks(870,240,30,40)

    block22=new Blocks(795,230,30,40)
    block23=new Blocks(820,230,30,40)
    block24=new Blocks(845,230,30,40)

    block25=new Blocks(820,210,30,40)

    

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon)

  slingshot=new Slingshot(polygon,{x:100,y:200})
  
}


function draw(){
    background(0);
    Engine.update(engine);
   imageMode(CENTER)
   image(polygonimg,polygon.position.x,polygon.position.y,40,40);

    
  
    fill("red")
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("blue")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("green")
    block13.display();
    block14.display();
    block15.display();
    fill("brown")
    block16.display();
    fill("pink")
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("purple")
    block22.display();
    block23.display();
    block24.display();
    fill("yellow")
    block25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    slingshot.attach(polygon)
}