import { Link } from "react-router-dom";

export default function SessaoFilme(props){
    return (
    <div className='caixa-sessao-filme'>
        <div className='texto-sessao-filme'>
            <h1>{props.weekday} - {props.date}</h1>
        </div>
        <div className='caixa-horario-filme'>
            {props.showtimes.map( (item) => (
                <div className='botao-sessao' key={item.id}>
                    <Link to={`/assentos/${item.id}`} >
                        <button>{item.name}</button>
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
}
