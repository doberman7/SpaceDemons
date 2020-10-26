function generateInvaders() {
    if (frames % 300 === 0) {
      invaders.push(new Nave2($canvas.width*0.4,0))
    } else if(frames % 400 === 0){
        invaders.push(new Nave3($canvas.width*0.4,0))
    } else if(frames % 500 ===0){
        invaders.push(new Nave4($canvas.width*0.4,0))
    }
  }

  function drawInvaders() {
    invaders.forEach(obs => obs.draw())

  }

//  function generateShoots(x,y){
//      shoots.push(new shoot)
//      function drawShoots(){
//       drawShoots.forEach(obs=>obs.draw())   
//     }
//  }