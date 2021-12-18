import InformacaoPedidoConcluido from "./InformacaoPedidoConcluido";
import {Link} from 'react-router-dom';

export default function PaginaDeSucesso(){

    const informacaopedido = [
        {subtitulo: "Filme e sessão"},
        {subtitulo: "Ingressos"},
        {subtitulo: "Comprador"}
    ];

    return(
        <div className="main-container">
            <div className="texto-pedido-sucesso">
                <h1>Pedido feito<p></p> com sucesso!</h1>
            </div>

            <div className="container-informacao-pedido">
                {informacaopedido.map( (item) => <InformacaoPedidoConcluido key={item.subtitulo} subtitulo={item.subtitulo} />)}
            </div>

            <button className='botao-voltar-home'>
                <Link to={"/"}>
                    <span>Voltar pra Home</span>
                </Link>
            </button> 
        </div>
    );
}