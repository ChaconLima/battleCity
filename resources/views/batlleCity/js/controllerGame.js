
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
