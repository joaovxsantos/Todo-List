import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="App">

    </div>
  );
}

export default App;
