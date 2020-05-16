const orangeBtn = document.querySelector('.orange');
const greenBtn = document.querySelector('.green');
const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const redBtn = document.querySelector('.red');

function changeColor() {
    document.body.className = this.className;
}

orangeBtn.addEventListener('click', changeColor);
greenBtn.addEventListener('click', changeColor);
blueBtn.addEventListener('click', changeColor);
yellowBtn.addEventListener('click', changeColor);
redBtn.addEventListener('click', changeColor);