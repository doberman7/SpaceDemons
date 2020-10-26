document.onkeydown = e => {
  switch (e.key) {
    case "ArrowUp":
      return p1.move("UP")
    case "ArrowDown":
      return p1.move("DOWN")
    case "ArrowLeft":
      return p1.move("LEFT")
    case "ArrowRight":
      return p1.move("RIGHT")
    case "Space":
      return p1.shoot("SHOOT")
    default:
      break
  }
}
