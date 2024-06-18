import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

function MoviesList({ apiPath, title }) {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            //   console.log(movie);
          ))}
        </div>
      </section>
    </main>
  );
}

export default MoviesList;
//  "https://api.themoviedb.org/3/movie/now_playing?api_key=e708357a077c674400e3dd238f6138a0"
