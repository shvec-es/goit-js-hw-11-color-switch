const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body');

let randomColor = null;
let isActive = false;

startBtn.addEventListener('click', onRandomColorChange);
stopBtn.addEventListener('click', onRandomColorStop);

 function onRandomColorChange() {
      if (isActive) {
        return;
    }

    randomColor = setInterval(() => {
        console.log(colors[randomIntegerFromInterval(0, 5)]);
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
        
    }, 1000);
    isActive = true;
 }

 function onRandomColorStop() {
     clearInterval(randomColor);
    isActive = false;
 }
