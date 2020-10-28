const p1 = new Nave1(10, 10)
const invader = new Nave2(10, 10)
const invader5 = new Nave5
// const invader1 = new MotherShip(10,10,0,0)
let board = new Board
let intervalId
let frames = 0
let ratio = 200
let score = 0
let obstacles = []
let positions = []
let positionsNave2 = []
let positionsNave5 = []
let positionsNave6 = []
let invaders = []
let shoots = []
let invadersShots=[]


window.onload = () => {
  // type, health, strength

  function update() {
    frames++
    generateInvaders()
    invaders.forEach(element => {
      element.moveInvader()
      element.shoot()
      console.log(invadersShots)
      // console.log(invaders)
    });
    clearCanvas()
    board.draw()
    // invader.draw()
    // invader.moveInvader()
    // invader.checkPosition()
    drawInvaders()
    p1.draw()
    shoots.forEach(element => {
      element.draw()
      element.move()
    })
    invadersShots.forEach(element=>{
      element.draw()
      element.move()
    })
    bounds()
    // drawObstacles()
    // printScore()
  }

  function start() {
    if (intervalId) return
    intervalId = setInterval(update, 1000 / 60)
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
  }

  $startBtn.onclick = start

}
