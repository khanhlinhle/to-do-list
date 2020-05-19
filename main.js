const key = "itemList"

window.addEventListener('DOMContentLoaded', (event) => {
    let itemList = loadList();
    if (itemList === undefined || itemList === null) {
        itemList = [];
        saveList(itemList);
    }
    updateView();
});

function saveList(itemList) {
    localStorage.setItem(key, JSON.stringify(itemList));
}

function loadList() {
    return JSON.parse(localStorage.getItem(key));
}

function addItem() {
    const content = document.getElementById("itemInput").value;
    const item = {
        text: content,
        isDone: false
    }

    let itemList = loadList();
    itemList.push(item); // <~ update vào object item
    saveList(itemList);

    document.getElementById("itemInput").value = ""; // <~ reset lại itemInput
    updateView();
}

function updateView() {
    let html = "";
    let showNotDoneOnly = document.getElementById("showNotDone").checked;
    let itemList = loadList();
    for (let i = 0; i < itemList.length; i++) {
        const item = itemList[i];

        if (showNotDoneOnly && item.isDone) {
            // skip current index
            continue;
        }

        let tempHtml = `<li>${item.text}`;
        tempHtml += ` <a href='#' onclick='removeItem(${i})'>X</a>`;

        if (item.isDone) {
            tempHtml += ` <a href='#' onclick='toggleDone(${i})'>Mark-Not-Done</a>`;
            tempHtml = tempHtml.strike();
        } else {
            tempHtml += ` <a href='#' onclick='toggleDone(${i})'>Mark-Done</a>`;
        }

        tempHtml += `</li>\n`;
        html += tempHtml;
    }

    document.getElementById("resultArea").innerHTML = html;
}

function removeItem(index) {
    let itemList = loadList();
    itemList.splice(index, 1);
    saveList(itemList);
    updateView();
}

function toggleDone(index) {
    let itemList = loadList();
    itemList[index].isDone = !itemList[index].isDone;
    saveList(itemList);
    updateView();
}

function onToggleChanged() {
    updateView();
}