class TicTacToe {
    constructor() {
        this.board = [[null, null, null],[null, null, null],[null, null, null]];
    }

    getCurrentPlayerSymbol() {
        var count = 0;
        for (var i = 0; i<3; i++)
            for (var j = 0; j<3; j++)
                if (this.board[i][j]==null)
                    count++;
        if (count%2 == 1)
            return 'x';
        else
            return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.board[rowIndex][columnIndex] == null) {
            this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        } else
            return this.board[rowIndex][columnIndex];
    }

    isFinished() {
        if (this.getWinner() != null || this.isDraw() == true)
            return true;
        else
            return false;
    }

    getWinner() {
        if(this.board[1][1]!= null) {
            if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2])
                return this.board[0][0];
            else if (this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0])
                return this.board[1][1];
        }
            var temp = null;
            for (var i = 0; i < 3; i++) {
                if (this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2] && this.board[i][1]!= null)
                    temp = this.board[i][1]
                if (this.board[0][i] == this.board[1][i] && this.board[1][i] == this.board[2][i] && this.board[1][i]!= null)
                    temp = this.board[1][i];
            }
        return temp;
    }

    noMoreTurns() {
        var count = 0;
        for (var i = 0; i<3; i++)
            for (var j = 0; j<3; j++)
                if (this.board[i][j]==null)
                    count++;
        if (count == 0)
            return true;
        else
            return false;
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null)
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
