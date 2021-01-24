// const lvl =[
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
//     [1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1],
//     [2,2,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,2,2],
//     [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
//     [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
// ]
const lvl = [
    [0,0,0,0,0,0,5,5,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,5,5,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,0,5,5,0,0,0,0,2,2,0,0,1,1,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,5,5,0,0,1,1,2,2,0,0,1,1,0,0,1,1,0,0,0,0],
    [2,2,0,0,1,1,5,5,0,0,2,2,0,0,0,0,1,1,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,5,5,0,0,2,2,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,1,1,5,5,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,5,5,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,1,1,5,5,5,5,0,0,5,5,5,5,5,5,5,5,0,0,0,0,1,1],
    [1,1,0,0,1,1,5,5,5,5,0,0,5,5,5,5,5,5,5,5,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,5,5,0,0,2,2,2,2],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,4,4,0,0,5,5,0,0,0,0,0,0],
    [1,1,1,1,0,1,1,1,0,0,2,2,4,4,4,4,4,4,5,5,0,0,0,0,0,0],
    [1,1,1,1,0,1,1,1,0,0,2,2,4,4,4,4,4,4,5,5,0,0,1,1,1,1],
    [1,1,0,0,0,1,0,0,0,0,1,1,4,4,4,4,4,4,5,5,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,1,4,4,4,4,4,4,5,5,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0,4,4,0,0,5,5,0,0,4,4,0,0],
    [0,0,2,2,0,0,0,0,0,0,1,1,0,0,4,4,0,0,5,5,0,0,4,4,0,0],
    [0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,4,4,4,4,4,4],
    [0,0,1,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4],
    [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,5,5,4,4,4,4,4,4],
    [0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,5,5,4,4,4,4,4,4],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,5,5,0,0,4,4,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,5,5,0,0,4,4,0,0]
]
const serario_sprites = 
{
    '0':{spriteX:0,spriteY:336},
    '1':{spriteX:0,spriteY:256},
    '2':{spriteX:0,spriteY:272},
    '3':{spriteX:0,spriteY:288},
    '4':{spriteX:0,spriteY:304},
    '5':{spriteX:0,spriteY:320},
    '6':{spriteX:0,spriteY:336}
}
const tankes_sprites = 
{
    tanks:
    {
        'tank_0':
        {
            'first':
            {
                'up': {spriteX:0,spriteY:0},
                'right': {spriteX:0,spriteY:32},
                'down': {spriteX:0,spriteY:64},
                'left': {spriteX:0,spriteY:96}
            },
            'second':  
            {
                'up':{spriteX:32,spriteY:0},
                'right':{spriteX:32,spriteY:256},
                'down':{spriteX:32,spriteY:256},
                'left':{spriteX:32,spriteY:256}
            }
        },
        'tank_1':
        {
            'first':
            {
                'up': {spriteX:0,spriteY:0},
                'right': {spriteX:0,spriteY:32},
                'down': {spriteX:0,spriteY:64},
                'left': {spriteX:0,spriteY:96}
            },
            'second':  
            {
                'up':{spriteX:32,spriteY:0},
                'right':{spriteX:32,spriteY:256},
                'down':{spriteX:32,spriteY:256},
                'left':{spriteX:32,spriteY:256}
            }
        }
    }
}
// console.log(tankes_sprites);
// console.log(dataGame);

const sprites = new Image();
sprites.src='batlleCity/data/sprite/sprite.png';

const canvas = document.querySelector('canvas');
const context= canvas.getContext('2d');



class Senario
{
    render(frameCurrent)
    {
        var positionY = 0;
        for(var y = 0; y<26 ;y++)
        {
            var positionX = 0;
            for(var x = 0; x<26 ;x++)
            {
                if( lvl[y][x]!=0 )
                {
                    if( lvl[y][x] == 5)
                    {
                        switch (frameCurrent) {
                            case true:
                                var spriteX =  serario_sprites[lvl[y][x]].spriteX
                                var spriteY = serario_sprites[lvl[y][x]].spriteY
                                break;
                            case false:
                                var spriteX =  serario_sprites['6'].spriteX
                                var spriteY = serario_sprites['6'].spriteY
                                break;
                        
                            default:
                                console.log('Error')
                        }
                    }
                    else
                    {
                        var spriteX = serario_sprites[lvl[y][x]].spriteX
                        var spriteY = serario_sprites[lvl[y][x]].spriteY
                    }
                
                    context.drawImage
                    (
                        sprites,
                        spriteX, spriteY,      
                        16,16,   
                        positionX,positionY,    
                        16,16     
                    );
                }
                positionX+=16;
            }
            positionY+=16;
        }
    }
};

class Player
{
    constructor(dataPlayer,frameCurrent)
    {
        switch (dataPlayer.movemen) {
            case true:
                if(frameCurrent == true)
                {
                    this.frame = 'first';
                }
                else
                {
                    this.frame = 'second';
                }
                break;
            case false:
                this.frame = 'first';
                break;
        
            default:
                console.log('Error')
        }

        this.spriteX = tankes_sprites.tanks[dataPlayer.spriteTanke][this.frame][dataPlayer.sense].spriteX;
        this.spriteY = tankes_sprites.tanks[dataPlayer.spriteTanke][this.frame][dataPlayer.sense].spriteY;
        this.width = 32;
        this.height = 32;   
        this.positonX = dataPlayer.positonX;
        this.positonY = dataPlayer.positonY;
        this.proportionWhidt =  this.width*dataPlayer.proportionWhidt;
        this.proportionHeight = this.height*dataPlayer.proportionHeight;

    }
    render()
    {
        context.drawImage
        (
            sprites,
            this.spriteX, this.spriteY,      
            this.width,this.height,   
            this.positonX,this.positonY,    
            this.proportionWhidt,this.proportionHeight     
        );
    }
}

function createGame()
{
    const dataGame =
    {
        players_defend:
        {
            'player_1':
            {
                spriteTanke:'tank_0',
                sense:'right',
                positonX: 0 ,
                positonY: 0,
                proportionHeight:1,
                proportionWhidt:1,
                movemen:false, 
                firing:false,
            },
            'player_2':
            {
                spriteTanke:'tank_0',
                sense:'up', 
                positonX: 128,
                positonY: 100,
                proportionHeight:1,
                proportionWhidt:1,
                movemen:true, 
                firing:false,
            }
        },
        players_attack:
        {
            'player_1':
            {
                spriteTanke:'tank_0',
                sense:'up',
                positonX: 0 ,
                positonY: 0,
                proportionHeight:1,
                proportionWhidt:1,
                movemen:false, 
                firing:false,
            },
            'player_2':
            {
                spriteTanke:'tank_0',
                sense:'up', 
                positonX: 100,
                positonY: 100,
                proportionHeight:1,
                proportionWhidt:1,
                movemen:true, 
                firing:false,
            }
        }
    }
    function movePlayer(command)
    {
        console.log(`game.movePlayer() -> ${command.playerId} with ${command.keyPressed}`);

        const player = dataGame.players_defend[command.playerId];
        const keyPressed = command.keyPressed;

        const acceptedMoves = 
        {
            'ArrowUp': function ArrowUp(player){
                console.log('game.movePlayer.ArrouUp() -> Moving player Up');
            },
            'ArrowRight': function ArrowRight(player){
                console.log('game.movePlayer.ArrowRight() -> Moving player Right');
            },

            'ArrowDown': function ArrowDown(player){
                console.log('game.movePlayer.ArrowDown() -> Moving player Down');
            },

            'ArrowLeft': function ArrowLeft(player){
                console.log('game.movePlayer.ArrowLeft() -> Moving player Left');
            },
        }

        const moveFunction = acceptedMoves[keyPressed];
        if(moveFunction!=null)
        {
            moveFunction(player);
        }
        
    }

    return{
        movePlayer,
        dataGame
    }
}

function createKeyboardListener()
{
    const state = 
    {
        observers: []
    }

    function subcribe(observerFunction)
    {
        state.observers.push(observerFunction);
    }

    function notifyAll(command)
    {
        console.log(`keyboardListener -> Notifying ${state.observers.length} observers`);

        for( const observerFunction of state.observers)
        {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event)
    {
        const keyPressed = event.key;
        const command ={
            playerId:'player_1',
            keyPressed
        }
    
        notifyAll(command);
    }

    return{
        subcribe,
    }
}

const game = createGame();
const keyboardListener =  createKeyboardListener();
keyboardListener.subcribe(game.movePlayer);

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