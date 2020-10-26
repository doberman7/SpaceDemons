function generateInvaders() {
    if (frames % 300 === 0) {
      invadersNave2.push(new Nave2($canvas.width*0.4,0))
    }
  }

  function drawInvaders() {
    invadersNave2.forEach(obs => obs.draw())
  }

// function generateShoots(x,y){
//     shoots.push(new shoot)

//     function drawShoots(){
//      drawShoots.forEach(obs=>obs.draw())   
//     }
// }