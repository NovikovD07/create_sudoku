/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const boardSolved = [];
  for (let i =0; i < boardString.length; i = i+9) {
    const a = i
    const b = i+9 
    boardSolved.push(boardString.slice(a, b).split(''))
  }
  for (let i = 0; i < boardSolved.length; i++) { // это строки
    for (let j = 0; j < boardSolved[i].length; j++) { // это элементы строки
      if (boardSolved[i][j] === '-') {
        for (let q = 1; q < 10; q++) {
          if (!boardSolved[i].includes(String(q))) {
            boardSolved[i][j] = String(q).trim()
            break
          }
        }
      }
    }
  }
  return boardSolved
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
return true
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  board.pop()
  console.table(board)
return '\n'
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
// console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));