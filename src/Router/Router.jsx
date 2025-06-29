import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Loading from "../Components/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () => fetch("/projects.json"),
                hydrateFallbackElement: <Loading/>
            },
        ]
    },
]);