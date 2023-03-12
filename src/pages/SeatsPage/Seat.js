import styled from "styled-components";

export default function Seat({ seatList, selected, setSelected, inputName, cpfInput }) {

    const COLLORS = [
        { nome: "Selecionado", cor: "#1AAE9E", borda: "#0E7D71" },
        { nome: "Disponível", cor: "#C3CFD9", borda: "#808F9D" },
        { nome: "Indisponível", cor: "#FBE192", borda: "#F7C52B" },
    ]

    return (
        seatList.seats.map(seat => {

            function seatSelect() {
                if (!selected.ids.includes(seat.id)) {
                    if (seat.isAvailable === true) {
                        const select = { ids: [...selected.ids, seat.id], name: { inputName }, cpf: { cpfInput } };
                        setSelected(select);
                        seat.isAvailable = null;
                    } else {
                        alert("Esse assento não está mais disponível. Por favor, selecione outro assento.");
                    }
                } else if (selected.ids.includes(seat.id)) {
                    if (seat.isAvailable === null) {
                        const select = { ids: [...selected.ids, seat.id], name: { inputName }, cpf: { cpfInput } };
                        const selectFilter = select.ids.filter(value => value !== seat.id);
                        const newSelect = { ids: selectFilter, name: { inputName }, cpf: { cpfInput } };
                        setSelected(newSelect);
                        seat.isAvailable = true;
                    }
                }
            }

            return <SeatItem data-test="seat" onClick={() => seatSelect()} key={seat.id} COLLORS={COLLORS} isAvailable={seat.isAvailable}>{seat.name}</SeatItem>
        })
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => {
        if (props.isAvailable === true) {
            return props.COLLORS[1].borda;
        } else if (props.isAvailable === false) {
            return props.COLLORS[2].borda;
        } else if (props.isAvailable === null) {
            return props.COLLORS[0].borda;
        }
    }};

    background-color: ${props => {
        if (props.isAvailable === true) {
            return props.COLLORS[1].cor;
        } else if (props.isAvailable === false) {
            return props.COLLORS[2].cor;
        } else if (props.isAvailable === null) {
            return props.COLLORS[0].cor;
        }
    }};

    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`