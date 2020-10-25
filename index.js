const p1 = new Nave1(10,10,0,0)
const invader1 = new MotherShip(10,10,0,0)
let intervalId
let frames = 0
let ratio = 200
let score = 0
let obstacles = []

// type, health, strength

function update() {
  frames++
  // 1. Recalcular el estado del juego
  // 2. Limpiar el canvas
  // clearObstacles()
  // generateObstacles()
  // clearCanvas()
  // checkCollitions()
  // 3. Pintar los elementos del juego
  p1.draw()
  // drawObstacles()
  // printScore()
}

function start() {
  alert("s")
  if (intervalId) return
  intervalId = setInterval(update, 1000 / 60)
}

$startBtn.onclick = start
