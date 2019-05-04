var bodyElement = document.querySelector('body');

var buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add Square';

addSquare = () => {
    var div = document.createElement('div');

    div.style.width = '40px';
    div.style.height = '40px';
    div.style.background = getRandomColor();
    
    div.onmousemove = () =>{
        div.style.background = getRandomColor();
    }
    
    bodyElement.appendChild(div);

};

getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

buttonElement.onclick = addSquare;
bodyElement.appendChild(buttonElement);



