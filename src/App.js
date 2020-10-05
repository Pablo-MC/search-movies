import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App() {

   const [search, setSearch] = useState('');
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const callApiMovies = async () => {
         if (search === '') {
            const res = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&sort_by=popularity.desc&include_adult=false&page=${Math.ceil(Math.random()*40)}`);
            setMovies(res.data.results);
         } else {
            const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${search}`);
            setMovies(res.data.results);
         }
      }
      callApiMovies();
   // eslint-disable-next-line
   }, [search]);


   return (
      <div className="container shadow-lg pt-3">
         <Navbar setSearch={setSearch} />
         <MovieList movies={movies} />
         <Footer />
      </div>
   );
}

export default App;