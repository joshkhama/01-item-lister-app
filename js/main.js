var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("search");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById("item").value;
  // Create new li element
  var li = document.createElement("li");
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create delete button
  var delBtn = document.createElement("button");
  // Add class to button
  delBtn.className = "btn";
  // Add X into the button
  delBtn.appendChild(document.createTextNode("X"));
  // Add the button into the li
  li.appendChild(delBtn);
  // Add the li into the list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("btn")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
