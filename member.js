function skillsMember() {
    var skill = document.getElementById("skills").value;
    var skillList = document.getElementById("skillList");
    var newSkill = document.createElement("li");
    newSkill.innerHTML = skill;
    skillList.appendChild(newSkill);
}
