import styled from "styled-components";

export default function Seat({ filme }) {
    return (
        filme.seats.map(seat => {
            return <SeatItem
                key={seat.id}
                cor={seat.isAvailable}>{seat.name}</SeatItem>
        })
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.cor === false ? "#F7C52B" : "#808F9D"};
    background-color: ${props => props.cor === false ? "#FBE192" : "#C3CFD9"};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px; `