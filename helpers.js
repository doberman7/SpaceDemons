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
    var direction = collisionCheck(p1, invadr)

    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })

  invadersShots.forEach(invShot=>{
    var direction = shotCheck(p1, invShot)
    if (direction == "left" || direction == "right") {
      p1.touched = true

    } else if (direction == "bottom") {
      p1.touched = true

    } else if (direction == "top") {
      p1.touched = true

    }
  })

  shoots.forEach(bullet=>{
    invaders.forEach(invadr => {

      let invdrDirOfBulletTouch = collisionCheck(invadr,bullet)
      // var direction = shotCheck(p1, invShot)
      if (invdrDirOfBulletTouch == "left" || invdrDirOfBulletTouch == "right") {
        invadr.touched = true

      } else if (invdrDirOfBulletTouch == "bottom") {
        invadr.touched = true

      } else if (invdrDirOfBulletTouch == "top") {
        invadr.touched = true

      }

    })
  })





  if (p1.touched) {
    // alert("You die your score was X ")
    ctx.fillStyle = "white"
    ctx.font = "100px Arial"
    ctx.fillText("Game Over", 140, $canvas.height / 2)
    setInterval(function(){ location.reload(); }, 4000);
    ;
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

//Colision para Invadershots
function shotCheck(p1, invaderShot) {
  var vectorX = p1.x + p1.width / 2 - (invaderShot.x + invaderShot.width / 2)
  var vectorY = p1.y + p1.height / 2 - (invaderShot.y + invaderShot.height / 2)

  var halfWidths = p1.width / 2 + invaderShot.width / 2
  var halfHeights = p1.height / 2 + invaderShot.height / 2

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
