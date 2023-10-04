import './todo.css';
import { useState } from 'react';
import TodoItem from './TodoItem';


function Todo() {

    const [options, setOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [todos, setTodos] = useState([]);


    const createTodo = (e) => {
        const a = parseInt(e.target.value) || "";
        const newCard = Array.from({
            length: a
        }, (_, id) => ({
            id: id,
            task: []
        }))

        setTodos(newCard)
    }
console.log(todos,"test")
    

    const deleteTodoItem = (idToDelete) => {
        debugger
      
        const updatedTodos = todos.filter((item,index) => index !== idToDelete);
        setTodos(updatedTodos);
    };
    console.log("tddddddest", todos)
    return (

        <div className="todo">
            <div>

                <select id="select" onChange={createTodo}>
                    <option > Select No. of Todo </option>
                    {
                        options.map((value) => {
                            return <option value={value}>{value}</option>
                        })
                    }
                </select>
            </div>

            <div className="todo_container">

                {
                    todos?.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                onCloseHandler={()=>deleteTodoItem(index)}

                            />

                        )
                    })
                }

            </div>





        </div>


    )
}

export default Todo;