import React from 'react';
import Movie from './Movie';


const MovieList = ({movies}) => {
    return (
      <>
         {movies.length > 0
         ?
            <div className="row">
               {movies.map(movie => 
                  <Movie key={movie.id} movie={movie} />
               )}
            </div>         
         :
            <div className="alert alert-danger text-center my-4" role="alert">No movies found 
               <span role="img" aria-label="crying face">&#x1f622;</span> 
            </div>
         }
      </>
   );
}

export default MovieList;