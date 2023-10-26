let rotationX=0;
let rotationY=0;

const cube = document.querySelector('.box-area');

function rotateXAxis(n){
    rotationX = rotationX + (90*n);
    console.log(rotationX);
}