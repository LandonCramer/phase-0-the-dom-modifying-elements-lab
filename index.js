 const element = document.querySelector('main#main');
 element.remove();

 const newHeader = document.createElement('h1');
 

  newHeader.id = 'victory';

  const yourName = 'YOUR-NAME';
  newHeader.textContent =  yourName +" is the champion";

  document.body.appendChild(newHeader);