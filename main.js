let itemList = [];


let addItem = () => {
    let todo = {
        contents: document.getElementById("itemInput").value,
        piority: document.getElementById("priorityList").value,
        isDone: false

    };
    itemList.push(todo);
    showList(itemList);
}

let showList = (list) => {
    let message = list.map(function(item, index) {
        if (item.isDone) {
            if (item.piority == 1) {
                return (
                    `<li>
                    <input type="checkbox" onchange="completeItem(${index})" id="justV" checked = true/>
                    <label> ${item.contents} </label>
                    <i class="fas fa-star"></i>
                    <a href="#" onclick="toggle(${index})">unDone</a>
                    <button onclick="removeItem(${index})">X</button>
                    </li>`.strike()
                )
            } else if (item.piority == 2) {
                return (
                    `<li>
                    <input type="checkbox" onchange="completeItem(${index})" id="justV" checked = true/>
                    <label> ${item.contents} </label>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <a href="#" onclick="toggle(${index})">unDone</a>
                    <button onclick="removeItem(${index})">X</button>
                    </li>`.strike()
                )
            } else if (item.piority == 3) {
                return (
                    `<li>
                    <input type="checkbox" onchange="completeItem(${index})" id="justV" checked = true/>
                    <label> ${item.contents} </label>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <a href="#" onclick="toggle(${index})">unDone</a>
                    <button onclick="removeItem(${index})">X</button>
                    </li>`.strike()
                )
            }
        }
        if (item.piority == 1) {
            return (
                `<li>
                <input type="checkbox" onchange="completeItem(${index})" id="justV"/>
                <label> ${item.contents} </label>
                <i class="fas fa-star"></i>
                <a href="#" onclick="toggle(${index})">Done</a>
                <button onclick="removeItem(${index})">X</button>
                    </li>`.strike()
            )
        } else if (item.piority == 2) {
            return (
                `<li>
                <input type="checkbox" onchange="completeItem(${index})" id="justV"/>
                <label> ${item.contents} </label>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <a href="#" onclick="toggle(${index})">Done</a>
                <button onclick="removeItem(${index})">X</button>

                    </li>`.strike()
            )
        } else if (item.piority == 3) {
            return (
                `<li>
                <input type="checkbox" onchange="completeItem(${index})" id="justV"/>
                <label> ${item.contents} </label>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <a href="#" onclick="toggle(${index})">Done</a>
                <button onclick="removeItem(${index})">X</button>
                    </li>`.strike()
            )
        }

    }).join(""); // Change array to string

    console.log(itemList);
    document.getElementById("resultArea").innerHTML = message;
}


function removeItem(index) {
    itemList.splice(index, 1);
    showList(itemList);
}

let completeItem = (index) => {
    itemList[index].isDone = !itemList[index].isDone;
    if (itemList[index].isDone) {
        document.getElementById("justV").checked = true;
    }
    showList(itemList);
}

let toggle = (index) => {
    itemList[index].isDone = !itemList[index].isDone;
    showList(itemList);
}