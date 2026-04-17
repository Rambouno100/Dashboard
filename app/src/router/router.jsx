import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Home } from "../pages/Home";
import { TodoPage } from "../features/todo/todo";
import { PlanFitnessPage } from "../features/planfitness/planfitness";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "todo", element: <TodoPage /> },
            { path: "planfitness", element: <PlanFitnessPage /> },

        ],
    },
]);
