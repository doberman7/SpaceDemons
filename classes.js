class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = './images/fondo.jpg'
    // this.img.onload = () => {
    //   this.draw()
    // }
  }
  draw() {

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)

    // ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
  }

}
// Factory oof ships
class MotherShip {
  constructor(health, strength, x, y) {
      this.health = health,
      this.strength = strength,
      this.x = x,
      this.y = y
    this.width = 79
    this.height = 159
    this.img = new Image()
    this.img.src = "./images/nave1.png"
    this.vel = 10
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
    return
  }

}


// nave 1
class Nave1 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = health,
    this.strength = strength

    this.x = $canvas.width*.4
    this.y = $canvas.height*.9
    this.width = $canvas.width*.25
    this.height = $canvas.height*.1
    this.img = new Image()
    this.img.src = './images/nave2.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;

    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    positions.push([this.x, this.y])
  }
  shadow() {
    ctx.drawImage(this.img, this.x, this.y+8, this.width, this.height)

  }




  move(direction){
    switch (direction) {
      case "UP":
        if (this.y <= 0) return
        return (this.y -= this.vel)
      case "DOWN":
        if (this.y >= $canvas.height - this.height) return
        return (this.y += this.vel)
      case "LEFT":
        if (this.x <= 0) return
        return (this.x -= this.vel)
      case "RIGHT":
        if (this.x >= $canvas.width - this.width) return
        return (this.x += this.vel)
      default:
        throw new Error("Invalid direction")
    }
  }
}


class Nave2 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = health,
    this.strength = strength

    this.x = $canvas.width*.4
    this.y = 0
    this.width = $canvas.width*.25
    this.height = $canvas.height*.1
    this.img = new Image()
    this.img.src = './images/nave1.png'
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
    } else if (this.health === 0) {
      this.alive = false;

    }
  }
  draw() {

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    // ctx.fillStyle = "forestgreen"
    // ctx.fillRect(this.x, this.y, this.width, this.height)

  }
}
