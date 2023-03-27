import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul>
       {
         todos.map(todo => {
           return(<><TodoItem todo={todo}/>
           <h2>{54 + 64}</h2> </>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;