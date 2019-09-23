//road variables
let roadImage;

//player variables
let yourImage;
let yPlayer = 370;
let xPlayer = 70;
let collision = false;

//car variables
let i = 0;
let yCars = [40, 150, 260, 90, 210, 310];
let xCars = [600, 700, 800,640, 780, 820];
let carSpeed = [10, 8, 12, 6, 4, 14];
let xCarLoop = [950, 745, 805, 900, 730, 810];
let yCarLoop = [40, 150, 260, 90, 210, 310];
let carImageOne;
let carImageTwo;
let carImageThree;
let carWidth = 80;
let carHeigth = 40;



//functions being used to get images that are going to be display with the function draw
function preload(){
  roadImage = loadImage("road.png");
  yourImage = loadImage("you.png");  
  carImageOne = loadImage("car1.png");
  carImageTwo = loadImage("car-2.png");
  carImageThree = loadImage("car3.png");
  carImage = [carImageThree, carImageOne,carImageThree, carImageTwo,carImageTwo,carImageOne]
}

//withou this, nothing can be drawn
function setup() {
  createCanvas(500, 400);
} 

//function used to display all elements being treated by functions and execute their behaviours
function draw() {
  background(roadImage);
  showPlayer();
  showCars();
  moveCar();
  movePlayer();
  goBack();
  verifyCollision();
}

//functions used to position and size the player
function showPlayer() {
  image(yourImage, xPlayer,yPlayer, 30, 25);
}

//function being used to display the cars and loop the display instructions
function showCars(){
  for(let i = 0; i < carImage.length; i++){
  image(carImage[i],xCars[i], yCars[i],carWidth,carHeigth);  
  print(yCars[i], xCars[i]);
  }
}

//cars speed
function moveCar(){
  for (let i = 0; i < carImage.length; i++) {
xCars[i] -= carSpeed[i];
  } 
}

//function that brings the cars back after they vanish

function goBack(){
  for (let i = 0; i < carImage.length; i++){
  if (CarDisappeared(xCars[i])){
  xCars[i] = xCarLoop[i];
  }
}  
}

function CarDisappeared(xCars){
  return xCars < -50;
}

function verifyCollision(){
 //collideRectCircle = function (rx, ry, rw, rh, cx, cy, diameter)
  for(let i = 0; i < carImage.length; i++){
  collision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeigth, xPlayer, yPlayer, 15)
    if(collision){
    collided();
    }
  }
}

function collided(){
  yPlayer = 370;
}

//player movements
function movePlayer(){
if (keyIsDown (UP_ARROW)){
  yPlayer -= 3;
  }
if (keyIsDown (DOWN_ARROW)){
  yPlayer += 3;
}
if (keyIsDown (RIGHT_ARROW)){
  xPlayer += 3;
}
if (keyIsDown (LEFT_ARROW)){
  xPlayer -= 3;
}
}
