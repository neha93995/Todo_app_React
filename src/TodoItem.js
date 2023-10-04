import { useState } from "react";
import { ImCross } from 'react-icons/im'

function TodoItem({ onCloseHandler }) {
    const [todoList, SetTodoList] = useState([]);
    const [todoTitle, SetTodoTitle] = useState("");
    const [isEdit, SetIsEdit] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState(-1);

    // ----------------------add item function -------------------


    const addTodoItem = () => {
        // console.log('------------ ',todos[index].task)

        if (isEdit) {
            let arr = todoList
            arr[editItemIndex] = todoTitle;
            SetTodoList(arr)
        }
        else {

            SetTodoList([...todoList, todoTitle]);
        }



        // let arr= todos;
        // arr[index].task = todoList;
        // console.log(arr);
        // setTodos(arr);
        // console.log(todos)

        SetTodoTitle("");
        SetIsEdit(false);
    }


    // -------------------------- edit todo item -----------------------

    const editTodoItem = (index) => {
        SetIsEdit(true);
        todoList.map((item, i) => {
            if (i === index) {
                SetTodoTitle(item);
            }
        })
        setEditItemIndex(index);
    }

    // ----------------------------delete todo item----------------------


    const deleteTodoItem = (index) => {
        console.log(index, "index")
        let arr = todoList.filter((item, i) => {
            return i !== index
        })

        SetTodoList(arr);
    }


    return (
        <>
            <div className="todo_item">
                <div className="cross-icon" onClick={onCloseHandler} ><ImCross /></div>
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
                    todoList.length > 0 ?

                        <div className="todo_item_container">
                            {
                                todoList.map((item, index) => {
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

                        </div> :
                        ""
                }
            </div>
        </>
    )
}

export default TodoItem;