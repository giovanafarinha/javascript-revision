let buttonElement = document.querySelector(".add-button");
let selectElement = document.querySelector("select");

let skills = ["React", "Typescript", "Javascript", "HTML/CSS"];

function renderSkills() {
  selectElement.innerHTML = "";
  skills.map((skill) => {
    let option = document.createElement("option");
    option.textContent = skill;
    selectElement.appendChild(option);
  });
}
renderSkills();
buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  let newSkill = prompt("What is the skill that you wanna add?");
  if (newSkill) {
    console.log(newSkill);
    skills.push(newSkill);
    renderSkills();
  }
});
