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

// let board = new Board()
  // board.draw()
