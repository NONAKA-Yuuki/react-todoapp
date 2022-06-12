import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

    const handleDelete = (id) => {
        /* タスクを削除する */
        setTaskList(taskList.filter((task) => task.id !== id)); // 引数で受け取ったidと一致したtask.idがあればtaskListから削除する
    }
  return (
    <div className='todoList'>
        <div className="todos">
            {taskList.map((task, index) => (
                <div className="todo" key={index}>
                    <div className="todoText">
                        <span>{task.text}</span>
                    </div>
                    <div className="icons">
                        <button>
                            <i className="fas fa-check"></i>
                        </button>
                        <button onClick={() => handleDelete(task.id)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
