
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

export default function CharacterPage(){
    // need one of them
    let { id } = useParams();
    const [characterData, setCharacterData] = useState({});
  
    useEffect(function () {
      fetch("https://swapi.dev/api/people/" + id)
        .then(function (response) {
          return response.json()
        }).then((data) => {
          setCharacterData(data)
        })
    }, [])
  
    return <div>
      <h1>{characterData.name}</h1>
      <h1>{characterData.height}</h1>
      <div>
        {characterData.films && characterData.films.map(film => <p>{film}</p>)}
      </div>
    </div>
  }