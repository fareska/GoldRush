class Renderer {
    constructor() {}

    renderBoard(matrix) {
        $('#matrixContainer').empty()
        for (let r = 0; r < matrix.length; r++) {
            let line = ``
            for (let c = 0; c < matrix[r].length; c++) {
                line += `<div class="val">${matrix[r][c]}</div>`
            }
            $('#matrixContainer').append(line)
        }
    }

    renderScores(scoreObj) {
        $('#players').empty().append(`
        <div id="player1" class="player">player1:${scoreObj._1score}</div>
        <div id="player2" class="player">player2:${scoreObj._2score}</div>
        `)
    }
}
