import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "ここんとこ増えるけん", completed: true },
  { id: "todo-1", name: "ためしにしてんもー", completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));