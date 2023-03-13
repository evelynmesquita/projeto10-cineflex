import styled from "styled-components";
import SessionHour from "./SessionHour";

export default function Session({ movie }) {
    return (
        movie.days.map(hour => {
            return (
                <SessionContainer data-test="movie-day" key={hour.id}>
                    {hour.weekday} - {hour.date}
                    <ButtonsContainer>
                        <SessionHour hour={hour} />
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