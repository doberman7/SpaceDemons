function generateInvaders() {
    if (frames % 300 === 0) {
    //   const minY = -$canvas.height + 100
    //   const maxY = 0
    //   const minGap = 120
    //   const maxGap = 160
    //   const randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap)
    //   const randomY = Math.floor(Math.random() * (maxY - minY) + minY)
      invadersNave2.push(new Nave2($canvas.width*0.4,0))
    }
  }

  function drawInvaders() {
    invadersNave2.forEach(obs => obs.draw())
  }