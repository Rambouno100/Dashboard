import { useState } from "react";

export function useFitnessPlan() {
    const [datos, setDatos] = useState([]);
    const [form, setForm] = useState({ type_exercise: "", reps: "", series: "", rest: "", image: "" });

    const handleForm = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    function agregarEjercicio() {
        const nuevoEjercicio = {
            ...form,
            id: Date.now(),
            seriesCompletadas: Array(+form.series).fill(false),
        };
        setDatos([...datos, nuevoEjercicio]);
        setForm({ type_exercise: "", reps: "", series: "", rest: "", image: "" });
    }

    function eliminarEjercicio(id) {
        setDatos(datos.filter(e => e.id !== id));
    }

    function toggleSerie(id, index) {
        setDatos(datos.map(e => e.id !== id ? e : {
            ...e,
            seriesCompletadas: e.seriesCompletadas.map((s, i) => i === index ? !s : s),
        }));
    }

    return { datos, form, handleForm, agregarEjercicio, eliminarEjercicio, toggleSerie };
}