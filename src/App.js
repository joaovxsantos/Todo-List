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
      <nav className="navbar">
        <div className="container justify-content-center align-items-center">
          <div className="head d-flex">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => showDiv ? setShowDiv(false) : setShowDiv(true)}>
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand text-decoration-underline" href="#">Lista de tarefas</a>
          </div>
          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav">
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
