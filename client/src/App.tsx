import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Routes } from "@/routes";
import './assets/styles/index.css'
import { Nav } from "./components/Nav";

const router = createBrowserRouter(createRoutesFromElements(Routes))
const App = () => {
    return <><RouterProvider router={router} /></>
}
export default App