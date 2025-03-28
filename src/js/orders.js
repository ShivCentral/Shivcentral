function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Your order has been placed successfully!");
    cart = [];
}
