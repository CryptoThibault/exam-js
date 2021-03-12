const square = [
  [2, 7, z],
  [9, 5, 1],
  [4, 3, 8],
]

console.log(`This square is ${isMagicSquare(square) ? 'magic' : 'normal'}.`)

function isMagicSquare(tab) {
  check = 0
  for (i = 0; i < tab.length; i++) {
    if (tab[i][0] + tab[i][1] + tab[i][2] === 15) {
      check++
    }
    if (tab[0][i] + tab[1][i] + tab[2][i]) {
      check++
    }
  }
  if (tab[0][0] + tab[1][1] + tab[2][2]) { check++ }
  if (tab[0][2] + tab[1][1] + tab[2][0]) { check++ }
  return check === 8
}