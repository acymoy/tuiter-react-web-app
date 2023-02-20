import TodoList from "./TodoList.js";
import TodoItem from "./TodoItem.js";

$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);



