function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
    const cart = getCart();

    const cartList = document.getElementById("cartList");
    const total = document.getElementById("total");

    if (!cartList || !total) return;

    cartList.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.quantity * item.price;

        cartList.innerHTML += `
            <li>
                ${item.name}
                | Qty: ${item.quantity}
                | ₹${item.price}
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </li>
        `;
    });

    total.textContent = sum;
}

function addItem() {
    const name = document.getElementById("itemName").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);

    const cart = getCart();

    cart.push({
        name: name,
        quantity: quantity,
        price: price
    });

    saveCart(cart);
    renderCart();
}

function removeItem(index) {
    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    renderCart();
}

window.addEventListener("storage", function () {
    renderCart();
});

window.onload = renderCart;
