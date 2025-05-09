
let currentTable = "";
let order = [];

function selectTable(table) {
    currentTable = table;
    document.getElementById("currentTable").innerText = "선택된 테이블: " + table;
    order = [];
    updateOrder();
}

function addItem(name, price) {
    order.push({ name, price });
    updateOrder();
}

function addMarketPriceItem(name) {
    const input = prompt(name + "의 가격을 입력하세요 (숫자만):");
    const price = parseInt(input);
    if (!isNaN(price)) {
        addItem(name, price);
    } else {
        alert("올바른 숫자를 입력하세요.");
    }
}

function updateOrder() {
    const list = document.getElementById("orderList");
    list.innerHTML = "";
    let total = 0;
    for (let item of order) {
        const li = document.createElement("li");
        li.innerText = item.name + " - " + item.price.toLocaleString() + "원";
        list.appendChild(li);
        total += item.price;
    }
    document.getElementById("total").innerText = total.toLocaleString();
}

function clearOrder() {
    order = [];
    updateOrder();
}
