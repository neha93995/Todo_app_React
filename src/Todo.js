import './todo.css';
import { useState } from 'react';
import TodoItem from './TodoItem';


function Todo() {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    

    const deleteTodo = (idToDelete) => {
        const updatedTodos = todos.filter((item,index) => index !== idToDelete);
        setTodos(updatedTodos);
    };


    return (

        <div className="todo">
            <div>

                <select id="select" onChange={createTodo}>
                    <option > Select No. of Todo </option>
                    {
                        options.map((value,index) => {return <option key={index} value={value}>{value}</option>
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
                                // onCloseHandler={()=>deleteTodoItem(index)}
                                todosInfo = {
                                    {
                                    indexOfTodo:index,
                                    todos:todos,
                                    setTodos:setTodos,
                                    deleteTodo:deleteTodo
                                }
                            }

                            />

                        )
                    })
                }

            </div>





        </div>


    )
}

export default Todo;