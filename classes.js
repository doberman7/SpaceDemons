class Board{
  constructor(){
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
  draw(){
    // if(this.x <-$canvas.width) this.x = 0      //esto fué para mover a la izquierda
    // this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    // ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
  }

}
// Factory oof ships
class motherShip {
  constructor(health, strength,xAxis, yAxis) {
    this.health = health,
    this.strength = strength,
    this.xAxis = xAxis,
    this.yAxis = yAxis
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
class Nave1 extends motherShip {
  constructor(type, health, strength) {
    super(type, health, strength)
    this.type = type,
      this.health = health,
      this.strength = strength
  }
  // should return "NAME has received DAMAGE points of damage", if the Nave1 is still alive
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
      // return `${this.type} has received ${damage} points of damage`
    } else if (this.health === 0) {
      this.alive = false;
      // return `${this.type} has died in act of combat`

    }
  }

  // battleCry() {
  //   return `Odin Owns You All!`
  // }

}

// nave2
class nave2 extends motherShip {
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health > 0) {
      this.alive = true;
      // return `A nave2 has received ${damage} points of damage`
    } else if (this.health === 0) {
      this.alive = false;
      // return `A nave2 has died in combat`

    }
  }


}

// War
class combat {
  constructor(){
    this.nave1Army=[]
    this.nave2Army=[]
  }
  addNave1(nave1){
    this.nave1Army.push(nave1)
  }
  addnave2(nave2){
    this.nave2Army.push(nave2)
  }
  nave1Attack(){
    nave2.receiveDamage=Nave1.strength
  }
  nave2Attack(){}
  showStatus(){}
}
