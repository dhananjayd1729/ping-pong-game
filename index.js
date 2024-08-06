document.addEventListener('DOMContentLoaded', ()=>{
    let pingPongTable = document.getElementById('ping-pong-table')
    let ball = document.getElementById('ball');
    let ballX = ball.offsetWidth;
    let ballY = ball.offsetHeight;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    //displacement of a ball in both x & y direction
    let dx = 2;
    let dy = 2;
    setInterval(() => {
        ballX = ballX + dx;
        ballY = ballY + dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
        if(ballX > pingPongTable.offsetWidth-ball.offsetWidth || ballX < 0) dx = -dx;
        if(ballY > pingPongTable.offsetHeight-ball.offsetHeight || ballY < 0) dy = -dy;
    }, 1);
})