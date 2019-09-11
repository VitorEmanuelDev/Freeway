//road variables
let roadImage;

//player variables
let yourImage;

let yPlayer = 370;
let xPlayer = 70;

//car variables
let carImageOne;
let carImageTwo;
let carImageThree;
let xCar = 700;
let yCar = 40;
let xCarTwo = 200;
let yCarTwo = 260;
let xCarThree = 100;
let yCarThree = 50;

function preload(){
  roadImage = loadImage("road.png");
  yourImage = loadImage("you.png");  
  carImageOne = loadImage("car1.png");
  carImageTwo = loadImage("car-2.png");
  carImageThree = loadImage("car3.png");
}


function setup() {
  createCanvas(500, 400);
} 

function draw() {
  background(roadImage);
  showPlayer();
  showCars();
  moveCar();
  movePlayer();
}

function showPlayer() {
  image(yourImage, xPlayer,yPlayer, 30, 25);
}

function showCars(){
  image(carImageOne,xCar, yCar, 80,40);
  image(carImageTwo,xCarTwo, yCarTwo, 80,40);
}

function moveCar(){
xCar -= 8;
xCarTwo -= 5;  
}

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
