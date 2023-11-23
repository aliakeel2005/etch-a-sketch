const container = document.createElement('div');
container.setAttribute('class', 'container')
document.body.appendChild(container)
for(i = 0; i < 256; i++) {
   const divs = document.createElement('div')
   divs.addEventListener('mouseover', () => {divs.style.backgroundColor = 'blue'})
   container.appendChild(divs)
}

const newCanvas = document.createElement('button')
function createCanvas() { container.innerHTML = ''
    let boxes = prompt('how many boxes do you want?', "")

    if(boxes > 100) {alert("too many boxes!")}
    else {
        const divSize = (700 - 2 * boxes) / boxes

for(i = 0; i < boxes * boxes; i++) {
    const divs = document.createElement('div')
    divs.style.width = divSize + 'px';
    divs.style.height = divSize + 'px';
    divs.addEventListener('mouseover', () => {divs.style.backgroundColor = 'blue'})
    container.appendChild(divs)
    console.log(boxes)} 
}}
newCanvas.style.display = 'inline'
newCanvas.textContent = "remove all divs"
 newCanvas.addEventListener('click', createCanvas)
 document.body.appendChild(newCanvas)
 
