var bodyElement   = document.querySelector('body');
var buttonElement = document.querySelector('button')

var ulElement = document.createElement('ul');

addItem = () => {
    if (document.querySelector('input').value == '') {
        return;
    }
    
    var liElement = document.createElement('li');
    liElement.textContent = document.querySelector('input').value;
    ulElement.appendChild(liElement);
    bodyElement.appendChild(ulElement);
    document.querySelector('input').value = '';
};

buttonElement.onclick = addItem;



