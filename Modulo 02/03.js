var nomes = ["Diego", "Gabriel", "Lucas"];

var bodyElement = document.querySelector('body');

var buttonElement = document.createElement('button');
    buttonElement.textContent = 'Add List';


    addList = () => {
        var ulElement = document.createElement('ul');
                
        for (nome of nomes) {
            var liElement = document.createElement('li');
                liElement.textContent = nome; 
            ulElement.appendChild(liElement);    
        };
        
        bodyElement.appendChild(ulElement);
    }


buttonElement.onclick = addList;
bodyElement.appendChild(buttonElement);



