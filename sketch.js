//road variables
let roadImage;

//player variables
let yourImage;
let yPlayer = 370;
let xPlayer = 70;

//car variables
let yCars = [40, 150, 250];
let i = 0;
let xCars
let carImageOne;
let carImageTwo;
let carImageThree;
let xCar = 1000;

let xCarTwo = 700;

let xCarThree = 800;


//functions being used to get images that are going to be display with the function draw
function preload(){
  roadImage = loadImage("road.png");
  yourImage = loadImage("you.png");  
  carImageOne = loadImage("car1.png");
  carImageTwo = loadImage("car-2.png");
  carImageThree = loadImage("car3.png");
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
  image(carImageOne,xCar, yCars[0], 80,40);
  image(carImageTwo,xCarTwo, yCars[1], 80,40);
  
  image(carImageThree,xCarThree, yCars[2], 80,40);
  print(yCars[i]);
  
}

//cars speed
function moveCar(){
xCar -= 10;
xCarTwo -= 8;  
xCarThree -= 12;  
}

//function that brings the cars back after they vanish

function goBack(){
  if (xCar < -50 ){
  xCar = 950;
  yCar = 50  ;
  }
  if (xCarTwo < -40 ){
  xCarTwo = 745;
  yCarTwo =  150;
  }
  if (xCarThree < -45 ){
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
