import React from "react";
import { useNavigate } from "react-router-dom";
const DEFAULT_PLACEHOLDER_IMAGE = "https://media.comicbook.com/files/img/default-movie.png";


const Movies = (props) => {
  const { Poster, Title, Year,imdbID } = props.data
  const poster = !Poster || Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : Poster ;
  let navigate = useNavigate();
  const handleOnclick = () => {
    navigate(`/movie?id=${imdbID}`)
  }

  return (
    <div className="card-inner-cotainer" onClick={handleOnclick}>
        <img src={poster} alt="Avatar" />
        <div className="container">
            <h4><b>{Title}</b></h4> 
            <p>{Year}</p> 
        </div>
    </div>
  );
};


export default Movies;