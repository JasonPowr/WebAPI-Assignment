import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRated } from "../api/movie-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToWatchList from '../components/cardIcons/addToWatchList';

const TopRatedMoviePage = (props) => {
  console.log("TopRatedMoviePage")
    const [movies, setMovies] = useState([]);
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    const addToFavorites = (movieId) => {
      const updatedMovies = movies.map((m) =>
        m.id === movieId ? { ...m, favorite: true } : m
      );
      setMovies(updatedMovies);
    };
  
    useEffect(() => {
      getTopRated().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Top Rated'
        movies={movies}
        
        action={(movie) => {
          return <AddToWatchList movie={movie} />
        }}

        selectFavorite={addToFavorites}
      />
    );
  };
  export default TopRatedMoviePage;