import styled from "styled-components";
import SessionHour from "./SessionHour";

export default function Session({filme}){
    return (
        filme.days.map( hor => {
            return (
                <SessionContainer data-test="movie-day" key={hor.id}>
                    {hor.weekday} - {hor.date}
                    <ButtonsContainer>
                        <SessionHour data-test="showtime" hor={hor}/>
                    </ButtonsContainer>
                </SessionContainer>
            )
        })
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`