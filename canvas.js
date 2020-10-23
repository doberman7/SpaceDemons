const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const $startBtn = document.querySelector("button")
let intervalId
let frames = 0
// let ratio = 200
let score = 0
let obstacles = []
