const p1 = new Nave1(10, 10)
const invader = new Nave2(10, 10)
// const invader1 = new MotherShip(10,10,0,0)
let board = new Board
let intervalId
let frames = 0
let ratio = 200
let score = 0
let obstacles = []
let positions =[]
let positionsNave2 =[]
let invaders=[]
let shoots=[]


window.onload = () => {
  // type, health, strength

  function update() {
    frames++
    generateInvaders()
    invaders.forEach(element => {
      element.moveInvader()
    });
    // board.draw();
    // 1. Recalcular el estado del juego
    // 2. Limpiar el canvas
    // clearObstacles()
    // generateObstacles()
    clearCanvas()
    // checkCollitions()
    // 3. Pintar los elementos del juego
    board.draw()
    invader.draw()
    invader.moveInvader()
    invader.checkPosition()
    drawInvaders()
    
    p1.shoot()
    p1.draw()
    
    // p1.shadow()




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
