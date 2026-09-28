const container = document.querySelector('#container')
const editSizeBtn = document.querySelector('#edit-size-btn')
const colorRandomizerBtn = document.querySelector('#color-randomizer')


const RGB = [
  'rgb(186, 12, 47)',   
  'rgb(255, 64, 64)',   
  'rgb(255, 103, 0)',   
  'rgb(255, 239, 0)',   
  'rgb(212, 175, 55)',   
  'rgb(127, 255, 0)',   
  'rgb(0, 255, 0)',   
  'rgb(8, 143, 143)',  
  'rgb(0, 255, 255)',   
  'rgb(0, 166, 255)',  
  'rgb(65, 105, 225)',  
  'rgb(25, 25, 112)',   
  'rgb(127, 0, 255)',   
  'rgb(255, 0, 255)',  
  'rgb(255, 20, 147)',  
  'rgb(186, 255, 201)', 
  'rgb(186, 225, 255)', 
  'rgb(245, 245, 220)', 
  'rgb(30, 30, 30)'     
];

let gridSize = 16
let enabledColorRandomized = false;


function makeGrid(size){
  container.innerHTML = ''
  let rows = size
  let cols = size
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  const totalCells = rows * cols
  for(let i = 0; i < totalCells; i++){
    let cell = document.createElement('div')
    cell.className = 'cell'
    cell.id = i
    container.appendChild(cell)
  }
}

function changeGridSize(){
  let newSize = prompt("New Size (max 100)")

  newSize = Number(newSize)

  if(newSize > 100 || newSize < 1){
    alert("Please enter a number between 1 and 100")
    return
  }

  gridSize = newSize
  makeGrid(gridSize)
} 


makeGrid(gridSize)

container.addEventListener('mouseover', (e) => {
  if(enabledColorRandomized){
    const random = Math.floor(Math.random() * RGB.length)
    e.target.style.backgroundColor = RGB[random]
  }else{
    e.target.style.backgroundColor = 'black'
  }
})


colorRandomizerBtn.addEventListener('click', () => {
  enabledColorRandomized = !enabledColorRandomized
})

editSizeBtn.addEventListener('click', changeGridSize)