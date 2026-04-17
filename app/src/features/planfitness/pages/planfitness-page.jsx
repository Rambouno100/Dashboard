import { useFitnessPlan } from "../hooks/use-fitnessplan";
import { PlanFitnessCard } from "../components/PlanFitnessCard";

export function PlanFitnessPage() {
    const { datos, form, handleForm, agregarEjercicio, eliminarEjercicio, toggleSerie } = useFitnessPlan();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-medium mb-6">Plan Fitness</h1>

            <div className="flex gap-2 mb-8">
                <input name="type_exercise" value={form.type_exercise} onChange={handleForm} placeholder="Ejercicio" className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black" />
                <input name="reps" value={form.reps} onChange={handleForm} placeholder="Reps" className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black w-20" />
                <input name="series" value={form.series} onChange={handleForm} placeholder="Series" className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black w-20" />
                <input name="rest" value={form.rest} onChange={handleForm} placeholder="Descanso" className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black w-24" />
                <input name="image" value={form.image} onChange={handleForm} placeholder="Imagen URL" className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-black flex-1" />
                <button onClick={agregarEjercicio} className="bg-black text-white px-4 py-2 rounded-lg text-sm">Agregar</button>
            </div>

            {datos.length === 0
                ? <p className="text-gray-400 text-sm">No hay ejercicios todavía.</p>
                : <div className="flex flex-wrap gap-4">
                    {datos.map(exercise => (
                        <PlanFitnessCard key={exercise.id} exercise={exercise} onDelete={eliminarEjercicio} toggleSerie={toggleSerie} />
                    ))}
                </div>
            }
        </div>
    );
}