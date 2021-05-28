import { useState } from "react"
import {Link} from "react-router-dom"

export default function Card(props) {
    const id = props.character.url.split("/")[5]
    const [counter, setCounter] = useState(0)

    return <div className="card">
        <Link to={`/character/${id}`}>
            <h4>{props.character.name}</h4>
            <p>Height: {props.character.height} cm</p>
            <p>Birth Year: {props.character.birth_year} cm</p>
            <p>{props.character.films.length} Films</p>
        </Link>
        <h5>Counter: {counter}</h5>
    </div>

}