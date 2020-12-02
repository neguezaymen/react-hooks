import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Matrix",
      rate: 5,
      description:
        "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les ...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
    },
    {
      title: "Jhon Wick",
      rate: 3,
      description:
        "Depuis la mort de sa femme bien-aimée, John Wick passe ses journées à retaper sa Ford Mustang de 1969, avec pour seule compagnie sa chienne Daisy...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
    },
    {
      title: "Inception",
      rate: 2,
      description:
        "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/71uKM%2BLdgFL._AC_SY879_.jpg",
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
