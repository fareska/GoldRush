
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
        this.generateCoins(rows*cols*0.7)
        this.generateObstacles(rows*cols*0.3)    
    }

    generateCoins(limit){
        let counter = 0
        while(counter < limit ){
            let random = this.getRndInteger(0, this.matrix.length-1) // {row:3 col:2} //between 1-4
            if(this.get(random.row, random.col) ==='.'){
                this.alter(random.row,random.col , 'c')
                counter++
            }
        }            
    }
    
    generateObstacles(limit){
        let counter = 0
        while(counter < limit ){
            let random = this.getRndInteger(0, this.matrix.length-1) // {row:3 col:2} //between 1-4
            if(this.isValidObstacle(random)){
                this.alter(random.row,random.col , 'w')
                counter++
            }
        }            
    }

    isValidObstacle(random){
        if(
            this.get(random.row, random.col) != this.firstPlayer 
            &&this.get(random.row, random.col) != this.secondPlayer
        )
        {return true
        } return false
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
            if (this.isValidMove(endCoordinate)){
                this.checkScore(endCoordinate, playerNum)
                this.alter(endCoordinate.y, endCoordinate.x, playerNum)
                this.alter(this.coordinate.y, this.coordinate.x, ' ')
            }  
        } 
    }

    isValidMove(endCoordinate){
        if(
            endCoordinate.x < this.matrix.length 
            && endCoordinate.x>-1 
            && endCoordinate.y < this.matrix.length 
            && endCoordinate.y>-1
            && this.get(endCoordinate.y,endCoordinate.x)!='w'
            && this.get(endCoordinate.y,endCoordinate.x)!= this.firstPlayer
            && this.get(endCoordinate.y,endCoordinate.x)!= this.secondPlayer
        )
        
        {return true
        }else return false
    }

    checkScore(coordinate, playerNum){
        if(this.get(coordinate.y,coordinate.x)==='c') return this.score[`_${playerNum}score`] +=10
        else if(this.get(coordinate.y,coordinate.x)==='.'){
            return this.score[`_${playerNum}score`] -=5
        } else return false
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


