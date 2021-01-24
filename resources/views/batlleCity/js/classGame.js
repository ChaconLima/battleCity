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