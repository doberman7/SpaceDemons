function generateInvaders() {
  if (frames % 300 === 0) {
    invaders.push(new Nave5($canvas.width * 0.4, 0))
    invaders.push(new Nave2($canvas.width * 0.4, 0))
  } else if (frames % 400 === 0) {
    invaders.push(new Nave3($canvas.width * 0.4, 0))
    invaders.push(new Nave6($canvas.width * 0.4, 0))
  } else if (frames % 500 === 0) {
    invaders.push(new Nave4($canvas.width * 0.4, 0))
  }
  // invaders.push(new Nave5($canvas.width * 0.4, 0))

}

function drawInvaders() {
  invaders.forEach(obs => obs.draw())

}

//   function generateShoots(){
//       if(p1.shoot("SHOOT")){
//       shoots.push(new Shots(p1.x,p1.y))
//       }
//     }


//   function drawShoots(){
//       if(p1.shoot("SHOOT"))
//     shoots.forEach(obs=>obs.draw())
//   }
