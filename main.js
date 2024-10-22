const img2ch = document.querySelector('#img2change');

let x = Math.floor(Math.random() * 9) + 1;

img2ch.src = `img/${x}.jpg`