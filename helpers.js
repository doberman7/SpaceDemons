function generateInvaders() {
    if (frames % 300 === 0) {
    invaders.push(new Nave5($canvas.width * 0.4, 0))
      invaders.push(new Nave2($canvas.width*0.4,0))
    } else if(frames % 400 === 0){
        invaders.push(new Nave3($canvas.width*0.4,0))
        invaders.push(new Nave6($canvas.width * 0.4, 0))
    } else if(frames % 500 ===0){
        invaders.push(new Nave4($canvas.width*0.4,0))
    }
  }

  function drawInvaders() {
    invaders.forEach(obs => obs.draw())

  }

  function bounds() {
    p1.grounded = false
    invaders.forEach(invadr => {
      var direction = collisionCheck(p1, invadr)
      if (direction == "left" || direction == "right") {
        alert("toque lateral")
        // p1.velX = 0
      } else if (direction == "bottom") {
        // p1.jumping = false
        alert("toque sup")
        p1.grounded = true
      } else if (direction == "top") {
        alert("toque inf" )
        p1.velY *= -1
      }
    })

    if (p1.grounded) {
      p1.velY = 0
    }
  }
  // Colision para invaderaformas
  function collisionCheck(p1, invader) {
    var vectorX = p1.x + p1.width / 2 - (invader.x + invader.width / 2)
    var vectorY = p1.y + p1.height / 2 - (invader.y + invader.height / 2)

    var halfWidths = p1.width / 2 + invader.width / 2
    var halfHeights = p1.height / 2 + invader.height / 2

    var collisionDirection = null

    if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
      var offsetX = halfWidths - Math.abs(vectorX)
      var offsetY = halfHeights - Math.abs(vectorY)
      if (offsetX < offsetY) {
        if (vectorX > 0) {
          collisionDirection = "left"
          p1.x += offsetX
        } else {
          collisionDirection = "right"
          p1.x -= offsetX
        }
      } else {
        if (vectorY > 0) {
          collisionDirection = "top"
          p1.y += offsetY
        } else {
          collisionDirection = "bottom"
          p1.y -= offsetY
        }
      }
    }
    return collisionDirection
  }
