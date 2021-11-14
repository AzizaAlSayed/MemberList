let member = document.getElementById("add");
member.addEventListener("click", showContent);

function showContent() {
    let name = document.getElementById("add").value;
    if ((iseMpty(name))) {
        let temp = document.getElementsByTagName("template")[0];
        let clon = temp.content.cloneNode(true);
        let users = document.getElementById("users");
        users.appendChild(clon);
        document.getElementById("member_name").innerHTML = name;
        name = " ";
    }
}

function iseMpty(input) {
    if (input == "" || input == null) {
        alert("input must be filled out");
        return false;
    }
    return true;
}

function removeMember(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
}

function toggleIcon(e) {
    e.classList.toggle('check__icon--member');
}

/*function myFunction() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    for (let i = 0; i < document.getElementsByClassName('members').length; i++) {
        if (document.getElementsByClassName('members'[i].innerHTML.toUpperCase().indexOf(filter) > -1)) {
            document.getElementsByClassName("members")[i].style.display = "none";
        }
        else {
            document.getElementsByClassName("members")[i].style.display = "";
        }
    }
}*/
