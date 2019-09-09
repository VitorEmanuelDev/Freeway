let roadImage;
let yourImage;
let carImageOne;

function preload(){
  roadImage = loadImage("Assets/road.png");
  yourImage = loadImage("Assets/you.png");  
  carImageOne = loadImage("Assets/car1.png");
}


function setup() {
  createCanvas(500, 400);
} 

function draw() {
  background(roadImage);
  image(yourImage, 200, 370, 30, 25)
  image(carImageOne,420, 40, 80,40);
  
}
