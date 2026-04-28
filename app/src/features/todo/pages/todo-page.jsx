import { useTodos } from "../hooks/use-todos";
import { TodoCard } from "../components/TodoCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TodoPage() {
    const { todos, inputValue, handleInputChange, agregarTarea, eliminarTarea, toggleTarea } = useTodos();
    const hechas = todos.filter(t => t.done).length;

    const handleKey = e => { if (e.key === "Enter") agregarTarea(); };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-medium">Todo List</h1>
                {todos.length > 0 && (
                    <span className="text-sm text-muted-foreground">{hechas}/{todos.length} completadas</span>
                )}
            </div>

            <div className="flex gap-2 mb-8">
                <Input value={inputValue} onChange={handleInputChange} onKeyDown={handleKey}
                    placeholder="Escribe una tarea..." className="flex-1" />
                <Button onClick={agregarTarea} disabled={!inputValue.trim()}>
                    Agregar
                </Button>
            </div>

            {todos.length === 0
                ? <p className="text-sm text-muted-foreground">No hay tareas todavía.</p>
                : <ul className="flex flex-col gap-2">
                    {todos.map(todo => (
                        <TodoCard key={todo.id} todo={todo} onDelete={eliminarTarea} onToggle={toggleTarea} />
                    ))}
                </ul>
            }
        </div>
    );
}