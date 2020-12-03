const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("Насколько оцените", "");
const c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("Насколько оцените", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;