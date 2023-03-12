import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage( {selected, purchase} ) {

    return (
        <PageContainer>
            <h1>Pedido feito com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{purchase.nomeFilme}</p>
                <p>{purchase.diaFilme} - {purchase.horaFilme}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {selected.ids.map( assento => <p key={assento}>Assento {assento}</p>)}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {selected.name.inputName}</p>
                <p>CPF: {selected.cpf.cpfInput}</p>
            </TextContainer>

            <Link to={"/"}>
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