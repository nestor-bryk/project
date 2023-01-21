"use strict";

const numberOfFilms = prompt('Скільки фільмів ви вже подивилися ?', ''),
      lastWachedFilm = prompt('Один з послідніх переглянутих фільмів ?', ''),
      ratingFilm = prompt('На скільки оціните фільм ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastWachedFilm] = ratingFilm; 