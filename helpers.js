const $startBtn = document.querySelector('#start')
const $pauseBtn = document.querySelector('#pause')
let gameInterval


// function clearCanvas() {
//   ctx.clearRect(0, 0, $canvas.width, $canvas.height)
// }
//
// function generateObstacles() {
//   // if (frames % 150 === 0) ratio -= 10
//   if (frames % ratio === 0) {
//     const min = 100
//     const max = $canvas.height - 100
//     const randomHeight = Math.floor(Math.random() * (max - min))
//     const gap = 100
//     obstacles.push(new Obstacle(0, randomHeight))
//     obstacles.push(
//       new Obstacle(randomHeight + gap, $canvas.height - randomHeight - gap)
//     )
//   }
// }
//
// function drawObstacles() {
//   obstacles.forEach(obs => obs.draw())
// }
//
// function clearObstacles() {
//   obstacles = obstacles.filter(obs => obs.x > -obs.width)
// }
//
// function checkCollitions() {
//   obstacles.forEach(obs => {
//     if (p1.isTouching(obs)) {
//       alert("perdiste")
//     }
//   })
// }
//
// function printScore() {
//   if (frames % 200 === 0 && frames > 500) score++
//   ctx.font = "20px Sans-serif"
//   ctx.fillStyle = "black"
//   ctx.fillText(`Score: ${score}`, $canvas.width - 100, 30)
// }
// // Controls
//
// document.onkeydown = e => {
//   switch (e.key) {
//     case "ArrowUp":
//       return p1.move("UP")
//     case "ArrowDown":
//       return p1.move("DOWN")
//     case "ArrowLeft":
//       return p1.move("LEFT")
//     case "ArrowRight":
//       return p1.move("RIGHT")
//     default:
//       break
//   }
