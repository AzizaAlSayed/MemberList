function addNewMember() {
    let name = document.getElementById("add").value;
    isEmpty(name)
    let firstDiv = document.createElement("div");
    firstDiv.setAttribute('class', 'members');
    let secondDiv = document.createElement("div");
    secondDiv.setAttribute('class', 'member');
    let addPhar = document.createElement("p");
    let addName = document.createTextNode(name);
    firstDiv.appendChild(secondDiv);
    secondDiv.appendChild(addPhar);
    secondDiv.appendChild(addName);
    let users = document.getElementById("users");
    users.insertBefore(firstDiv, users.childNodes[2])
}

function isEmpty(input) {
    if (input === null)
        alert("please fill the input")

}