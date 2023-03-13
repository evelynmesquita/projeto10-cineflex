import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage( {selected, purchase, seatSelected} ) {

    return (
        <PageContainer>
            <h1>Pedido feito com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{purchase.nomeFilme}</p>
                <p>{purchase.diaFilme} - {purchase.horaFilme}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {selected.ids.map( (assento,indice) => <p key={assento}>Assento {seatSelected[indice]}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {selected.name}</p>
                <p>CPF: {selected.cpf}</p>
            </TextContainer>

            <Link to={"/"} data-test="go-home-btn">
                <button>Voltar para Home</button>            
            </Link>
        </PageContainer>
    )
}


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 80px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
        width: 150px;
        padding-bottom: 10px;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`