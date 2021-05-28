import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CharacterPage from "./CharacterPage"
import Card from "./Card"

function Film(){}



function App() {
  const [listCharacters, setListCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(function () {
    fetch("https://swapi.dev/api/people/")
      .then(function (response) {
        return response.json()
      }).then((data) => {
        setListCharacters(data.results)
        setNextUrl(data.next) // url to page 2
        setPrevUrl(data.previous) // url to page 2

      })
  }, [])

  // will change the state of app
  function loadMore() {
    // fetch the next url
    fetch(nextUrl)
      .then(function (response) {
        return response.json()
      }).then(function (data) {
        // update the state
        setListCharacters([
          ...listCharacters, // old state
          ...data.results
        ])
        // set the next to the next page
        setNextUrl(data.next)
        setPrevUrl(data.previous)
      })
  }


  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/test">
            <h1>Test</h1>
          </Route>
          <Route path="/character/:id">
            <CharacterPage></CharacterPage>
          </Route>
          <Route to="/">
            <h1>Star Wars Catalog</h1>
            <div className="card-container">
              {listCharacters.map(function (character) {
                return <Card character={character}></Card>
              })}
            </div>
            <button onClick={loadMore} data-cy="load-more">Load More</button>
          </Route>

        </Switch>
        <Link path="/test">
          <p>Test</p>
        </Link>
      </Router>
    </div>


  );
}

export default App;
