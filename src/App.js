import { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

    const [selected, setSelected] = useState({ ids: [], name: "", cpf: "" });
    const [purchase, setPurchase] = useState({ nomeFilme: "", diaFilme: "", horaFilme: "" });
    const [seatSelected, setSeatSelected] = useState([]);

    return (
        <BrowserRouter>
            <Link to={"/"}><NavContainer>CINEFLEX</NavContainer></Link>

            <Routes>
                <Route path="/" element={<HomePage
                        selected={selected}
                        setSelected={setSelected}
                        setSeatSelected={setSeatSelected} />} />

                <Route path="/assentos/:idSessao" element={<SeatsPage
                        selected={selected}
                        setSelected={setSelected}
                        purchase={purchase}
                        setPurchase={setPurchase}
                        seatSelected={seatSelected}
                        setSeatSelected={setSeatSelected} />} />

                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />

                <Route path="/sucesso" element={<SuccessPage
                        selected={selected}
                        purchase={purchase}
                        seatSelected={seatSelected} />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`