var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);

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
