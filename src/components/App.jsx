import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaDoFilme from "./PaginaDoFilme";
import PaginaDeAsssentos from "./PaginaDeAssentos";
import PaginaDeSucesso from "./PaginaDeSucesso";


export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaPrincipal />}></Route>
                <Route path="/sessoes/:idFilme" element={<PaginaDoFilme />}></Route>
                <Route path="/assentos/:idSessao" element={<PaginaDeAsssentos />}></Route>
                <Route path="/sucesso" element={<PaginaDeSucesso />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

/*
*/