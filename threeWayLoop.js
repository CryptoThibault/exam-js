const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

//for
for (i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}
//for of
for (let elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}
// forEach
tab.forEach(element => {
  console.log(`${element}, length: ${element.length}`)
})
