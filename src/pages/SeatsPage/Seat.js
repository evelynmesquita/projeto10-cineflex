import styled from "styled-components";

export default function Seat({
        seatList, 
        selected, 
        setSelected, 
        seatSelected, 
        setSeatSelected, 
        inputName, 
        cpfInput
    }){

    const colorsSeat = [
        {seatState: "Selecionado", colorSeat: "#1AAE9E", borderColor:"#0E7D71"},
        {seatState: "Disponível", colorSeat: "#C3CFD9", borderColor:"#808F9D"},
        {seatState: "Indisponível", colorSeat: "#FBE192", borderColor:"#F7C52B"},
    ]


    return (
        seatList.seats.map( seat => {

            function select(){
                if (!selected.ids.includes(seat.id)){
                    if (seat.isAvailable === true){
                        const selectSeat = {ids: [...selected.ids,seat.id], name: inputName, cpf: cpfInput};
                        setSelected(selectSeat);
                        seat.isAvailable = null;
                        const selectedSeat = [...seatSelected,seat.name];
                        setSeatSelected(selectedSeat);
                    } else {
                        alert("Esse assento não está mais disponível. Por favor, selecione outro assento.");
                    }         
                } else if (selected.ids.includes(seat.id)) {
                    if (seat.isAvailable === null){
                        const selectSeat = {ids: [...selected.ids,seat.id], name: inputName, cpf: cpfInput};
                        const filterSeatSelect = selectSeat.ids.filter( valor => valor !==seat.id );
                        const newSelect = {ids: filterSeatSelect, name: {inputName}, cpf: {cpfInput}};
                        setSelected(newSelect);
                        const filterSeatSelected = seatSelected.filter( valor => valor !== seat.name);
                        setSeatSelected(filterSeatSelected);
                        seat.isAvailable = true;   
                    }     
                }
            }

            return <SeatItem data-test="seat" 
                onClick={() => select()} 
                key={seat.id} 
                colorsSeat={colorsSeat} 
                isAvailable={seat.isAvailable}>{seat.name}</SeatItem>
        })
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => {
        if (props.isAvailable === true){
            return props.colorsSeat[1].borderColor;
        } else if (props.isAvailable === false){
            return props.colorsSeat[2].borderColor;
        } else if (props.isAvailable === null) {
            return props.colorsSeat[0].borderColor;
        }
    }};
    background-color: ${props => {
        if (props.isAvailable === true){
            return props.colorsSeat[1].colorSeat;
        } else if (props.isAvailable === false){
            return props.colorsSeat[2].colorSeat;
        } else if (props.isAvailable === null) {
            return props.colorsSeat[0].colorSeat;
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