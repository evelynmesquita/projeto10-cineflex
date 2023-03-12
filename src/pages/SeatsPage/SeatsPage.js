import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import Seat from "./Seat";
import Spinner from "../../components/Spinner";

export default function SeatsPage() {

    const [movie, setMovie] = useState(undefined);
    const { idSessao } = useParams();
    const [colorSeat, setColorSeat] = useState(true);

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

        const promise = axios.get(url);
        promise.then(res => {
            setMovie(res.data);
        })
        promise.catch(err => {
            console.log(err.response.data);

        })


    }, [])

    if (movie === undefined) {
        return <Spinner></Spinner>
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                <Seat filme={movie} />
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle colorSeat={null} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle colorSeat={true} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle colorSeat={false} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={movie.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{movie.movie.title}</p>
                    <p>{movie.day.weekday} - {movie.name} </p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.colorSeat === null ? "#0E7D71" : props.colorSeat === true ? "#808F9D" : "#F7C52B"};
    background-color: ${props => props.colorSeat === null ? "#1AAE9E" : props.colorSeat === true ? "#C3CFD9" : "#FBE192"};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`
const Carregando = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
`