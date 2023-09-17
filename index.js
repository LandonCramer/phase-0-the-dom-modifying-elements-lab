


const element = document.querySelector('main#main');
element.remove();

let newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.textContent = "Landon is the champion";

document.body.appendChild(newHeader);