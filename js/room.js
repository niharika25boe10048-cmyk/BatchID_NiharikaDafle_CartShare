let username =
localStorage.getItem("username") || "Guest";

document.getElementById("roomTitle").innerHTML =
"Room Code : " +
localStorage.getItem("roomCode");

function addItem(){

let itemName =
document.getElementById("itemName").value;

let itemPrice =
document.getElementById("itemPrice").value;

if(itemName==="" || itemPrice===""){
alert("Enter item details");
return;
}

let cart = getCart();

cart.push({
name:itemName,
price:itemPrice,
user:username
});

saveCart(cart);

addLog(username + " added " + itemName);

renderCart();
}

function renderCart(){

let cart = getCart();

let output = "";

cart.forEach((item,index)=>{

output += `
<tr>
<td>${item.name}</td>
<td>₹${item.price}</td>
<td>${item.user}</td>
<td>
<button
class="btn btn-danger btn-sm"
onclick="removeItem(${index})">
Delete
</button>
</td>
</tr>
`;

});

document.getElementById("cartTable").innerHTML =
output;
}

function removeItem(index){

let cart = getCart();

let removed = cart[index];

cart.splice(index,1);

saveCart(cart);

addLog(
username +
" removed " +
removed.name
);

renderCart();
}

function addLog(message){

let logs =
JSON.parse(
localStorage.getItem("logs")
) || [];

logs.push(message);

localStorage.setItem(
"logs",
JSON.stringify(logs)
);

renderLogs();
}

function renderLogs(){

let logs =
JSON.parse(
localStorage.getItem("logs")
) || [];

let html = "";

logs.forEach(log=>{

html += `<li>${log}</li>`;

});

document.getElementById(
"activityLog"
).innerHTML = html;
}

renderCart();
renderLogs();
