<!-- admin/admin.js -->
const orders = [
    { id: 1, customer: "John Doe", status: "Pending" },
    { id: 2, customer: "Jane Smith", status: "Completed" }
];

const products = [
    { id: 101, name: "Milk", price: 30 },
    { id: 102, name: "Bread", price: 20 }
];

function loadOrders() {
    let ordersTable = document.getElementById("ordersTable");
    orders.forEach(order => {
        ordersTable.innerHTML += `<tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.status}</td>
            <td><button onclick="assignShipper(${order.id})">Assign</button></td>
        </tr>`;
    });
}

function loadProducts() {
    let productsTable = document.getElementById("productsTable");
    products.forEach(product => {
        productsTable.innerHTML += `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button onclick="editProduct(${product.id})">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button></td>
        </tr>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("ordersTable")) loadOrders();
    if (document.getElementById("productsTable")) loadProducts();
});
