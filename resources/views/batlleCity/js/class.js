const sprites = new Image();
sprites.src='batlleCity/data/sprite/sprite.png';

const canvas = document.querySelector('canvas');
const context= canvas.getContext('2d');



class Senario
{
    render()
    {
        var positionY = 0;
        for(var y = 0; y<26 ;y++)
        {
            var positionX = 0;
            for(var x = 0; x<26 ;x++)
            {
                if( lvl[y][x]!=0 )
                {
                    context.drawImage
                    (
                        sprites,
                        serario_sprites[lvl[y][x]].spriteX, serario_sprites[lvl[y][x]].spriteY,      
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

class Tanke
{
    constructor()
    {
        this.spriteX = 0; this.spriteY = 0;      //posição do sprite dentro da imagem com x, y
        this.width=  0; this.height= 0;    //tamanho da sprite 
        this.positonX= 0; this.positonY= 0;    //posição que irá plotar no canvas
        this.plot_Whidt= 0; this.plot_Height= 0;     //tamanho que irá platar no canvas

        this.spriteTanke = 0; // informação de qual esprite esse tnake está utilizando
        this.movemen=false; // ele está em estado de movimento
        this.firing = false;// ele está disparando tiros
    }
       
    setData(informationTanke){
        this.spriteX = informationTanke.spriteX; this.spriteY = 0; 
        this.width=  0; this.height= 0;    
        this.positonX= 0; this.positonY= 0;   
        this.plot_Whidt= 0; this.plot_Height= 0;  
           
        this.spriteTanke = 0; 
        this.movemen=false; 
        this.firing = false;
    }

    render()
    {
        context.drawImage
        (
            sprites,
            0, 0,      
            32,32,   
            200,220,    
            32,32     
        );
    }
    
}