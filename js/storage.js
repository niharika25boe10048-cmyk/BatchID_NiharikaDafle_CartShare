<!DOCTYPE html>
<html>
<body>

<button onclick="addItem()">Add Item</button>

<script>
function getCart() {
    try {
        return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addItem() {
    let cart = getCart();

    cart.push({
        name: "Milk",
        qty: 2,
        price: 30
    });

    saveCart(cart);

    console.log(getCart());
}
</script>

</body>
</html>
