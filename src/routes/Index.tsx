import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Service from "../pages/Service";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/service",
        element: <Service />
    }
])