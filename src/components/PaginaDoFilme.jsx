import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PaginaDoFilme(){

    const { idFilme } = useParams();
    const [ sessaoFilme, setSessaoFilme] = useState(null);

    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promise.then ( response => {
            console.log(response.data);
            setSessaoFilme(response.data);
        })
    }, []);


    if (sessaoFilme === null) {
        return <h1>Carregando...</h1>
    }


    return (
        <div className="main-container">
            <div className="texto-main-container">
                <h2>Selecione o horário</h2>
            </div>

            {sessaoFilme.days.map ( (item) => <PropsFilme weekday={item.weekday} date={item.date} name1={item.showtimes[0].name}
            name2={item.showtimes[1].name} id={item.id}/>)}


            <div className='footer'>
                <div className='caixa-imagem-filme'>
                   <img src={sessaoFilme.posterURL} />
                </div>
                <div className='texto-footer'>
                    <h2>{sessaoFilme.title}</h2>        
                </div>
            </div>

        </div>            
    );
}

function PropsFilme(props){
    return (
    <div className='caixa-sessao-filme'>
        <div className='texto-sessao-filme'>
            <h1>{props.weekday} - {props.date}</h1>
        </div>
        <div className='caixa-horario-filme'>
            <div className='botao-sessao'>
                <Link to={`/assentos/${props.id}`}>
                    <button>{props.name1}</button>
                </Link>
            </div>
            <div className='botao-sessao'>
                <Link to={`/assentos/${props.id}`} >
                    <button>{props.name2}</button>
                </Link>
            </div>
        </div>
    </div>
    );
}
