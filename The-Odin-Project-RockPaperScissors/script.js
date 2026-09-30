const playButton = document.getElementById('play')

let humanscore = 0
let computerscore = 0

console.log('Hello world')

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
} 

function getHumanChoice(){
  const input = prompt('Rock, Paper, or Scissors?')
  input.toLowerCase().trim()
  return input
}

function playRound(humanChoice, computeChoice){
  if(humanChoice === computeChoice){
    return 'tie'
  } else if (humanChoice === 'rock' && computeChoice === 'paper'){
    computerscore++
    return 'lose'
  } else if (humanChoice === 'paper' && computeChoice === 'scissors'){
    computerscore++
    return 'lose'
  } else if (humanChoice === 'scissors' && computeChoice === 'rock'){
    computerscore++
    return 'lose'
  } else {
    humanscore++
    return 'win'
  }
}

function playGame(){
  for (let i = 0; i < 5; i++){
    console.log(`Round ${i + 1}`)
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    const result = playRound(humanChoice, computerChoice)
    console.log(result)
  }
  console.log(`Game Over\nHuman: ${humanscore}\nComputer: ${computerscore}\n`)

  if (humanscore > computerscore){
    console.log(`You win!`)
  } else if (computerscore === humanscore){
    console.log(`Its a tie!`)
  } else {
    console.log(`You Lose`)
  }
}

playButton.addEventListener('click', playGame)