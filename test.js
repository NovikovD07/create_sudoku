const newBoard = 
[ [ '1', '-', '5', '8', '-', '2', '-', '-', '-' ],
  [ '-', '9', '-', '-', '7', '6', '4', '-', '5' ],
  [ '2', '-', '-', '4', '-', '-', '8', '1', '9' ],
  [ '-', '1', '9', '-', '-', '7', '3', '-', '6' ],
  [ '7', '6', '2', '-', '8', '3', '-', '9', '-' ],
  [ '-', '-', '-', '-', '6', '1', '-', '5', '-' ],
  [ '-', '-', '7', '6', '-', '-', '-', '3', '-' ],
  [ '4', '3', '-', '-', '2', '-', '5', '-', '1' ],
  [ '6', '-', '-', '3', '-', '8', '9', '-', '-' ] ]

function foo() {
    for (let i = 0; i < newBoard.length; i++) { // это строки
      for (let j = 0; j < newBoard[i].length; j++) { // это элементы строки
        if (newBoard[i][j] === '-') {
          for (let q = 1; q < 10; q++) {
            if (!newBoard[i].includes(String(q))) {
              newBoard[i][j] = String(q)
              break
            }
          }
        }
      }
    }
    return newBoard
}
// console.log(foo(newBoard))