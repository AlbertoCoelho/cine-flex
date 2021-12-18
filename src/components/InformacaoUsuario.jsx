export default function InformacaoUsuario(props){

    return (
        <div className="dividir-informacao">
            <div className="titulo-input">
                <h1>{props.tituloinput}</h1>
            </div>
            <input onChange={ (event) => console.log(event.target.value) } placeholder={props.placeholder}/>
        </div>
    );
}