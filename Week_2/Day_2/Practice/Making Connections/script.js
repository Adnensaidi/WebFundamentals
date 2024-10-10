document.getElementById("editProfile").addEventListener("click", function(event) {
    event.preventDefault();
    var newName = prompt("Enter new name:", "Adnen Saidi");
    if (newName) {
        document.getElementById("userName").textContent = NewName;
    }
});

document.querySelectorAll(".reject-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var requestDiv = this.parentElement;
        requestDiv.remove();
    });
});

document.querySelectorAll(".accept-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var requestDiv = this.parentElement;
        var name = requestDiv.getAttribute("data-name");
        var connectionsDiv = document.querySelector(".user-profile");

        var newConnection = document.createElement("p");
        newConnection.textContent = name;
        connectionsDiv.appendChild(newConnection);

        requestDiv.remove();
    });
});