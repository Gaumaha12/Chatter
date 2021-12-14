function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding_user"
    });
}
