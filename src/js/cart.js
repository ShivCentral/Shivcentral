let cart = [];

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    alert(product.name + " added to cart!");
}
