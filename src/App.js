import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer } from 'react';
import axios from "axios";
import { initialState, reducer } from './store/reducers';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Movies from './components/Movies';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MovieDetails from './components/MovieDetails';


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

function App() {

function MovieApp() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((res) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: res.data.Search
      });
    });
  }, []);

  const { movies, errorMessage, loading } = state;

  const search = async(searchKey) => {
    dispatch({ type: "SEARCH_MOVIES_REQUEST" });
    await axios(`https://www.omdbapi.com/?s=${searchKey}&apikey=4a3b711b`).then((res) => {
      if(res.status === 200 ){
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: res.data.Error
        });
      }
    })
  }

  return (
    <div className="App">
      <div className="Container">
        <Navbar title="Movies" />
        <Search search={search} />
        <p className="App-intro">Enjoy the unlimited free movies</p>
        <div className="card" >
          { loading && !errorMessage ? 
            <h4>loading...</h4> 
            : 
              movies?.map((data, idx) => {
                return (
                    <Movies data={data} key={idx}/>
                );
              })
          }
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MovieApp/> } />
        <Route path="movie" element={ <MovieDetails/> } /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
