function showContent() {
    let name = document.getElementById("add").value;
    if ((iseMpty(name))) {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        let users = document.getElementById("users");
        users.appendChild(clon);//.nextSibling(users.childNodes[2]);
        document.getElementById("member_name").innerHTML = name;
        document.getElementById("add").value = " ";
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
    deleteMemner.parentNode.parentNode.removeChild(e.parentNode);
}

function toggleIcon(iconClick) {
    iconClick.classList.toggle('check__icon--member');
}

function search() {
    var input = document.getElementById("search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('member');
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
            return alert(input.value + "is here");
        }
    }
    return alert(input.value + "not found")
}

