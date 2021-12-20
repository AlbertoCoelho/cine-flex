import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SessaoFilme from './SessaoFilme';

export default function PaginaDoFilme(){

    const { idFilme } = useParams();
    const [ sessaoFilme, setSessaoFilme] = useState(null);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then ( response => {
            setSessaoFilme(response.data);
        })
    }, []);


    if (sessaoFilme === null) {
        return (
            <div className='loading'>
                <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt='loading' />
            </div>
        );
    }


    return (
        <div className="main-container">
            <div className="texto-main-container">
                <h2>Selecione o horário</h2>
            </div>

            {sessaoFilme.days.map ( (item) =>(
                <SessaoFilme 
                    weekday={item.weekday} 
                    date={item.date} 
                    showtimes={item.showtimes}
                    key={item.id}
                />))}


            <div className='footer'>
                <div className='caixa-imagem-filme'>
                   <img src={sessaoFilme.posterURL} alt='imagemurl' />
                </div>
                <div className='texto-footer'>
                    <h2>{sessaoFilme.title}</h2>        
                </div>
            </div>

        </div>            
    );
}


