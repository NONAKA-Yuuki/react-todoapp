import React, {useState} from 'react';

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()  // buttonを押したときに再レンダリングさせない

    /* タスクを追加する */
    setTaskList([
      ...taskList,
      {
        id: taskList.length,  // 本当は避けるべきidの付け方
        text: inputText
      }
    ]);

    /* 入力した文字を消す */
    setInputText("");
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText} />
            <button>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    </div>
  )
}
