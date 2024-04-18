const List = ({ todo, onClick, onDelete }) => {
    return (
        <>
            <li className="nav-item">
                <i className={`fas fa-circle ${todo.done ? 'done-circle' : ''}`} onClick={onClick}></i>
                <label className={todo.done ? 'done' : ''} onClick={onClick}>{todo.title}</label>
                <i className="bi bi-trash" onClick={onDelete}></i>
            </li>
        </>
    )
}


export default List