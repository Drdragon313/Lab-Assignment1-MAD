const classNames = {
    TodoItem: "todo-container",
    TodoCheckbox: "todo-checkbox",
    TodoText: "todo-text",
    Delete: "todo-delete",
  };
  
  const list = document.getElementById("todo-list");
  const itemCountSpan = document.getElementById("item-count");
  const uncheckedCountSpan = document.getElementById("unchecked-count");
  count = 0;
  function newTodo() {
   var New_Item  = window.prompt("Enter your Item: ");
    var li = document.createElement("li");
    li.setAttribute('id', New_Item);
    li.appendChild(document.createTextNode(New_Item));
    list.appendChild(li);

    count++;
    itemCountSpan.innerHTML = count;
    uncheckedCountSpan.innerHTML = "1";
  }
  
 function removeTodo() {
    list.removeChild(list.lastElementChild);

    if(count == 0){
      itemCountSpan.innerHTML = count;
    }
    else{
      count--;
      itemCountSpan.innerHTML = count;
    }
  }
    function removeall(){
      var toDoItems = list.children;
      while (toDoItems.length > 0) {
          toDoItems.item(0).remove();
          itemCountSpan.innerHTML = 0;
      }
      
  }