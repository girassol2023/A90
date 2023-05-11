const firebaseConfig = {
      apiKey: "AIzaSyB7m2WsduVFkvNdLNr_KAHhKsDaZDl_g6c",
      authDomain: "kwitter-fd230.firebaseapp.com",
      databaseURL:"https://kwitter-fd230-default-rtdb.firebaseio.com/",
      projectId: "kwitter-fd230",
      storageBucket: "kwitter-fd230.appspot.com",
      messagingSenderId: "19500130349",
      appId: "1:19500130349:web:50cfee1d7ff14b0b9ad8a4"
    };
    firebase.initializeApp(firebaseConfig);
      
    userName = localStorage.getItem("usuario");
    document.getElementById("userName").innerHTML = "bem vindo " + userName + "!"
    function addRoom() {
      roomName = document.getElementById("roomName").value
     firebase.database().ref("/").child(roomName).update({
      purpose: "adicinarsala"
    
     })
     localStorage.setItem("roomName", roomName)
     window.location = "kwitterPage.html"
    }
 
function send() {
      mag = document.getElementById("mag").value;
      firebasw.database().ref (roomName). push ({
          name: userName,
          message: mag,
          like: 0
      })
}
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId)
console.log(messageData)
name = messageData["name"]
message = messageData ["message"]
like = messageData["like"]
nameWithTag = "<h4>" + name + "<img class='user_tick.png' src= 'tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
likeButton = "<button class='btn btn-warning' id="+firebaseMessageId+"value="+like+" onclick='update.like(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumb-up'>Like:"+ like + "</span></button><br>";
      row = nameWithTag + messageWithTag + likeButton + spanWithTag;
      document.getElementById("output").innerHTML = row;
} });  }); }
getData();



