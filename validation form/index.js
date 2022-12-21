function validateform() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Arun" && password == "chellamuthu") {
    alert("Login Successfully");
    window.open("http://127.0.0.1:5500/newspaper.html");
    return false;
  } else {
    alert("Access Denied");
  }
}
