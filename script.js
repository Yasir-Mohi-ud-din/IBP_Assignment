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
let order_list="";
let items = [];
let prices = [];

function showMenu(outlet) {
     totalCost = 0;
 order_list="";
 items = [];
 prices = [];

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
            addToCart(menuItem.price , menuItem.item);
        };
        menuList.appendChild(li);
    });

    document.getElementById("menu-section").style.display = "block";
    updateTotalCost();
}

function addToCart(price, item) {
    totalCost += price;
    order_list += item + " : " + price + "\n";
    items.push(item);
    prices.push(price);

       

    updateTotalCost();
}

function updateTotalCost() {
    document.getElementById("total-cost").textContent = totalCost;
}

// function placeOrder() {
//     order_list += "Total Price: " + totalCost;
//     console.log("YOUR ORDER IS SUCCESSFULLY PLACED"+ order_list);
//     alert("YOUR ORDER IS SUCCESSFULLY PLACED\n"+ order_list);
// }

function placeOrder() {
    // let order_list = "";
    const menuItems = document.querySelectorAll("#menu-items li");
    // menuItems.forEach(item => {
    //     if (item.classList.contains("selected")) {
    //         order_list += item.innerText + "\n";
    //     }
    // });

    order_list += "Total Price: " + totalCost;
    console.log("YOUR ORDER IS SUCCESSFULLY PLACED"+ order_list);
    alert("YOUR ORDER IS SUCCESSFULLY PLACED\n"+ order_list);
    order_list="";
    
    createTable(items, prices);
    // window.location.href = "order.html";

}










    function createTable(items, prices) {
        console.log(items);
        localStorage.setItem('items', JSON.stringify(items));
localStorage.setItem('prices', JSON.stringify(prices));
localStorage.setItem('totalCost', totalCost);

        // Ensure totalCost starts from 0
         
    
        // Get the container to hold the table
        const tableContainer = document.getElementsByClassName('table-container');
    
        // Clear any previous table in the container
        // tableContainer.innerHTML = "heool";
    
        let tableHTML = `<table border="1">
        <tr>
            <th>Item</th>
            <th>Price</th>
        </tr>`;

    // Populate the table rows with items and prices
    items.forEach((item, index) => {
        tableHTML += `<tr>
            <td>${item}</td>
            <td>₹${prices[index]}</td>
        </tr>`;
    });

    // Add total row
    tableHTML += `<tr>
        <td style="font-weight: bold;">Total</td>
        <td style="font-weight: bold;">₹${totalCost}</td>
    </tr>`;

    // Close the table tag
    tableHTML += `</table>`;

    // Set the innerHTML of the table container
    tableContainer.innerHTML = tableHTML;
    window.location.href = "order.html";
       
    }
    // Store the arrays and total cost in localStorage

// Redirect to order.html to display the table
// window.location.href = "order.html";
 
    