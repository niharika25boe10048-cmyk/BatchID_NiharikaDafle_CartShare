function createRoom(){

let roomCode =
"ROOM" +
Math.floor(Math.random()*10000);

localStorage.setItem("roomCode",roomCode);

window.location.href="room.html";
}

function joinRoom(){

let username =
document.getElementById("username").value;

let roomCode =
document.getElementById("roomCode").value;

if(username==="" || roomCode===""){
alert("Please fill all fields");
return;
}

localStorage.setItem("username",username);
localStorage.setItem("roomCode",roomCode);

window.location.href="room.html";
}
