class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                const num = board[r][c];

                // Ignore empty cells
                if (num === ".") {
                    continue;
                }

                // Find which 3x3 box this cell belongs to
                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Check for duplicates
                if (
                    rows[r].has(num) ||
                    cols[c].has(num) ||
                    boxes[box].has(num)
                ) {
                    return false;
                }

                // Add number to all 3 sets
                rows[r].add(num);
                cols[c].add(num);
                boxes[box].add(num);
            }
        }

        return true;
    }
}