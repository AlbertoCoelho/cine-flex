import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import ReservaDeAssentos from "./ReservaDeAssentos";

export default function PaginaDeSucesso(props){
    const {nome,data,horario, objetoPost} = useLocation().state;
    console.log(objetoPost);
    const meuarray = objetoPost.objetoAssento.ids;
    const cpf = objetoPost.objetoAssento.cpf.informacaocpfusuario;
    const nomedousuario = objetoPost.objetoAssento.name.informacaonomeusuario;

    return(
        <div className="main-container">
            <div className="texto-pedido-sucesso">
                <h1>Pedido feito<p></p> com sucesso!</h1>
            </div>

            <div className="container-informacao-pedido">
                <div className="bloco-informacao">
                    <div className="subtitulo">
                        <h2>Filme e sessão</h2>
                    </div>

                    <div className="label">
                        <span>{nome}</span><p></p>
                        <span>{data} {horario}</span>
                    </div>
                </div>

                <div className="bloco-informacao">
                    <div className="subtitulo">
                      <h2>Ingressos</h2>
                     </div>

                    {meuarray.map( (item) => (<ReservaDeAssentos key={item} valor={item}/>))} 
                </div>

                <div className="bloco-informacao">
                    <div className="subtitulo">
                        <h2>Comprador</h2>
                    </div>

                    <div className="label">
                        <span>Nome: {nomedousuario} </span><p></p>
                        <span>CPF: {cpf} </span>
                    </div>
                </div>

    
                </div>

            <button className='botao-voltar-home'>
                <Link to={"/"}>
                    <span>Voltar pra Home</span>
                </Link>
            </button> 

        </div>
    );
}