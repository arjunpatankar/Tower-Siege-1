const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ground1, ground2, ground3;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var ball, ballImg;
var sling;

function preload(){
    ballImg = loadImage("hexagon.png");
}

function setup(){
    createCanvas(1500,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(700,285,250,10);
    ground2 = new Ground(1000,195,220,10);
    ground3 = new Ground(750,600,1500,10);

    //Level One
    block1 = new Block(610,265,30,30);
    block2 = new Block(640,265,30,30);
    block3 = new Block(670,265,30,30);
    block4 = new Block(700,265,30,30);
    block5 = new Block(730,265,30,30);
    block6 = new Block(760,265,30,30);
    block7 = new Block(790,265,30,30);

    //Level Two
    block8 = new Block(640,235,30,30);
    block9 = new Block(670,235,30,30);
    block10 = new Block(700,235,30,30);
    block11 = new Block(730,235,30,30);
    block12 = new Block(760,235,30,30);

    //Level Three
    block13 = new Block(670,205,30,30);
    block14 = new Block(700,205,30,30);
    block15 = new Block(730,205,30,30);

    //Top
    block16 = new Block(700,175,30,30);

    //Level One
    block17 = new Block(940,175,30,30);
    block18 = new Block(970,175,30,30);
    block19 = new Block(1000,175,30,30);
    block20 = new Block(1030,175,30,30);
    block21 = new Block(1060,175,30,30);

    //Level Two
    block22 = new Block(970,145,30,30);
    block23 = new Block(1000,145,30,30);
    block24 = new Block(1030,145,30,30);

    //Top
    block25 = new Block(1000,115,30,30);

    ball = Bodies.circle(50,200,20);
    World.add(world, ball);

    sling = new Slingshot(ball, {x:150, y:160});

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(rgb(146,227,102));

    ground1.display();
    ground2.display();
    ground3.display();

    fill(255,0,0);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill(255,165,0);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(173,255,47);
    block13.display();
    block14.display();
    block15.display();

    fill(0,191,255);
    block16.display();

    fill(244,164,96);
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill(255,255,0)
    block22.display();
    block23.display();
    block24.display();
    
    fill(255,105,180);
    block25.display();

    sling.display();

    fill("gold");
    imageMode(CENTER);
    image(ballImg, ball.position.x, ball.position.y, 40, 40);

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}