let year = 2024

console.log(`${year} est une année ${isLeapYear(year) ? 'bissextille' : 'normal'}.`)

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
}