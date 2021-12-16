import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function PaginaPrincipal(){

    const [imagens, setImagens] = useState([]);

    useEffect( () => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        promise.then( response => {
            setImagens(response.data);
        })
    }, []);

    return (
        <div className="main-container">
            <div className="texto-main-container">
                <h2>Selecione o filme</h2>
            </div>
            <div className="wrapper">
                <div className="images">
                    {imagens.length === 0 && 'Carregando...'}

                    {imagens.map(imagem => (
                        <div className="image">
                        <Link to={`/sessoes/${imagem.id}`}>
                            <img src={imagem.posterURL} />
                        </Link>
                        </div>
                        )
                        )}

                </div>
            </div>
        </div>
    );
}