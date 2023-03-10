import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

export default function HomePage({ 
        setSelected, 
        setSeatSelected 
    }) {

    const [moviesImage, setMoviesImage] = useState(null);


    useEffect(() => {

        const promisse = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        promisse.then(resp => {
            setMoviesImage(resp.data);
        });

        promisse.catch(error => {
            setMoviesImage(error.response.data)
        });

        const cleanID = { ids: [], name: "", cpf: "" };
        setSelected(cleanID);
        setSeatSelected([]);

    }, []);


    if (moviesImage === null) {
        return <Spinner></Spinner>;
    }

    return (
        <PageContainer>
            Selecione o Filme

            <ListContainer>
                {moviesImage.map(filme => {
                    return (
                        <MovieContainer data-test="movie" key={filme.id}>
                            <Link to={`/sessoes/${filme.id}`}>
                                <img src={filme.posterURL} alt={filme.title} />
                            </Link>
                        </MovieContainer>
                    )
                })}

            </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`