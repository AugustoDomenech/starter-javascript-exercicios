// https://api.github.com/users/NAME/repos
var scElement = document.querySelector("#listRepos");

adicionar = () => {
  scElement.innerHTML = "";
  ulELement = document.createElement("ul");
  liElement = document.createElement("li");
  liElement.innerHTML = "Carregando...";
  ulELement.appendChild(liElement);
  scElement.appendChild(ulELement);

  var inputElement = document.querySelector("input");
  axios
    .get(`https://api.github.com/users/${inputElement.value}/repos`)
    .then(function(response) {
      renderList(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

renderList = reposList => {
  scElement.innerHTML = "";
  ulELement = document.createElement("ul");
  for (repos of reposList) {
    liElement = document.createElement("li");
    liElement.innerHTML = repos.name;
    ulELement.appendChild(liElement);
  }

  scElement.appendChild(ulELement);
};
