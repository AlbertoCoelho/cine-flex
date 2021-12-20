import { useState} from 'react';
import styled from 'styled-components';

export default function AssentosFilme(props) {
    const [toggled, setToggled] = useState(false);

    const {id,name,isAvailable,assentosSelecionados,setAssentosSelecionados} = props;

    function selecionarAssento (){
        toggled ? setToggled(false) : setToggled(true);
        if(assentosSelecionados.find(idAssento => idAssento === id )){
            assentosSelecionados.splice(assentosSelecionados.indexOf(id),1);
        } else {
            assentosSelecionados.push(id);
        }
        setAssentosSelecionados([...assentosSelecionados]);
    }

    if(isAvailable === true){
        return (
            <AssentoFilmeIndisponivel onClick={( () => alert("Esse assento não está disponível"))}>
                <span>{name}</span>
            </AssentoFilmeIndisponivel>
        );
    } else {
        return (
            <AssentoFilmeDisponivel color={toggled} onClick={selecionarAssento}>
                <span>{name}</span>
            </AssentoFilmeDisponivel>
        );
    }

}

const AssentoFilmeDisponivel = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) => props.color ? '#8DD7CF' : '#C3CFD9'};
    border: ${(props) => props.color ? '1px solid #1AAE93' : '1px solid #7B8B99'};
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;

    cursor: pointer;
`

const AssentoFilmeIndisponivel = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;

    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;

    cursor: pointer;
` 