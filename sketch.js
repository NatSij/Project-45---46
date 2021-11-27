var knight_run, knight_death, knight_atck, main_img;
var bgimg,bg,ground
var box, ghost, lava;

function preload(){
 main_img = loadAnimation("Images/KR1.gif","Images/KR2.gif","Images/KR3.gif","Images/KR4.gif","Images/KR5.gif","Images/KR6.gif","Images/KR7.gif","Images/KR8.gif","Images/KR9.gif","Images/KR10.gif")
 bgimg = loadAnimation("Images/BG_Real1.gif","Images/BG_Real2.gif","Images/BG_Real3.gif","Images/BG_Real4.gif","Images/BG_Real5.gif","Images/BG_Real6.gif");
 box = loadImage("Images/Box.png");
 ghost = loadAnimation("Images/Ghost 1.gif", "Images/Ghost 2.gif", "Images/Ghost 3.gif", "Images/Ghost 4.gif", "Images/Ghost 5.gif", "Images/Ghost 6.gif");
 knight_death = loadAnimation("Images/KD1.gif", "Images/KD2.gif", "Images/KD3.gif", "Images/KD4.gif", "Images/KD5.gif");
 knight_atck = loadAnimation("Images/KnightA1.gif", "Images/KnightA2.gif", "Images/KnightA3.gif", "Images/KnightA4.gif", "Images/KnightA5.gif");
 lava = loadAnimation("Images/Lava 1.gif", "Images/Lava 2.gif", "Images/Lava 3.gif", "Images/Lava 4.gif", "Images/Lava 5.gif", "Images/Lava 6.gif");
}

function setup() {
  createCanvas(1350, 700);
 bg=createSprite(675, 400, 200, 200)
 bg.addAnimation("moving",bgimg);
 bg.scale=2.17;
 bg.velocityX=-5
 bg.x=bg.width/2
 knight_run = createSprite(200, 650, 10, 10);
 knight_run.addAnimation("walking", main_img);
knight_run.addAnimation("attacking",knight_atck)
  knight_run.scale = 0.3; 

   ground=createSprite(675, 700, 2700, 10);
    ground.visible = false;

}
 
function draw(){
  background(0);  
  console.log(knight_run.y)
  if(bg.x<100){
    bg.x=bg.width/2;
  }
  if(keyDown("right")){
   // knight_run.velocityY=-10;
    knight_run.changeAnimation("attacking",knight_atck)
  }
  
if(keyDown("space") && knight_run.y >= 567){
  knight_run.velocityY=-10;
  knight_run.changeAnimation("walking", main_img)
}

   knight_run.velocityY=knight_run.velocityY+0.5

   knight_run.collide(ground)
  drawSprites();
}