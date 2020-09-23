
var wall, thickness;
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
 
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=color(80,80,80)

 bullet = createSprite(50, 200, 50, 20);
 bullet.shapeColor ="white";

  speed=random (55,90);
   weight=random (400,1500);
   thickness=random (22,83);

   bullet.velocityX=speed;
   
}

function draw() {
  background("LAVENDER");  


if (wall.x-bullet.x<(bullet.width=wall.width)) {
  bullet.velocityX=0
  var deformation=0.5*weight*speed*speed/22509

if (deformation>180) {
  bullet.shapeColor=color(255,0,0)

}
if (deformation <180 && deformation>100) {
  bullet.shapeColor=color(230,230,0)
}
if (deformation<100) {
  bullet.shapeColor=color(0,255,0)
}
}

if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5* weight* speed* speed/(thickness* thicknesss* thickness);
 
  if(damage>10){
     wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
   wall.shapeColor = color(0,255,0);
}
}
  drawSprites();
}


function hasCollided(lBullet,lWall){
  bulletRightEdge = lBullet.x+lBullet.width;
  wallLeftEdge = lWall.x;

  if(bullet.bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;



}
