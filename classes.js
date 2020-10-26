class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = './images/fondo.jpg'
    this.img.onload = () => {
      this.draw()
    }
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
      this.width = $canvas.width*.25
      this.height = $canvas.height*.1
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

  randomizer(){
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min) + min)
    return random
  }

  checkPosition(){
    let postion=positionsNave2[positionsNave2.length-1]
    //console.log(postion)
  }

  moveInvader(){
     if(this.y<400 && this.x>0 && this.x<$canvas.width){
       let random=this.randomizer()
      switch (random) {
        case 1:
          this.x-=15
          this.y+=4
          break;
        case 2:
          this.x+=15
          this.y+=3
          break;
          case 3:
            this.x+=25
            this.y--
            break;
          case 4:
            this.x-=20
            this.y--
            break;
            case 5:
              this.x+=5
              this.y++
              break;
              default:
                   break;
      }} else {
        let random=this.randomizer()
      switch (random) {
        case 1:
          this.x-=15
          this.y-=3
          break;
        case 2:
          this.x+=15
          this.y-=3
          break;
          case 3:
            this.x+=15
            this.y-=3
            break;
          case 4:
            this.x-=15
            this.y-=3
            break;
            case 5:
              this.x+=15
              this.y-=3
              break;
              default:
                   break;
      }
     }}
}


// nave 1
class Nave1 extends MotherShip {
  constructor(health, strength) {
    super(health, strength)
    this.health = health,
    this.strength = strength

    this.x = $canvas.width*.4
    this.y = $canvas.height*.9
    // this.width = $canvas.width*.25
    // this.height = $canvas.height*.1
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
    positions.push([this.x, this.y])
  }
  shoot(shoot){
    if(shoot=="SHOOT")
    //switch(shoot){
      //case "SHOOT":
        console.log('pew pew')
        //return ctx.rect(this.x,this.y,4,10)
        //default:
          //break;
        //ctx.generateShoot(this.x, this.y)
    //}
    
    
  }

  move(direction){
    switch (direction) {
      case "UP":
        if (this.y <= 0) return
        return (this.y -= this.vel+30)
      case "DOWN":
        if (this.y >= $canvas.height - this.height) return
        return (this.y += this.vel+30)
      case "LEFT":
        if (this.x < 0) return
        return (this.x -= this.vel+30)
      case "RIGHT":
        if (this.x >= $canvas.width - this.width) return
        return (this.x += this.vel+30)
      default:
        throw new Error("Invalid direction")
    }
  }
}


class Nave2 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = 5,
    this.strength = 1

    this.x = $canvas.width*.4
    this.y = 0
    // this.width = $canvas.width*.25
    // this.height = $canvas.height*.1
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
    positionsNave2.push([this.x, this.y])

  }
}

class Nave3 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = 10
    this.strength = 2

    this.x = $canvas.width*.4
    this.y = 0
    // this.width = $canvas.width*.25
    // this.height = $canvas.height*.1
    this.img = new Image()
    this.img.src = './images/nave3.png'
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
    positionsNave2.push([this.x, this.y])

  }
}

class Nave4 extends MotherShip {
  constructor(health, strength, x, y) {
    super(health, strength)
    this.health = 10
    this.strength = 3

    this.x = $canvas.width*.4
    this.y = 0
    // this.width = $canvas.width*.25
    // this.height = $canvas.height*.1
    this.img = new Image()
    this.img.src = './images/nave4.png'
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
    positionsNave2.push([this.x, this.y])

  }
}