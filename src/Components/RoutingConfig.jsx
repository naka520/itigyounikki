import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Garally from "./Garally";


export const RouterConfig =() => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="garally" element={<Garally />} />
        </Routes>
        </BrowserRouter>
        </>
    );
}