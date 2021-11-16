function addMember() {
    let name = document.getElementById("add").value;
    if (!(iseMpty(name))) {
        return;
    } else {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        let users = document.getElementById("users");

        clon.getElementById("member__name").innerHTML = name;
        users.appendChild(clon);
        document.getElementById("add").value = "";
    }
}

function iseMpty(input) {
    if (input == "" || input == null) {
        alert("input must be filled out");
        return false;
    }
    return true;
}

function removeMember(deleteMemner) {
    deleteMemner.parentNode.parentNode.removeChild(deleteMemner.parentNode);
}

function toggleIcon(iconClick) {
    iconClick.classList.toggle('check__icon--member');
}

function search() {
    let input = document.getElementById("search").value;
    if (!(iseMpty(input))) {
        return;
    }
    else {
        let filter = input.toLowerCase();
        let members = document.getElementById("members__list");
        let nodes = members.getElementsByClassName("member");
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
                nodes[i].parentNode.parentNode.style.display = "flex";
            } else {
                nodes[i].parentNode.parentNode.style.display = "none";
            }
        }
    }
}

