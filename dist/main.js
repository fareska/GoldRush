const renderer = new Renderer()
const logic = new GoldRush(10, 10)

renderer.renderBoard(logic.getMatrix())
renderer.renderScores(logic.getScore())


$(document).on('keypress', function (e) {
    if (e.which === 119||e.which === 87) { 
        console.log(e.which)
        logic.movePlayer(1, 'up')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which === 115||e.which ==83) {  
        logic.movePlayer(1, 'down')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which === 97||e.which ==65) {   
        logic.movePlayer(1, 'left')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which === 100||e.which ==68) {  
        logic.movePlayer(1, 'right')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which ===107||e.which == 75) { 
        logic.movePlayer(2, 'down')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which ===108||e.which == 76) { 
        logic.movePlayer(2, 'right')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which ===106||e.which == 74) { 
        logic.movePlayer(2, 'left')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})

$(document).on('keypress', function (e) {
    if (e.which ===105||e.which == 73) { 
        logic.movePlayer(2, 'up')
    }
    renderer.renderBoard(logic.getMatrix())
    renderer.renderScores(logic.getScore())
})
