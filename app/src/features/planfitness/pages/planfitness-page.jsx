import { useFitnessPlan } from "../hooks/use-fitnessplan";
import { PlanFitnessCard } from "../components/PlanFitnessCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PlanFitnessPage() {
    const { datos, form, handleForm, agregar, eliminar, toggleSerie } = useFitnessPlan();

    const inputs = [
        { name: "type_exercise", placeholder: "Ejercicio", className: "flex-1" },
        { name: "series", placeholder: "Series", className: "w-20", type: "number" },
        { name: "reps", placeholder: "Reps", className: "w-20", type: "number" },
        { name: "rest", placeholder: "Descanso", className: "w-24" },
        { name: "image", placeholder: "URL imagen", className: "flex-1" },
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-6">Plan Fitness</h1>

            <div className="flex gap-2 mb-8 flex-wrap items-center">
                {inputs.map(({ name, placeholder, className, type = "text" }) => (
                    <Input key={name} name={name} type={type} value={form[name]}
                        onChange={handleForm} placeholder={placeholder} className={className} />
                ))}
                <Button onClick={agregar} disabled={!form.type_exercise || !form.series || !form.reps}>
                    Agregar
                </Button>
            </div>

            {datos.length === 0
                ? <p className="text-sm text-gray-400">No hay ejercicios todavía.</p>
                : <div className="flex flex-wrap gap-4">
                    {datos.map(e => <PlanFitnessCard key={e.id} exercise={e} onDelete={eliminar} toggleSerie={toggleSerie} />)}
                </div>
            }
        </div>
    );
}