function adduser(){
    var player1name= document.getElementById("player1input").value;
    var player2name= document.getElementById("player2input").value;
    localStorage.setItem("player1namekey",player1name);
    localStorage.setItem("player2namekey",player2name);
    window.location="page2.html";
}