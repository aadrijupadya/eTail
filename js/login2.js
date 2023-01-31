function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "akhilvemuri26@gmail.com" && password == "pass") {
        window.location.replace("index.html");
        alert("login succesfully");

    } else {
        alert("login failed");
    }


}