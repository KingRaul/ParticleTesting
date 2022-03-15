const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//keep size upon resize 
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})

//photoshopstyle overunder
ctx.globalCompositeOperation = "destination-over";

//Random 0-360!!!!
hue = Math.random() * 360;


//let size = 20;
let number = 0;
let scale = 20;
let lineW = 0;



function drawFlower(){
    let angle = number * 4;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;
    

    ctx.fillStyle = "hsl("+ hue + ", 100%, 50%)";
    //ctx.strokeStyle = 'black';
    ctx.strokeStyle = "hsl("+ hue + ", 100%, 70%)";
    ctx.lineWidth = (lineW);
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue+=1;
    lineW+=.5;

}
function animate(){
    //draw each frame
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //size +=0.05;

    drawFlower();
    if (number > 420) return;
    requestAnimationFrame(animate);
    //ctx.fillRect(100,100,100,100)
}
animate();

