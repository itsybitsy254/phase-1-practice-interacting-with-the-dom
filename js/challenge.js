let counter = document.getElementById('counter');
let seconds = 0;

function timerSet() {
  seconds++;
  counter.textContent = seconds;
}

let startTimer = 0;
startTimer = setInterval(timerSet, 1000);

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
let flagPaused = 'esumed';

plus.addEventListener('click', () => {
  seconds++;
  counter.innerText = seconds;
});

minus.addEventListener('click', () => {
  seconds--;
  counter.innerText = seconds;
});

pause.addEventListener('click', () => {
  if (flagPaused === 'esumed') {
    clearInterval(startTimer);
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    pause.textContent = 'esume';
    flagPaused = 'paused';
  } else if (flagPaused === 'paused') {
    pause.textContent = 'pause';
    flagPaused = 'esumed';
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    startTimer = setInterval(timerSet, 1000);
  }
});

let likedNumbers = {};

heart.addEventListener('click', () => {
  const h1 = document.querySelector('#counter');
  const ul = document.querySelector('ul');
  const num = parseInt(h1.innerText);
  
  if (!likedNumbers[num]) {
    likedNumbers[num] = 1;
    const li = document.createElement('li');
    li.innerHTML = `${num} has been liked <span>1</span> time`;
    li.id = num;
    ul.appendChild(li);
  } else {
    likedNumbers[num]++;
    const currentLi = document.getElementById(num.toString());
    currentLi.innerText = `${num} has been liked <span>${likedNumbers[num]}</span> times`;
  }
});

document.querySelector('button#submit').addEventListener('click', (e) => {
  e.preventDefault();
  let submittedContent = document.querySelector('input#comment-input').value;
  let p = document.createElement('p');
  p.innerText = submittedContent;

  document.getElementById('list').appendChild(p);
});