const display = document.getElementById('display')
const buttonsContainer = document.querySelectorAll('#buttons-container button')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')

let firstNumber = '0'
let secondNumber = '0'
let chosenOperator = ''
let hasResult = false


let hasFirstNumber = false
let hasSecondNumber = false


display.innerHTML = 0

function operate(firstNumber, secondNumber, operator){
  const first = Number(firstNumber)
  const second = Number(secondNumber)

  switch(operator){
    case 'add':
      return first + second
    case 'subtract':
      return first - second
    case 'multiply':
      return first * second
    case 'divide':
      return first / second
  }
}



buttonsContainer.forEach((button) => {
  const number = button.getAttribute('number')
  const operator = button.getAttribute('operator')
  const decimal = button.getAttribute('decimal')

  button.addEventListener('click', () => {
    if(decimal){
      if(!display.innerHTML.includes('.')){
        display.innerHTML += decimal
      }
    }

    if(number){
      if(!hasFirstNumber){
        if(display.innerHTML === '0'){
          display.innerHTML = number
        }else{
          display.innerHTML += number
        }
        firstNumber = display.innerHTML
      }

      if(hasFirstNumber){
        if(display.innerHTML === '0'){
          display.innerHTML = number
        }else{
          if(hasResult){
            display.innerHTML = number
            hasResult = false
          }else{
            display.innerHTML += number
          }
        }
        secondNumber = display.innerHTML
      }

      
    }


    if(operator){
      if(firstNumber !== '0' && secondNumber !== '0'){
        
        const res = String(operate(firstNumber, secondNumber, chosenOperator))
        display.innerHTML = res
        firstNumber = res
        secondNumber = '0'
        chosenOperator = operator
        hasResult = true
      }

      if(firstNumber !== '0' && secondNumber === '0' && !hasResult){
        chosenOperator = operator
        display.innerHTML = 0
        hasFirstNumber = true
      }
    }

    console.log(`num1: ${firstNumber}, num2: ${secondNumber}, opr: ${chosenOperator}, hasRes: ${hasResult}, hasFirstNum: ${hasFirstNumber}, hasSecNum: ${hasSecondNumber}`)
  })
})


equal.addEventListener('click', () => {
  display.innerHTML = String(operate(firstNumber, secondNumber, chosenOperator))
  firstNumber = display.innerHTML
  secondNumber = '0'
  hasResult = true
})

clear.addEventListener('click', () => {
  display.innerHTML = '0'
  firstNumber = '0'
  secondNumber = '0'
  chosenOperator = ''
  hasFirstNumber = false
  hasResult = false
})



