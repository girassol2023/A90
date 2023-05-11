
function addUser() {
  nomeusuario = document.getElementById("userName").value;
  localStorage.setItem("usuario", nomeusuario)
  window.location = "kwitterRoom.html"
}
