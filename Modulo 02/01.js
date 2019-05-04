var bodyElement = document.querySelector('body');

var buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add Square';

addSquare = () => {
    var div = document.createElement('div');

    div.style.width = '40px';
    div.style.height = '40px';
    div.style.background = 'purple';
    bodyElement.appendChild(div);
};

buttonElement.onclick = addSquare;
bodyElement.appendChild(buttonElement);