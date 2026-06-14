let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let total = 0;

let html = `
<table border="1" width="100%">
<tr>
<th>Item</th>
<th>Price</th>
<th>Added By</th>
</tr>
`;

cart.forEach(item=>{

total += Number(item.price);

html += `
<tr>
<td>${item.name}</td>
<td>₹${item.price}</td>
<td>${item.user}</td>
</tr>
`;

});

html += `
</table>

<h2>Total Amount : ₹${total}</h2>
`;

document.getElementById(
"receiptContainer"
).innerHTML = html;
