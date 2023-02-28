import axios from "axios";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../store/reducers";
import Navbar from "./Navbar";


const MovieDetails = () => {
    //qid from url
    let search = window.location.search
    const params = new URLSearchParams(search)
    const id = params.get("id");
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${"tt0371746"}&apikey=4a3b711b`).then((res) => {
        dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: res.data
        });
        });
    }, []);

    const { movies, errorMessage, loading } = state;
    return (
        <div className="App">
            <div className="Container">
                <Navbar title="Movies" />
                { loading && !errorMessage ? 
                    <h4>loading...</h4> 
                : 
                <div className="card-wrapper">
                    <div className="card-inner-cotainer">
                        <img src={movies.Poster} alt="Avatar" />
                    </div>
                    <div>
                        <h2>{movies.Title}<small>({movies?.Year})</small></h2>
                        <p>Writer: {movies?.Writer}</p>
                        <p>Director: {movies?.Director}</p>
                        <p>Language: {movies?.Language}</p>
                        {movies?.Ratings?.map((r) => {
                            return <div>
                                <p>Source: {r.Source} Rating: {r.Value}</p>
                            </div>
                        })}
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default MovieDetails;