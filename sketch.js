var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg ;
var leaf, leafimg ;

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png") ;

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX ;

  createApple () ;
  createLeaf () ;
  drawSprites();
}

function createApple () {

if(frameCount % 80 === 0) {
  apple = createSprite(random(20,100),40,5,5) ;
  apple.y = Math.round(random(20,100)) ;
  apple.addImage(appleimg) ;
  apple.lifetime = 120 ;
  apple.scale = 0.05 ;
  apple.velocityY = 3 ;

  apple.depth = rabbit.depth;
rabbit.depth = rabbit.depth + 1;

}  


}

function createLeaf () {

if(frameCount % 160 === 0 ) {
  leaf  = createSprite(random(220,400),40,5,5) ;
  leaf.y = Math.round(random(220,400)) ;
  leaf.addImage(leafimg) ;
  leaf.velocityY = 5 ;
  leaf.scale = 0.05 ;
  leaf.lifetime = 120 ;

  leaf.depth = rabbit.depth;
rabbit.depth = rabbit.depth + 1;
}
}









