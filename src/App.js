import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';


function App() {

  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const createTodo = async () => {
    if (title) {
      console.log(title)

      let todo = {
        id: Math.random().toFixed(2),
        title,
        done: false
      }

      await fetch(API + "/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json"
        },
      });

      setTodos((prevState) => [...prevState, todo])
    }
    setTitle('')
  }

  const editTodo = async (todo) => {
    todo.done = !todo.done

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => prevState.map((t) => t.id === data.id ? t = data : t))
  };


  return (
    <div className="App">
      <nav className="navbar">
        <div className="container justify-content-center align-items-center">
          <div className="head d-flex">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => showDiv ? setShowDiv(false) : setShowDiv(true)}>
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand text-decoration-underline" href="#">Todo List</a>
          </div>
          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav">
              {todos.length === 0 && <p>Não há tarefas!</p>}
              {todos.map((todo) => (
                <List key={todo.id} todo={todo} onClick={() => editTodo(todo)} onDelete={() => deleteTodo(todo.id)} />
              ))}
            </ul>
          </div>
          <button className={`btn ${showDiv ? 'hidden' : ''}`} onClick={createTodo}>+ Adicionar tarefa</button>
          {!showDiv && <input type="text" placeholder="Nova Tarefa" value={title || ''} id="textInput" onChange={(e) => setTitle(e.target.value)}></input>}
        </div>
      </nav>
    </div>
  );
}

export default App;
