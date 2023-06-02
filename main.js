const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const grid = 15;
const paddleHeight = grid * 5; // 80
const maxPaddleY = canvas.height - grid - paddleHeight;

var paddleSpeed = 6; 
var ballSpeed =  5;

const leftPaddle = {
    // start in the middle of the game on the left side
    x: grid * 2,
    y: canvas.height / 2 - paddleHeight / 2, 
    width : grid,
    height: paddleHeight,

    //paddle velocity
    dy: 0
};

//Check for collision between 2 object6s using axis-aligned bounding box (AABB)
function collides(obji,)