import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Home } from "../pages/Home";
import { TodoPage } from "../features/todo/todo";
import { PlanFitnessPage } from "../features/planfitness/planfitness";
import { PokemonPage, PokemonDetailPage } from "../features/pokemon/pokemon";
import LoginPage from '../pages/Login'
import ProtectedRoute from '../components/protected-route'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },

    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    { index: true, element: <Home /> },
                    { path: "todo", element: <TodoPage /> },
                    { path: "planfitness", element: <PlanFitnessPage /> },
                    { path: "pokemon", element: <PokemonPage /> },
                    { path: "pokemon/:id", element: <PokemonDetailPage /> },
                ],
            },
        ],
    },
]);
