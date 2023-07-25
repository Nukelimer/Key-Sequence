const pressedKey = [];
const secretCode = 'u';
const body = document.querySelector('body');
const modal = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  body.style.background = '#bfbdba';
  modal.style.display = 'none';
});
window.addEventListener('keydown', (event) => {
  pressedKey.push(event.key);
  pressedKey.splice(-secretCode - 1, pressedKey.length - secretCode.length);

  console.log(pressedKey);

  pressedKey.join('').includes(secretCode) ? cornify_add() : 2;
});
