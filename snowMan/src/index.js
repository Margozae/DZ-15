const canvas = document.getElementById('canvas') ;
const ctx = canvas.getContext('2d');


function makeSnowman(x, y, radius) {
    ctx.fillRect(x-radius/2, y-radius*2, radius, radius);
    ctx.fillRect(x-radius, y-radius, radius*2, radius/7);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y+radius*3, radius*2, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y+radius*8, radius*3, 0, 2*Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x-radius/2, y-radius/3, radius/10, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x+radius/2, y-radius/3, radius/10, 0, 2*Math.PI, false);
    ctx.fill();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(x, y, radius/6, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, radius/12, 0, 2*Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y+radius/2, radius/8, 0, Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y+radius*2, radius/5, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y+radius*3, radius/3, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y+radius*4, radius/5, 0, 2*Math.PI, false);
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x+radius*2, y+radius*3);
    ctx.lineTo(x+radius*3, y+radius*6);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x-radius*2, y+radius*3);
    ctx.lineTo(x-radius*3, y+radius*6);
    ctx.stroke();
}


makeSnowman(250, 120, 50);