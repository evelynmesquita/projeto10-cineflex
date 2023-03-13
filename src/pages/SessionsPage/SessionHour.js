import { Link } from "react-router-dom";

export default function SessionHour({ hour }) {
    return (
        hour.showtimes.map(horario => {
            return <Link to={`/assentos/${horario.id}`}
                key={horario.id}>
                <button data-test="showtime">{horario.name}</button>
            </Link>
        })
    )
}