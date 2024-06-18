import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function Search({ apiPath }) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search result for '${queryTerm}'`;
  });
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result fount for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            //   console.log(movie);
          ))}
        </div>
      </section>
    </main>
  );
}
export default Search;
