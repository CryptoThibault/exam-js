podium([11, 17, 7, 10, 19, 12, 9])

function podium(tab) {
  var nb1 = 0; var nb2 = 0; var nb3 = 0

  for (i = 0; i < tab.length; i++) {
    if (nb1 < tab[i]) { nb1 = tab[i] }
  }
  for (j = 0; j < tab.length; j++) {
    if (nb2 < tab[j] && tab[j] !== nb1) { nb2 = tab[j] }
  }
  for (k = 0; k < tab.length; k++) {
    if (nb3 < tab[k] && tab[k] !== nb1 && tab[k] !== nb2) { nb3 = tab[k] }
  }

  console.log(`1st: ${nb1} \n2nd: ${nb2} \n3rd: ${nb3}`)
}