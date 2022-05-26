const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var cuerda
var fruta
var frutaUnida
var conejo, conejoImg
var fondo
var melon
var botonCortar
var botonCortar2
var boton

let engine;
let world;
var ground;

function preload()
{
  conejoImg = loadImage("Rabbit-01.png")
  fondo = loadImage("background.png")
  melon = loadImage("melon.png")
  botonCortar = loadImage("cut_btn.png")
  botonCortar2 = loadImage("cut_button2.png")
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  boton = createImg("cut_btn.png")
  boton.position(220, 30)
  boton.size(50, 50)
  boton.mouseClicked(cortar)
  ground = new Ground(200,680,600,20);
  cuerda = new Rope(6,{x: 245, y: 30});
  fruta = Bodies.circle(300,300,15,15)
  frutaUnida = new liga(cuerda, fruta)
  conejo = createSprite(250, 600, 100, 100)
  conejo.addImage(conejoImg)
  conejo.scale = 0.2

Matter.Composite.add(cuerda.body, fruta)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(fondo, 0, 0,displayWidth + 80, displayHeight)
  push()
  imageMode(CENTER)
    if ( fruta != null ){
    image( melon, fruta.position.x, fruta.position.y, 70 ,70 )
  }
  pop()
   ground.show();
  
  Engine.update(engine);
  
  cuerda.show();
 
   ellipse(fruta.position.x, fruta.position.y,15,15)
   drawSprites();

}
function cortar()
{
cuerda.break();
frutaUnida.soltar();
frutaUnida = null
}