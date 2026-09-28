const display = document.getElementById('display')
const buttonsContainer = document.querySelectorAll('#buttons-container button')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')

let firstNumber = null
let secondNumber = null
let chosenOperator = null


let waitingForSecondNumber = false  

let evaluated = false


display.textContent = '0'

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
      if(second === 0){
        return 'Error: Cannot divide by 0'
      }
      return first / second
  }
}



buttonsContainer.forEach((button) => {
  const number = button.getAttribute('number')
  const operator = button.getAttribute('operator')
  const decimal = button.getAttribute('decimal')

  button.addEventListener('click', () => {
    if(decimal){
      if(!display.textContent.includes('.')){
        
        if(secondNumber === null && chosenOperator === null){
          firstNumber += '.'
          display.textContent = firstNumber
        }else{
          secondNumber += '.'
          display.textContent = secondNumber
        }
      }
      
    }

    if(number){

      if(evaluated){
        firstNumber = null
        secondNumber = null
        chosenOperator = null
        evaluated = false
        waitingForSecondNumber = false
        display.textContent = '0'
      }
  
      if(waitingForSecondNumber){
        secondNumber = number
        waitingForSecondNumber = false
      }else if(secondNumber === null){
  
        if(firstNumber === null){
          firstNumber = number
  
        }else{
          if(firstNumber === '0'){
            firstNumber = number
          }else{
            firstNumber += number
          }
        }
        display.textContent = firstNumber

        return
      }else{
        if(secondNumber === '0'){
          secondNumber = number
        }else{
          secondNumber += number
        }
      }
      display.textContent = secondNumber
    }


    if(operator){
      if(evaluated){
        evaluated = false
        chosenOperator = operator
        waitingForSecondNumber = true 
        return
      }

      if(firstNumber === null) return

      if(chosenOperator && secondNumber !== null){
        const res = operate(firstNumber, secondNumber, chosenOperator)
        if(res === isNaN){
          display.textContent = 'Error: Cannot divide by 0'
          return
        }
        display.textContent = String(res)

        secondNumber = null
      }

      chosenOperator = operator
      waitingForSecondNumber = true

    }


    console.log(`num1: ${firstNumber}, num2: ${secondNumber}, opr: ${chosenOperator}, evaluated: ${evaluated}, waitingForSecond: ${waitingForSecondNumber}`)
  })
})


equal.addEventListener('click', () => {
  const res = String(operate(firstNumber, secondNumber, chosenOperator))

  firstNumber = res
  secondNumber = null
  chosenOperator = null
  waitingForSecondNumber = false
  evaluated = true
  display.textContent = res
})

clear.addEventListener('click', () => {
  display.textContent = '0'
  firstNumber = null
  secondNumber = null
  chosenOperator = null
  evaluated = false
  waitingForSecondNumber = false
})



