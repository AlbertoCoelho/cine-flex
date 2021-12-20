import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function InformacaoUsuario(props){ 

    const [informacaonomeusuario, setInformacaoNomeUsuario] = useState("");
    const [informacaocpfusuario, setInformacaoCpfUsuario] = useState("");

    let navigate = useNavigate();

    const armazenar = (chave,valor) =>{
        localStorage.setItem(chave,valor)
    }

    const objetoAssento = {
        ids: props.assentosSelecionados,
        name: {informacaonomeusuario},
        cpf: {informacaocpfusuario}
    }

    const objectState = {nome: props.nomedofilme, data: props.datadofilme, horario: props.horariodofilme, objetoPost: {objetoAssento}};

    return (
        <>
        <div className='informacoes-usuario'>
            <div className="dividir-informacao">
                <div className="titulo-input">
                    <h3>Nome do Comprador:</h3>
                </div>
                <input onChange={ (event) => setInformacaoNomeUsuario(event.target.value) } placeholder="Digite seu nome..." value={informacaonomeusuario} />
            </div>

            <div className="dividir-informacao">
            <div className="titulo-input">
                <h3>CPF do comprador:</h3>
            </div>
            <input onChange={ (event) => setInformacaoCpfUsuario(event.target.value) } placeholder="Digite seu CPF..." value={informacaocpfusuario} />
            </div>
        </div>

        <button className='botao-reservar-assento' onClick={() => axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", objetoAssento)
        .then ( (response) => navigate("/sucesso/", {state: objectState }) ) }>
            <span>Reservar assento(s)</span>
        </button>
        
        </>
    );
}
