const classes = require("classes.js"),
debugger

let intervalId
let frames = 0
let ratio = 200
let score = 0
let obstacles = []

function update() {
  frames++
  // 1. Recalcular el estado del juego
  // 2. Limpiar el canvas
  clearObstacles()
  generateObstacles()
  clearCanvas()
  checkCollitions()
  // 3. Pintar los elementos del juego
  p1.draw()
  drawObstacles()
  printScore()
}
