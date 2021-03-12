const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

//while
var i = 0
while (i < tab.length) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
  i++
}
//do while
var j = 0
do {
  console.log(`${tab[j]}, length: ${tab[j].length}`)
  j++
} while (j < tab.length)