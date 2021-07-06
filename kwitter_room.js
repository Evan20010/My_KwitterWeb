// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDTENSmET_vXR91cn8zEy8lBqFGaEdgnA8",
      authDomain: "kwitter-6c487.firebaseapp.com",
      databaseURL: "https://kwitter-6c487-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c487",
      storageBucket: "kwitter-6c487.appspot.com",
      messagingSenderId: "486161334788",
      appId: "1:486161334788:web:4f0bb5f916f015acedeb51"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output1").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room_name-"+Room_names);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name
      document.getElementById("output1").innerHTML += row;
      
      

      //End code
      });
});
}
getData();
function redirectToRoomName(name) 
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}