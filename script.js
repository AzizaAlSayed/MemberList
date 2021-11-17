function addMember() {
    let name = document.getElementById("add").value;
    if (iseMpty(name)) {
        alert("input must be filled out");
        return;
    }
    let memberTemplate = document.getElementsByTagName("template")[0];
    let newMember = memberTemplate.content.cloneNode(true);
    let members = document.getElementById("members__list");
    newMember.getElementById("member__name").innerHTML = name;
    members.appendChild(newMember);
    document.getElementById("add").value = "";
}

function iseMpty(input) {
    return input === "" || input === null
}

function removeMember(deleteMemner) {
    deleteMemner.parentNode.parentNode.removeChild(deleteMemner.parentNode);
}

function toggleIcon(iconClick) {
    iconClick.classList.toggle('check__icon--member');
}

function search() {
    let input = document.getElementById("search").value;
    if (iseMpty(input)) {
        alert("input must be filled out");
        return;
    }
    let filter = input.toLowerCase();
    let members = document.getElementById("members__list");
    let membersNodes = members.getElementsByClassName("member");
    for (i = 0; i < membersNodes.length; i++) {
        if (membersNodes[i].innerText.toLowerCase().includes(filter)) {
            membersNodes[i].parentNode.parentNode.style.display = "flex";
        } else {
            membersNodes[i].parentNode.parentNode.style.display = "none";
        }
    }
}