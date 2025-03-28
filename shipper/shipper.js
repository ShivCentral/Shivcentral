<!-- shipper/shipper.js -->
const assignedOrders = [
    { id: 1, customer: "John Doe", status: "Pending" },
    { id: 3, customer: "Alice Brown", status: "Out for Delivery" }
];

document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("assignedOrdersTable");
    assignedOrders.forEach(order => {
        table.innerHTML += `<tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.status}</td>
            <td><button onclick="markDelivered(${order.id})">Mark as Delivered</button></td>
        </tr>`;
    });
});

function markDelivered(orderId) {
    alert(`Order ${orderId} marked as delivered.`);
}
