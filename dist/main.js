
const renderer =new Renderer()
const logic =new GoldRush(10, 10)

// getMatrix(){return this.matrix}
// getScore(){return this.score}
renderer.renderBoard(logic.getMatrix())
renderer.renderScores(logic.getScore())

logic.movePlayer(1, 'down')
logic.movePlayer(1, 'right')
logic.movePlayer(1, 'right')
renderer.renderBoard(logic.getMatrix())

