export function TodoCard({ todo, onDelete }) {
    return (
        <li className="flex items-center justify-between border rounded-lg px-4 py-3 text-sm">
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} className="text-gray-400 hover:text-red-400">Eliminar</button>
        </li>
    );
}