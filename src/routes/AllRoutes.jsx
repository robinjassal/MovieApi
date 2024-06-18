import { Routes, Route } from "react-router-dom";
import { MoviesList, MovieDetail, Search, PageNotFound } from "../pages";

import React from "react";

function AllRoutes() {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MoviesList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MoviesList apiPath="movie/popular" title="popular" />}
        />
        <Route
          path="movies/top"
          element={<MoviesList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MoviesList apiPath="movie/upcoming" title="upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
