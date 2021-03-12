numberPyramid(8)
numberPyramid(5)

function numberPyramid(nb) {
  for (i = 1; i - 1 < nb; i++) {
    var row = []
    for (j = 0; j < i; j++) {
      row.push(i)
    }
    console.log(row.join(''))
  }
}