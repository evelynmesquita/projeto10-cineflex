import { Link } from "react-router-dom";

export default function SessionHour({ hor }) {
    return (
        hor.showtimes.map(hourMovie => {
            return <Link to={`/assentos/${hourMovie.id}`}
                key={hourMovie.id}>
                <button>{hourMovie.name}</button></Link>
        })
    )
}