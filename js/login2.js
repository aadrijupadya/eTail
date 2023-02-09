function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var first = document.getElementById("first").value;
    if (username == "akhilvemuri26@gmail.com" && password == "password") {
        if (confirm(("Logged in succesfully, Welcome to Etail, " + first + "!"))) {
            location.href = 'pref.html'
        }
        return false;
    } else {
        alert("login failed");
    }
}