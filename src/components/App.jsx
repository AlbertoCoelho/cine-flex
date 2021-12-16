import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaDoFilme from "./PaginaDoFilme";


export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}></Route>
                <Route path="/sessoes/:idFilme" element={<PaginaDoFilme />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

/*
*/