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
}

function drawInvaders() {
  invaders.forEach(obs => obs.draw())
}

function bounds() {
  // p1.touched = false
  invaders.forEach(invadr => {
    let direction = collisionCheck(p1, invadr)

    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })

  invadersShots.forEach(invShot => {
    let direction = shotCheck(p1, invShot)
    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })

  shoots.forEach(bullet => {
    invaders.forEach(invadr => {
      invadr.touched = false
      let bulletTouchinvdrAt = collisionInvCheck(invadr, bullet)
      if (bulletTouchinvdrAt == "left" || bulletTouchinvdrAt == "right") {

      } else if (bulletTouchinvdrAt == "bottom") {
        scored(invadr)
      } else if (bulletTouchinvdrAt == "top") {


      }

    })
  })

  if (p1.touched) {
    gameOver()
  }

}

function scored(invadr) {
  invadr.touched = true
  score += 1
  ctx.fillText(`Score: ${score}`, 50, 110)
}


function gameOver(){
  ctx.fillStyle = "white"
  ctx.font = "100px Arial"
  ctx.fillText("Game Over", 140, $canvas.height / 2)
  setInterval(function() {
    location.reload();
  }, 4000);;
}

// Colision para invaderaformas
function collisionCheck(p1, invader) {
  let vectorX = p1.x + p1.width / 2 - (invader.x + invader.width / 2)
  let vectorY = p1.y + p1.height / 2 - (invader.y + invader.height / 2)

  let halfWidths = p1.width / 2 + invader.width / 2
  let halfHeights = p1.height / 2 + invader.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    let offsetX = halfWidths - Math.abs(vectorX)
    let offsetY = halfHeights - Math.abs(vectorY)
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

//Colision para Invadershots
function shotCheck(p1, invaderShot) {
  let vectorX = p1.x + p1.width / 2 - (invaderShot.x + invaderShot.width / 2)
  let vectorY = p1.y + p1.height / 2 - (invaderShot.y + invaderShot.height / 2)

  let halfWidths = p1.width / 2 + invaderShot.width / 2
  let halfHeights = p1.height / 2 + invaderShot.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    let offsetX = halfWidths - Math.abs(vectorX)
    let offsetY = halfHeights - Math.abs(vectorY)
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

//Colision para p1 bullets to nivader
function collisionInvCheck(invadr, bullet) {
  let vectorX = invadr.x + invadr.width / 2 - (bullet.x + bullet.width / 2)
  let vectorY = invadr.y + invadr.height / 2 - (bullet.y + bullet.height / 2)

  let halfWidths = invadr.width / 2 + bullet.width / 2
  let halfHeights = invadr.height / 2 + bullet.height / 2

  let collisionDirection = null

  if (Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights) {
    let offsetX = halfWidths - Math.abs(vectorX)
    let offsetY = halfHeights - Math.abs(vectorY)
    if (offsetX < offsetY) {
      if (vectorX > 0) {
        collisionDirection = "left"
        invadr.x += offsetX
      } else {
        collisionDirection = "right"
        invadr.x -= offsetX
      }
    } else {
      if (vectorY > 0) {
        collisionDirection = "top"
        invadr.y += offsetY
      } else {
        collisionDirection = "bottom"
        invadr.y -= offsetY
      }
    }
  }
  return collisionDirection
}
