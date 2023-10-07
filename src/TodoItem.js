import { useState } from "react";
import { ImCross } from 'react-icons/im'

function TodoItem({todosInfo}) {
 
    const {indexOfTodo, todos, setTodos, deleteTodo} = todosInfo;

    const [todoTitle, SetTodoTitle] = useState("");
    const [isEdit, SetIsEdit] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState(-1);

    // ----------------------add item function -------------------
    
    const addTodoItem = () => {
        if (isEdit) {
            let arr= todos;
            arr[indexOfTodo].task[editItemIndex] = todoTitle;
            setTodos(arr);
        }
        
        else {
            
            let arr= todos;
            arr[indexOfTodo].task.push(todoTitle);
            setTodos(arr);
        }
        
        SetTodoTitle("");
        SetIsEdit(false);
    }


    // -------------------------- edit todo item -----------------------

    const editTodoItem = (index) => {
        SetIsEdit(true);
        todos[indexOfTodo].task.map((item, i) => {
            if (i === index) {
                SetTodoTitle(item);
            }
        })
        setEditItemIndex(index);
    }

    // ----------------------------delete todo item----------------------

    // console.log(todos)

    const deleteTodoItem = (index) => {
        let arr = [...todos];
        console.log('-----',typeof(arr)) //------------------------???????????????
        arr[indexOfTodo].task = arr[indexOfTodo].task.filter((item, i) => {
            return i !== index
        })
        setTodos(arr);
    }


    return (
        <>
            <div className="todo_item">
                <div className="cross-icon" onClick={()=>deleteTodo(indexOfTodo)} ><ImCross /></div>
                {
                    isEdit ?

                        <div>
                            <input placeholder="edit todo task" value={todoTitle} onChange={(e) => SetTodoTitle(e.target.value)} />
                            <button onClick={addTodoItem}>edit</button>
                        </div>

                        :

                        <div>
                            <input placeholder="add new todo task" value={todoTitle} onChange={(e) => SetTodoTitle(e.target.value)} />
                            <button onClick={addTodoItem}>add</button>
                        </div>


                }
                {
                    // todos[indexOfTodo].task.length > 0 ?

                        <div className="todo_item_container">
                            {
                                todos[indexOfTodo].task.map((item, index) => {
                                    return (

                                        <div key={index} className="todo_item_update">
                                            <p>{index + 1}. {item}</p>
                                            <div>
                                                <button onClick={() => editTodoItem(index)}>edit</button>
                                                <button onClick={() => deleteTodoItem(index)} >delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div> 
                        // :
                        // ""
                }
            </div>
        </>
    )
}

export default TodoItem;