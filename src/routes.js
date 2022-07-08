import Home from "./pages/Home"
import Country from "./pages/Country"

export const routes = [
    {
        path: '/',
        element: Home
    },

    {
        path: '/name/:name',
        element: Country
    }

]