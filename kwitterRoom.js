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