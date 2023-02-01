function display(){

    var txt;
    if (confirm("Thank You for Purchasing with eTail! Press OK to return to home page")) {
        location.href='index.html'
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("mybutton2").innerHTML = txt;
}