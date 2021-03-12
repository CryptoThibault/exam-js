console.log(guess(6, 6))

function guess(userGuess, secret) {
  if (userGuess < secret) { return 'Too small!' }
  else if (userGuess > secret) { return 'Too big!' }
  else { return 'You win' }
}