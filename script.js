
let currentTable = "";
let orders = {};

function selectTable(table) {
    currentTable = table;
    if (!orders[currentTable]) {
        orders[currentTable] = [];
    }
    document.getElementById("currentTable").innerText = "선택된 테이블: " + table;
    updateOrder();
}

function addItem(name, price) {
    if (!currentTable) {
        alert("먼저 테이블을 선택하세요.");
        return;
    }
    orders[currentTable].push({ name, price });
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
    const tableOrder = orders[currentTable] || [];
    for (let item of tableOrder) {
        const li = document.createElement("li");
        li.innerText = item.name + " - " + item.price.toLocaleString() + "원";
        list.appendChild(li);
        total += item.price;
    }
    document.getElementById("total").innerText = total.toLocaleString();
}

function clearOrder() {
    if (currentTable && orders[currentTable]) {
        orders[currentTable] = [];
        updateOrder();
    }
}
