var inputElement = document.querySelector("input");
var btnElement = document.querySelector("button");

function experiencia(anos) {
  var experience = "";

  switch (true) {
    case anos <= 1: {
      experience = "Iniciante";
      break;
    }
    case anos <= 3: {
      experience = "Intermediário";
      break;
    }
    case anos <= 6: {
      experience = "Avançado";
      break;
    }
    case anos >= 7:
      experience = "Jedi Master";
  }
  return experience;
}

btnElement.onclick = () => {
  alert(experiencia(inputElement.value));
};
