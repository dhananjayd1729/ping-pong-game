document.addEventListener('DOMContentLoaded', ()=>{
    let pingPongTable = document.getElementById('ping-pong-table');
    let paddle = document.getElementById('paddle');
    let ball = document.getElementById('ball');
    let ballX = paddle.offsetLeft + paddle.offsetWidth;
    let ballY = 0;
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

        //collision logic
        if(ballX < paddle.offsetLeft + paddle.offsetWidth 
            && ballY > paddle.offsetTop
            && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight ) {
                dx = dx*(-1);
            }

        if(ballX > pingPongTable.offsetWidth-ball.offsetWidth || ballX <= 0) dx = dx*(-1);
        if(ballY > pingPongTable.offsetHeight-ball.offsetHeight || ballY <= 0) dy = dy*(-1);
    }, 4);


    let paddleY = 0;
    let dPy = 5;
    document.addEventListener('keydown',(event)=>{
        event.preventDefault(); //prevents default behaviour of 'event'
        if(event.keyCode == 38 && paddleY > 0){
            //up keypress
            paddleY = paddleY + (-1)*dPy; 
        }else if(event.keyCode == 40 && paddleY < pingPongTable.offsetHeight - paddle.offsetHeight){
            //down keypress
            paddleY = paddleY + dPy;
        }
        paddle.style.top = `${paddleY}px`;
    })
})