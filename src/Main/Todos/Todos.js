import {useState} from 'react';
import './Todo.css';

export function Todos(){
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function addTodo(){
        if(todo !== ''){
            setTodos([...todos, todo]);
            setTodo("");
        }
    }

    function removeTodo(e){
       const newTodos =  todos.filter((item) => item !== e);
       setTodos(newTodos);
    }

    return (
        <>
        <ul>
        {todos.map((e, index) => (
            <li key={index} onClick={() => removeTodo(e)}>
                {e}
            </li>
        ))}
        </ul>
        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className='add-button' onClick={addTodo}>Добавить Todo</button>
        </>
    );
}