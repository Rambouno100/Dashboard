export function PlanFitnessCard({ exercise, onDelete, toggleSerie }) {
    const done = exercise.seriesCompletadas.filter(Boolean).length;
    const total = exercise.seriesCompletadas.length;
    const pct = total ? Math.round(done / total * 100) : 0;

    return (
        <div className={`rounded-2xl border overflow-hidden w-56 flex flex-col ${done === total && total > 0 ? "border-green-300" : "border-gray-200"}`}>
            {exercise.image
                ? <img src={exercise.image} className="w-full h-32 object-cover" />
                : <div className="w-full h-32 bg-gray-100 flex items-center justify-center text-4xl">💪</div>
            }
            <div className="p-4 space-y-3 flex-1">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-sm">{exercise.type_exercise}</p>
                    <span className="text-xs text-gray-400">{done}/{total}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1">
                    <div className="bg-black h-1 rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex gap-2 text-xs text-gray-400">
                    <span>{exercise.series} series</span>
                    <span>{exercise.reps} reps</span>
                    {exercise.rest && <span>{exercise.rest}</span>}
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    {exercise.seriesCompletadas.map((s, i) => (
                        <button key={i} onClick={() => toggleSerie(exercise.id, i)}
                            className={`w-7 h-7 rounded-full text-xs transition-colors ${s ? "bg-black text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
            <div className="px-4 py-2 border-t border-gray-100 text-right">
                <button onClick={() => onDelete(exercise.id)} className="text-xs text-gray-400 hover:text-red-400">Eliminar</button>
            </div>
        </div>
    );
}