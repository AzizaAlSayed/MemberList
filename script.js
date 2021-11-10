function showContent() {
    let name = document.getElementById("add").value;
    /* if (iseMpty(name)) {
         return;
     } else {*/
    let temp = document.getElementsByTagName("template")[0];
    let clon = temp.content.cloneNode(true);
    let users = document.getElementById("users");
    users.appendChild(clon);
    document.getElementById("member_name").innerHTML = name;
    //  document.getElementById("add").innerHTML = " ";
    // name.reset();
    // }
}

function iseMpty(input) {
    if (input == "" || input == null) {
        alert("input must be filled out");
        return false;
    }

}

//add.addEventListener("click", showContent);

function removeDummy(e) {
    e.parentNode.parentNode.removeChild(e.parentNode); 
}