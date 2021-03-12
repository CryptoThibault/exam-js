const MAJORITY = 18

information('Sofiane', 'Akermoun', 39)
information('Alice', 'Liddell', 7)

function information(prename, lastname, age) {
  console.log(`prenom: ${prename} \nnom: ${lastname} \nage: ${age}`)
  if (age < MAJORITY) { var maj = 'serez majeur dans'; var diff = MAJORITY - age }
  else { var maj = 'êtes majeur depuis'; var diff = age - MAJORITY }
  if (diff > 1) { var plur = 's' }
  else { var plur = '' }
  console.log(`vous ${maj} ${diff} an${plur}`)

}