export function TodoCard({ todo, onDelete, onToggle }) {
    return (
        <li className={`flex items-center gap-3 border rounded-lg px-4 py-3 text-sm transition-colors ${todo.done ? "border-green-200 bg-green-50" : "border-gray-200"}`}>
            <button onClick={() => onToggle(todo.id)}
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors ${todo.done ? "bg-black border-black" : "border-gray-300 hover:border-black"}`}>
            </button>
            <span className={`flex-1 ${todo.done ? "line-through text-gray-400" : ""}`}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} className="text-gray-400 hover:text-red-400">Eliminar</button>
        </li>
    );
}