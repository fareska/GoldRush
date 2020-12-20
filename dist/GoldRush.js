
class GoldRush extends Matrix {
    constructor(rows, cols) {
        super(rows, cols)
        
        this.score = {
            _1score : 0,
            _2score : 0
        }

        this.move = {
            left: this.moveLeft,
            right: this.moveRight,
            up: this.moveUp,
            down: this.moveDown,
        }
    }
    
    getMatrix(){return this.matrix}
    getScore(){return this.score}

    generateMatrix(rows, cols) {
        this.firstPlayer = 1
        this.secondPlayer = 2
        for (let r = 0; r < rows; r++) {
            this.matrix.push([])
            for (let c = 0; c < cols; c++) {
                this.matrix[r].push('.')
            }
        }
        this.alter(0, 0, this.firstPlayer)
        this.alter(rows - 1, cols - 1,this.secondPlayer)
        this.generateCoins()    
    }

    generateCoins(counter=0){
        while(counter < 5 ){
            let random = this.getRndInteger(0, 4) // {row:3 col:2} //between 1-4
            if(this.get(random.row, random.col) ==='.'){
                this.alter(random.row,random.col , 'c')
                counter++
            }
        }            
    }

    getRndInteger(min, max) {
        let random = {}
        random.row = Math.floor(Math.random() * (max - min + 1) ) + min
        random.col = Math.floor(Math.random() * (max - min + 1) ) + min
        return random
    }

    movePlayer(playerNum, direction) {
        if (playerNum === 1 || 2) {
            this.coordinate = this.findCoordinate(playerNum) 
            this.move.startCoordinate = {x:this.coordinate.x, y:this.coordinate.y}
            
            let endCoordinate = this.move[direction](this.move.startCoordinate)
            
            this.checkScore(endCoordinate, playerNum)
            
            this.alter(endCoordinate.y, endCoordinate.x, playerNum)
            this.alter(this.coordinate.y, this.coordinate.x, 'empty')
        } else {
            alert('Invalid PlayerNum')
        }
    }

    checkScore(coordinate, playerNum){
        if(this.get(coordinate.y,coordinate.x)==='c') return this.score[`_${playerNum}score`] +=10
        else return false
    }

    moveLeft(coordinate) {
        coordinate.x--
        return coordinate
    }
    moveRight(coordinate) {
        coordinate.x++
        return coordinate
    }
    moveUp(coordinate) {
        coordinate.y--
        return coordinate
    }
    moveDown(coordinate) {
        coordinate.y++
        return coordinate
    }
}

const board = new GoldRush(5, 5)
// const board = new GoldRush(5, 5)
// board.print()

board.movePlayer(1, 'down') //this method should be defined inside of GoldRush
// board.print()

board.movePlayer(2, "left")
// // board.print()

board.movePlayer(2, "up")
board.movePlayer(2, "left")
board.movePlayer(2, "left")
board.movePlayer(2, "up")
board.print() 
//prints

console.log(board.score)

