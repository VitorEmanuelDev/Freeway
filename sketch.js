//road variables
let roadImage;

//player variables
let yourImage;
let yPlayer = 370;
let xPlayer = 70;

//car variables
let i = 0;
let yCars = [40, 150, 250];
let xCars = [100, 700, 800];
let carSpeed = [10, 8, 12];
let xCarLoop = [950, 745, 805];
let yCarLoop = [50, 150, 250];
let carImageOne;
let carImageTwo;
let carImageThree;



//functions being used to get images that are going to be display with the function draw
function preload(){
  roadImage = loadImage("Assets/road.png");
  yourImage = loadImage("Assets/you.png");  
  carImageOne = loadImage("Assets/car1.png");
  carImageTwo = loadImage("Assets/car-2.png");
  carImageThree = loadImage("Assets/car3.png");
  carImage = [carImageOne, carImageTwo, carImageThree]
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
}

//functions used to position and size the player
function showPlayer() {
  image(yourImage, xPlayer,yPlayer, 30, 25);
}

//function being used to display the cars and loop the display instructions
function showCars(){
  for(let i = 0; i < carImage.length; i++){
  image(carImage[i],xCars[i], yCars[i], 80,40);  
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

//player movements
function movePlayer(){
if (keyIsDown (UP_ARROW)){
  yPlayer -= 1;
  }
if (keyIsDown (DOWN_ARROW)){
  yPlayer += 1;
}
if (keyIsDown (RIGHT_ARROW)){
  xPlayer += 1;
}
if (keyIsDown (LEFT_ARROW)){
  xPlayer -= 1;
}
}
