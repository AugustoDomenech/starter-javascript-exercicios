// https://api.github.com/users/diego3g/repos

adicionar = () => {
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
  var scElement = document.querySelector("#listRepos");
  console.log(scElement);
  scElement.innerHTML = "";

  ulELement = document.createElement("ul");
  for (repos of reposList) {
    liElement = document.createElement("li");
    liElement.innerHTML = repos.name;
    ulELement.appendChild(liElement);
  }

  scElement.appendChild(ulELement);
};
