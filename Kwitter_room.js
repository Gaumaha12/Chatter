// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjde2fW0iURufGA0PuoAKLIyJo33vEeSY",
  authDomain: "chatter-93-96.firebaseapp.com",
  databaseURL: "https://chatter-93-96-default-rtdb.firebaseio.com",
  projectId: "chatter-93-96",
  storageBucket: "chatter-93-96.appspot.com",
  messagingSenderId: "888567871138",
  appId: "1:888567871138:web:ea21300b52a3c3855949fb"
};
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function logout(){ window.location="index.html"; }
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    
function addRoom() {
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update ({
    purpose : "adding room name" 
    }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; 
  }

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
        childKey = childSnapshot.key; 
        Room_names = childKey; 
        console.log("Room Name - " + room_name); 
        row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
        document.getElementById("output").innerHTML += row; 
      }); 
    });
   } getData();

   function redirectToRoomName(name) { 
     console.log(name); 
     localStorage.setItem("room_name", name); 
     window.location = "kwitter_page.html"; 
    }
