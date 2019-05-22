function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    if (idade >= 18) {
      resolve("Maior de idade !");
    } else {
      reject("Ops ! Menor de idade");
    }
  });
}

checaIdade(16)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
