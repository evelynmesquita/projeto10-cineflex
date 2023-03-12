import axios from "axios";
import Assento from "./Seat";
import styled from "styled-components"
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom"

export default function SeatsPage({ selected, setSelected, setPurchase }) {

    const COLLORS = [
        { nome: "Selecionado", cor: "#1AAE9E", borda: "#0E7D71" },
        { nome: "Disponível", cor: "#C3CFD9", borda: "#808F9D" },
        { nome: "Indisponível", cor: "#FBE192", borda: "#F7C52B" },
    ]

    const [seatList, setSeatList] = useState(undefined);
    const { idSessao } = useParams();
    const [inputName, setInputName] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

        const promise = axios.get(URL);
        promise.then(res => {
            const confirm = { nomeFilme: res.data.movie.title, diaFilme: res.data.day.date, horaFilme: res.data.name };
            setPurchase(confirm);
            const seatList = res.data;
            setSeatList(seatList);
        })
        promise.catch(err => {
            console.log(err.response.data);
        })

    }, [])

    if (seatList === undefined) {
        return <Spinner></Spinner>;
    }

    function enviarCompra(event) {
        event.preventDefault();
        if (selected.ids.length !== 0) {
            const body = { ids: [...selected.ids], name: { inputName }, cpf: { cpfInput } };
            setSelected(body);

            const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
            const promise = axios.post(URL, body);

            promise.then(res => {
                navigate("/sucesso")
                console.log(res);

            });
            promise.catch(err => { alert(`Erro: ${err.response.data}`) });
        }
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                <Assento seatList={seatList} selected={selected} setSelected={setSelected} inputName={inputName} cpfInput={cpfInput} />
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle COLLORS={COLLORS} cor={COLLORS[0].nome} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle COLLORS={COLLORS} cor={COLLORS[1].nome} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle COLLORS={COLLORS} cor={COLLORS[2].nome} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                <form onSubmit={enviarCompra}>
                    <label htmlFor="campoNome">Nome do Comprador:</label>
                    <input data-test="client-name" placeholder="Digite seu nome..." id="campoNome" type="text" value={inputName} onChange={e => setInputName(e.target.value)} required />

                    <label htmlFor="campoCPF">CPF do Comprador:</label>
                    <input data-test="client-cpf" placeholder="Digite seu CPF..." id="campoCPF" type="number" value={cpfInput} onChange={e => setCpfInput(e.target.value)} required />

                    <button data-test="book-seat-btn"> Reservar Assento(s)</button>
                </form>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={seatList.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{seatList.movie.title}</p>
                    <p>{seatList.day.weekday} - {seatList.name} </p>
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
    border: 1px solid ${props => {
        if (props.cor === "Disponível") {
            return props.COLLORS[1].borda;
        } else if (props.cor === "Indisponível") {
            return props.COLLORS[2].borda;
        } else {
            return props.COLLORS[0].borda;
        }
    }};

    background-color: ${props => {
        if (props.cor === "Disponível") {
            return props.COLLORS[1].cor;
        } else if (props.cor === "Indisponível") {
            return props.COLLORS[2].cor;
        } else {
            return props.COLLORS[0].cor;
        }
    }};

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