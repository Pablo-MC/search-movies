import React from 'react';


const Movie = ({ movie }) => {

   const img_api = 'https://image.tmdb.org/t/p/w300';

   return (
      <>
         {movie.poster_path && movie.vote_average > 0
         ?
            <>
               <div className="card shadow-lg my-4 mx-auto">
                  <img src={img_api + movie.poster_path} className="card-img-top" alt={movie.title} />
                  <div className="card-body border-top d-flex justify-content-between p-3">
                     <p className="card-title lead font-weight-normal mb-0 w-75">{(movie.title).substring(0, 18)}</p>
                     <p className="lead mb-0">{movie.vote_average}</p>
                  </div>
               </div>
            </>
         :
            null
         }
      </>
   );
}

export default Movie;