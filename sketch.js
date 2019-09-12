//road variables
let roadImage;

//player variables
let yourImage;
let yPlayer = 370;
let xPlayer = 70;

//car variables
let i = 0;
let yCars = [40, 150, 250];
let xCars = [100, 700, 800]
let carSpeed = [10, 8, 12];
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

//function being used to display the cars
function showCars(){
  image(carImageOne,xCars[0], yCars[0], 80,40);
  image(carImageTwo,xCars[1], yCars[1], 80,40);
  
  image(carImageThree,xCars[2], yCars[2], 80,40);
  
  print(yCars[i], xCars[i]);
  
}

//cars speed
function moveCar(){
xCars[0] -= carSpeed[0];
xCars[1] -= carSpeed[1];  
xCars[2] -= carSpeed[2];  
}

//function that brings the cars back after they vanish

function goBack(){
  if (xCars[0] < -50 ){
  xCar = 950;
  yCar = 50  ;
  }
  if (xCars[1] < -40 ){
  xCarTwo = 745;
  yCarTwo =  150;
  }
  if (xCars[2] < -45 ){
  xCarThree = 805;
  yCarThree = 250;
  }
  
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
