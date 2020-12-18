class Renderer {
    constructor() {
        this.icons = {
            1 : `<div class="playerOne"><i class="fas fa-laugh"></i></div>`,
            2 : `<div class="playerTwo"><i class="fas fa-laugh"></i></div>`,
            c : `<div class="coins"><i class="fab fa-bitcoin"></i></div>`,
            w : `<div class="obstacle"><i class="fas fa-stop"></i></div>`,
            '.' : `<div class="obstacle"><i class="fas fa-skull-crossbones"></i></div>`,
        }
    }

    renderBoard(matrix) {
        $('#matrixContainer').empty()
        for (let r = 0; r < matrix.length; r++) {
            let line = ``
            for (let c = 0; c < matrix[r].length; c++) {
                if(this.icons[(matrix[r][c])]){
                    line += `${this.icons[(matrix[r][c])]}`
                }else{
                    line += `<div class="val">${matrix[r][c]}</div>`
                }
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
