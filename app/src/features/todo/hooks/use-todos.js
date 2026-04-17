// use-todos.js - SOLO lógica, cero HTML

import { useState } from "react";

export function useTodos() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");


    function handleInputChange(event) {
        setInputValue(event.target.value);
    }


    function agregarTarea() {
        if (inputValue === "") return;
        const tareaNueva = {
            id: Date.now(),
            text: inputValue,
        };
        setTodos([...todos, tareaNueva]);
        setInputValue("");
    }


    function eliminarTarea(id) {
        const listaActualizada = todos.filter((tarea) => tarea.id !== id);
        setTodos(listaActualizada);
    }


    return {
        todos,
        inputValue,
        handleInputChange,
        agregarTarea,
        eliminarTarea,
    };
}