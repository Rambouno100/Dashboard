import { useTodos } from "../hooks/use-todos";
import { TodoCard } from "../components/TodoCard";

export function TodoPage() {
    const { todos, inputValue, handleInputChange, agregarTarea, eliminarTarea } = useTodos();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-medium mb-6">Todo List</h1>

            <div className="flex gap-2 mb-8">
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Escribe una tarea..."
                    className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black flex-1" />
                <button onClick={agregarTarea} className="bg-black text-white px-4 py-2 rounded-lg text-sm">Agregar</button>
            </div>

            {todos.length === 0
                ? <p className="text-gray-400 text-sm">No hay tareas todavía.</p>
                : <ul className="flex flex-col gap-2">
                    {todos.map(todo => <TodoCard key={todo.id} todo={todo} onDelete={eliminarTarea} />)}
                </ul>
            }
        </div>
    );
}