function addMember() {
    let name = document.getElementById("add").value;
    if (!(iseMpty(name))) {
        return;
    } else {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        let users = document.getElementById("users");
        clon.getElementById("member_name").innerHTML = name;
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
    let input = document.getElementById("search");
    let filter = input.value.toLowerCase();
    let nodes = document.getElementsByClassName('member');
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            return alert(input.value + "is here");
        }
    }
    return alert(input.value + "not found")
}

