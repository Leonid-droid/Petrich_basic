let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    body = document.querySelector('body'),
    title = document.querySelector('#title'),
    column = document.querySelector('#column'),
    adv = document.querySelector('.adv'),
    prom = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

let li5 = document.createElement('li');
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый пункт';
menu.appendChild(li5);

body.classList.add('bg_body');

title.innerHTML = 'Мы продаём только подлинную технику Apple';

column.removeChild(adv);

let answer = prompt('Ваше отношение к продукции Apple?'); 
prom.classList.add('title');   
prom.innerHTML = answer;
