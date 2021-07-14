var issImage, bgImage, scImage1, scImage2, scImage3, scImage4;
var iss, sc;
var hasDocked = false;

function preload(){

issImage = loadImage("images/iss.png");
bgImage = loadImage("images/spacebg.jpg");
scImage1 = loadImage("images/spacecraft1.png");
scImage2 = loadImage("images/spacecraft2.png");
scImage3 = loadImage("images/spacecraft3.png");
scImage4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);

 iss = createSprite(250, 130);
iss.addImage(issImage);
iss.scale = 0.5;

sc = createSprite(285, 240);
sc.addImage(scImage1);
sc.scale = 0.20;

}

function draw() {
  background(bgImage);  

if(!hasDocked){
sc.x = sc.x + random(-1, 1)

   if(keyDown(UP_ARROW)){
   sc.y = sc.y - 2;
  }

  if(keyDown(DOWN_ARROW)){
    sc.addImage(scImage2)
    }

  if(keyDown(LEFT_ARROW)){
      sc.x = sc.x - 2;
      sc.addImage(scImage3)
      }

  if(keyDown(RIGHT_ARROW)){
        sc.x = sc.x + 2;
        sc.addImage(scImage4)
        }
}
if(sc.y <= (iss.y + 70)&& sc.x <= (iss.x - 10)){
hasDocked = true;

fill("white")
textSize(35);
text("Docking Successful", 200, 300)
}
  drawSprites();
}