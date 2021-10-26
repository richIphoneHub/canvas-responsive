const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

ready(() => { 
  
  //Pintar el canvas
  const canvas = document.querySelector('#canvas');
  pintarCanvas();
  
  
  //Dibujando el canvas
  function pintarCanvas(){
  const ctx = canvas.getContext('2d');

    /* ctx.textAlign = 'center';
    for (var w = 0; w < canvas.width; w += 100) {
      for (var h = 0; h < canvas.height; h += 100) {
        ctx.fillText(w + ',' + h, w, h);
      }
    } */

    //Crear el canvas responsive
    //ctx.canvas.width = innerWidth;
    //ctx.canvas.height = innerHeight;
    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    //console.log(ctx.canvas.clientHeight);

    ctx.fillRect(25,25,100,100);
    ctx.fillRect(25,150,100,100);
    ctx.fillRect(25,275,100,100);
    ctx.fillRect(25,400,100,100);
    ctx.fillRect(25,525,100,100);
    ctx.fillRect(25,650,100,100);
    ctx.fillRect(25,775,100,100);
    ctx.fillRect(25,900,100,100);
    ctx.fillRect(25,1025,100,100);
    ctx.fillRect(25,1150,100,100);
    ctx.fillRect(25,1275,100,100);
  }

  //######################################################//

});