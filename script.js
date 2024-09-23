const menus = {
    Dawat: [
        { item: "Biryani", price: 100 },
        { item: "Chicken", price: 150 },
        { item: "Burger", price: 60 },
        { item: "Veg Biryani", price: 60 },
        { item: "Rice", price: 60 },
        { item: "Roti", price: 10 },
    ],
    TeaPost: [
        { item: "Tea", price: 12 },
        { item: "Parata", price: 100 },
        { item: "Cold Coffee", price: 80 },
        { item: "Milk", price: 20 },
        { item: "Samosa", price: 30 },
    ],
    cafe: [
        { item: "Latte", price: 80 },
        { item: "Muffin", price: 40 },
        { item: "Salad", price: 60 },
        { item: "Sandwich", price: 50 },
        { item: "Tea", price: 10 },
        { item: "Burger", price: 60 },
    ]
};

let totalCost = 0;

function showMenu(outlet) {
    const outletName = outlet.charAt(0).toUpperCase() + outlet.slice(1);
    document.getElementById("outlet-name").textContent = outletName + " Menu";
    const menuItems = menus[outlet];
    const menuList = document.getElementById("menu-items");
    menuList.innerHTML = ""; // Clear previous menu
    totalCost = 0; // Reset total cost

    menuItems.forEach((menuItem, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${menuItem.item} - ₹${menuItem.price}`;
        li.onclick = function() {
            addToCart(menuItem.price);
        };
        menuList.appendChild(li);
    });

    document.getElementById("menu-section").style.display = "block";
    updateTotalCost();
}

function addToCart(price) {
    totalCost += price;
    updateTotalCost();
}

function updateTotalCost() {
    document.getElementById("total-cost").textContent = totalCost;
}

function placeOrder() {
    console.log("YOUR ORDER IS SUCCESSFULLY PLACED");
    alert("YOUR ORDER IS SUCCESSFULLY PLACED");
}
