console.log("Init Game");



senario =  new Senario();
tanke = new Tanke();

function loop(){

    context.fillStyle = '#000';
    context.fillRect(0,0,canvas.width,canvas.height);

    
    
    tanke.render();
    senario.render();
    
    requestAnimationFrame(loop); 
}
loop();