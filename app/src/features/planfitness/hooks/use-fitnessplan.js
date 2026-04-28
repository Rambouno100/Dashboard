import { useState, useEffect } from "react";

const KEY = "fitness_v2";

export function useFitnessPlan() {
    const [datos, setDatos] = useState(() => {
        try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
    });
    const [form, setForm] = useState({ type_exercise: "", reps: "", series: "", rest: "", image: "" });

    useEffect(() => { localStorage.setItem(KEY, JSON.stringify(datos)); }, [datos]);

    const handleForm = e => setForm({ ...form, [e.target.name]: e.target.value });

    function agregar() {
        if (!form.type_exercise || !form.series || !form.reps) return;
        setDatos([...datos, { ...form, id: Date.now().toString(), seriesCompletadas: Array(+form.series).fill(false) }]);
        setForm({ type_exercise: "", reps: "", series: "", rest: "", image: "" });
    }

    function eliminar(id) { setDatos(datos.filter(e => e.id !== id)); }

    function toggleSerie(id, idx) {
        setDatos(datos.map(e => e.id !== id ? e : {
            ...e, seriesCompletadas: e.seriesCompletadas.map((s, i) => i === idx ? !s : s)
        }));
    }

    return { datos, form, handleForm, agregar, eliminar, toggleSerie };
}