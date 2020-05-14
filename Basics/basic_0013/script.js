let box = document.getElementById('box'),
    teg = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('#wrapper');

box.style.backgroundColor = 'blue';
teg[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// let colors = ['red', 'black', 'green'],
//     backCol = ['magenta', 'blue', 'white'];

// for(let i =0; i < heart.length; i ++) {
//     heart[i].style.backgroundColor = colors[i];
// }

// heart.forEach(function aty(item, i, hearts) {
//     item.style.backgroundColor = backCol[i];
// });

// function aty(item, i, hearts) {
//     item.style.backgroundColor = backCol[i];
// }
// heart.forEach(aty);

let div = document.createElement('div'),
    text = document.createTextNode('Hello, World!');
div.classList.add('black', 'circle');
//document.body.appendChild(div);
//wrapper.appendChild(div);

div.innerHTML = 'Hello!!!';

// document.body.insertBefore(div, circle[1]);
// document.body.removeChild(teg[0]);
// wrapper.removeChild(heart[0]);
// document.body.replaceChild(teg[3], circle[1]);

// console.log(div);
// console.log(text);