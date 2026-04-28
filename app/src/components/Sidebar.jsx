import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, CheckCircle, Dumbbell, Smile, LayoutGrid, ChevronDown, ChevronUp } from "lucide-react";
import useUserStore from "../store/UserStore";

const menu = [
  { label: "Inicio", path: "/", icon: Home },
  {
    label: "Aplicaciones", icon: LayoutGrid, children: [
      { label: "Todo List", path: "/todo", icon: CheckCircle },
      { label: "Plan Fitness", path: "/planfitness", icon: Dumbbell },
      { label: "Pokemon", path: "/pokemon", icon: Smile },
    ]
  },
];

export function Sidebar() {
  const [open, setOpen] = useState(null);
  const { user } = useUserStore();

  return (
    <aside className="w-60 h-screen bg-black text-white flex flex-col p-4 gap-1">
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 px-2">Dashboard</h2>

      {menu.map(({ label, path, icon: Icon, children }) => (
        <div key={label}>
          {path ? (
            <NavLink to={path} end className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? "bg-white text-black font-medium" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <Icon size={16} /> {label}
            </NavLink>
          ) : (
            <>
              <button onClick={() => setOpen(open === label ? null : label)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 w-full transition-colors">
                <Icon size={16} /> {label}
                <span className="ml-auto">{open === label ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
              </button>
              {open === label && children.map(({ label: cl, path: cp, icon: CIcon }) => (
                <NavLink key={cl} to={cp} className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 pl-8 rounded-lg text-sm transition-colors ${isActive ? "bg-white text-black font-medium" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                  <CIcon size={15} /> {cl}
                </NavLink>
              ))}
            </>
          )}
        </div>
      ))}

      <div className="mt-auto pt-3 border-t border-white/10">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-colors">
          <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-white/20 flex-shrink-0" />
          <div className="flex flex-col overflow-hidden flex-1">
            <span className="text-xs font-medium text-white truncate">{user.name}</span>
            <span className="text-xs text-gray-500 truncate">{user.email}</span>
          </div>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white text-black flex-shrink-0">
            {user.plan}
          </span>
        </div>
      </div>
    </aside>
  );
}