function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

btn.addEventListener('click', btnClick);

function btnClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  text.textContent = color;
}