import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PaginaPrincipal from "./Pagina_Principal/PaginaPrincipal";
import PaginaDoFilme from "./Pagina_Do_Filme/PaginaDoFilme";
import PaginaDeAsssentos from "./Pagina_De_Assentos/PaginaDeAssentos";
import PaginaDeSucesso from "./Pagina_De_Sucesso/PaginaDeSucesso";


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
