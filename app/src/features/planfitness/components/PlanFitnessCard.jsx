export function PlanFitnessCard({ exercise, onDelete, toggleSerie }) {
    const completadas = exercise.seriesCompletadas.filter(Boolean).length;
    const total = exercise.seriesCompletadas.length;

    return (
        <div className="w-64 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={exercise.image} className="w-full h-36 object-cover" />
            <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <p className="font-medium">{exercise.type_exercise}</p>
                    <span className="text-xs text-gray-400">{completadas}/{total}</span>
                </div>
                <div className="flex gap-3 text-xs text-gray-400">
                    <span>{exercise.series} series</span>
                    <span>{exercise.reps} reps</span>
                    <span>{exercise.rest} mins</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {exercise.seriesCompletadas.map((completada, i) => (
                        <button key={i} onClick={() => toggleSerie(exercise.id, i)}
                            className={`w-7 h-7 rounded-full text-xs transition-colors ${completada
                                ? "bg-black text-white"
                                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                                }`}>
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