import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AssentosFilme from './AssentosFilme';
import InformacaoUsuario from './InformacaoUsuario';

export default function PaginaDeAsssentos(){
    
    const { idSessao } = useParams();
    const [listaAssentos,setListaAssentos] = useState(null);
    const [assentosSelecionados,setAssentosSelecionados] = useState([]);
    
    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
        promise.then ( response => {
            setListaAssentos(response.data);
        })
    }, []);
    
    if (listaAssentos === null) {
        return (
            <div className='loading'>
                <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt='loading' />
            </div>
        );
            
    }

    return (
        <div className="main-container">
            <div className="texto-main-container">
                <h2>Selecione o(s) assento(s)</h2>
            </div>

            <div className='tela-de-assentos'>
                {listaAssentos.seats.map( (item) => (
                    <AssentosFilme
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isAvailable={item.isAvailable}
                    assentosSelecionados={assentosSelecionados}
                    setAssentosSelecionados={setAssentosSelecionados}
                />))}
            </div>

            <div className='container-status-assentos'>
                <div className='botoes-status-assentos' >
                    <div className='botao-status selecionado'></div>
                    <div className='botao-status disponivel'></div>
                    <div className='botao-status indisponivel'></div>
                </div>
                <div className='texto-status-assentos'>
                    <span>Selecionado</span>
                    <span>Disponível</span>
                    <span>Indisponível</span>
                </div>
            </div>
            
            <InformacaoUsuario assentosSelecionados={assentosSelecionados} nomedofilme={listaAssentos.movie.title} datadofilme={listaAssentos.day.date} horariodofilme={listaAssentos.name}/>
            
            <div className='footer'>
                <div className='caixa-imagem-filme'>
                   <img src={listaAssentos.movie.posterURL} alt='imagemurl'/>
                </div>
                <div className='texto-footer'>
                    <h2>{listaAssentos.movie.title}</h2>   
                    <h2>{listaAssentos.day.weekday} - {listaAssentos.name}</h2>     
                </div>
            </div>
        </div>

    );
}
