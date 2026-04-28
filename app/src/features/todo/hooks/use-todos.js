import { useState, useEffect } from "react";

const KEY = "todos_v1";

export function useTodos() {
    const [todos, setTodos] = useState(() => {
        try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
    });
    const [inputValue, setInputValue] = useState("");

    useEffect(() => { localStorage.setItem(KEY, JSON.stringify(todos)); }, [todos]);

    const handleInputChange = e => setInputValue(e.target.value);

    function agregarTarea() {
        if (!inputValue.trim()) return;
        setTodos([...todos, { id: Date.now(), text: inputValue.trim(), done: false }]);
        setInputValue("");
    }

    function eliminarTarea(id) { setTodos(todos.filter(t => t.id !== id)); }

    function toggleTarea(id) {
        setTodos(todos.map(t => t.id !== id ? t : { ...t, done: !t.done }));
    }

    return { todos, inputValue, handleInputChange, agregarTarea, eliminarTarea, toggleTarea };
}