console.log("Init Game");



senario =  new Senario();

let frameCurrent = false;
function framesGame()
{
    if(frameCurrent == false)
    {
        frameCurrent=true;
        return
    }
    else
    {
        frameCurrent=false;
        return
    }
}

function renderPlayers()
{
    for( playerId in game.dataGame.players_defend)
    {
        const dataPlayer = game.dataGame.players_defend[playerId];

        player = new Player(dataPlayer,frameCurrent);
        player.render();
    }
    
}




var fps, fpsInterval, startTime, now, then, elapsed;
// iniciar as variaveis de tempo e começar a animação
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    loop();
}

let numberFrame = 0;
function loop(){

    
    context.fillStyle = '#000';
    context.fillRect(0,0,canvas.width,canvas.height);

    
    
    renderPlayers();
    senario.render(frameCurrent);
    
    requestAnimationFrame(loop);
    
    now = Date.now();
    elapsed = now - then;


    if (elapsed > fpsInterval) {
        framesGame();
        then = now - (elapsed % fpsInterval);
    }
}

startAnimating(5);