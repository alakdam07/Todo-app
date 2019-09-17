import React, {useState} from 'react';
import './App.css';
function Todo({todo, index, completeTodo, removeTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} 
  className="todo"> {todo.text}
  <div>
    <button className="completed" onClick={() =>completeTodo(index)}>Complete</button>
    <button className="remove"onClick={() =>removeTodo(index)}>x</button>
  </div>
  </div>;
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubimt = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <div> 
  <form onSubmit={handleSubimt}>
      <input
      type="text" 
      className="input" 
      value={value} 
      placeholder="What to do?"
      onChange={e => setValue(e.target.value)} 
      />
    </form>
  </div>
   
    
  
  )
}

function App() {
const [todos, setTodos] = useState([
  {
    text : 'Coding',
    isCompleted: false
  },
  {
    text: 'Running',
    isCompleted: false
  },
 
]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
}

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
}

 const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}

return (
  <div className="app">
    
    <h1 className=" line anim-typewriter">To do list</h1>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo 
        key={index} 
        index={index} 
        todo={todo} 
        completeTodo={completeTodo}
        removeTodo={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  </div>
)
}

export default App;