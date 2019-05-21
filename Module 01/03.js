function temHabilidade(pskill) {
  for (skill of skills) {
    if (skill == pskill) {
      alert("You are AWSON");
    }
  }
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade("ReactJS"); // true ou false
