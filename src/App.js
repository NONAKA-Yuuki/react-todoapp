import React, {useState} from 'react';
import './App.css';
import { InputForm } from './components/InputForm';
import {Title} from "./components/Title";
import { TodoList } from './components/TodoList';


function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList />
    </div>
  );
}

export default App;
