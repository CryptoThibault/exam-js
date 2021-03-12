console.log(`La moyenne est ${average([46, 98, 11, 28, 74])}.`)

function average(tab) {
  var count = 0
  for (i = 0; i < tab.length; i++) {
    count += tab[i]
  }
  return count / tab.length
}
