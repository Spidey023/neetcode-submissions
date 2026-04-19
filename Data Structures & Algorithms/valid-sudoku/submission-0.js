class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row =  Array.from({ length: 9 }, () => new Set());
        let col = Array.from({ length: 9 }, () => new Set());
        let box =  Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let val = board[i][j];

                if (val == ".") continue;

                 let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (row[i].has(val) || col[j].has(val) || box[boxIndex].has(val)) {
                    return false;
                }

                row[i].add(val);
                col[j].add(val);
                box[boxIndex].add(val);
            }
        }
        return true
    }
}
