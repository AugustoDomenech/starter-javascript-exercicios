var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

var btnElement = document.querySelector("button");
var scElement = document.querySelector("section");

btnElement.onclick = () => {
  var result = "";
  for (user of usuarios) {
    result += ` O ${user.nome} possui as habilidades: `;
    for (habilits of user.habilidades) {
      result += ` ${habilits}`;
    }
  }

  var pElement = document.createTextNode(result);
  scElement.appendChild(pElement);
};
