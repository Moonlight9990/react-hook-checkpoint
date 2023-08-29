import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    // Initial movie data
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster-url-1',
      rating: 7.5,
    },
    // Add more movies
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(ratingFilter)
    );
  });

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
