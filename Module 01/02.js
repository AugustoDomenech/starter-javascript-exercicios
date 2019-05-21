var ipFirstElement = document.querySelector("#ipFirstInterval");
var ipSecondElement = document.querySelector("#ipSecondInterval");
var btElement = document.querySelector("button");
var scEvensElement = document.querySelector("#scNumbersEvens");

getNubersEvens = () => {
  scEvensElement.innerHTML = "";
  result = "";
  for (
    let index = ipFirstElement.value;
    index <= ipSecondElement.value;
    index++
  ) {
    var num = index % 2;
    if (num == 0) {
      result += ` ${index}`;
    }
  }
  return result;
};

btElement.onclick = () => {
  var txtNumbersElements = document.createTextNode(getNubersEvens());
  scEvensElement.appendChild(txtNumbersElements);
};
