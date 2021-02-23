const color = document.getElementById('color');
const range = document.getElementById('range');
const clear = document.getElementById('clear');
const canvas = document.getElementById('canvas');
const brush = {
    color: 'black',
    size: `${range.value}px`
};

color.addEventListener('input', (event) => {
    brush.color = event.currentTarget.value
})

clear.addEventListener('click', (event) => {
    canvas.innerHTML = ''
}) // очистка поля

const drawPixel = (positionX, positionY) => {
    const pixel = document.createElement('div')
    pixel.style.width = brush.size
    pixel.style.height = brush.size
    pixel.style.borderRadius = '50%'
    pixel.style.backgroundColor = brush.color
    pixel.style.position = 'absolute'
    pixel.style.top = positionY + 'px'
    pixel.style.left = positionX + 'px'
    canvas.appendChild(pixel)
}

const drawFunction = (event) => {
    drawPixel(event.clientX, event.clientY)
}
canvas.addEventListener('mousedown', (event) => {
    brush.size = range.value + 'px'
    canvas.addEventListener('mousemove', drawFunction)
})

canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', drawFunction)
})