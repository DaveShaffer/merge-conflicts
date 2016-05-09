var mongoose = require('mongoose');
var db = require('./db');
var MovieConstructorFnc = require('./movie');

mongoose.connect('mongodb://localhost/movies');

function quit() {
    mongoose.disconnect();
    console.log('disconnected');
}

function handleErr(err) {
    console.log('ERROR-', err);
    return err;
}

// function getMoviesByGenre(genre) {
//   console.log(genre);
//   MovieConstructorFnc.find(function(err, movies) {
//     console.log(movies);
//     // if (err) return handleErr(err);
//       return movies;
//       // movies.forEach(function(movie) {
//       //   console.log(movie);
//       //   movie.print();
//       });
// }

console.log('clean DB');
MovieConstructorFnc.remove({}, function(err) {
    if (err) return handleErr(err);
    console.log('new DB');
    var theMovies = [
        { title: 'Apocalypto', genre: 'Drama', releaseYear: 2006, director: 'Mel Gibson', rating: 7.8 },
        { title: 'Raising Arizona', genre: 'Comedy', releaseYear: 1987, director: 'Joel and Ethan Coen', rating: 7.4 },
        { title: 'Tora! Tora! Tora!', genre: 'Action', releaseYear: 1970, director: 'Richard Fleischer', rating: 7.5 },
        { title: 'The Pink Panther', genre: 'Comedy', releaseYear: 1963, director: 'Blake Edwards', rating: 7.2 },
        { title: 'Jane Eyre', genre: 'Romance', releaseYear: 1943, director: 'Robert Stevenson', rating: 7.6 },
        { title: '2001: A Space Odyssey', genre: 'Sci-Fi', releaseYear: 1968, director: 'Stanley Kubrick', rating: 8.3 },
        { title: 'Confirmation', genre: 'Drama', releaseYear: 2016, director: 'Rick Famuyiwa', rating: 7.2 },
        { title: 'Frankenstein', genre: 'Horror', releaseYear: 1931, director: 'James Whale', rating: 8.0 },
        { title: 'Koyaanisqatsi', genre: 'Documentary', releaseYear: 1982, director: 'Godfrey Reggio', rating: 8.3 },
        { title: 'Plan 9 from Outer Space', genre: 'Horror', releaseYear: 1959, director: 'Edward D. Wood Jr.', rating: 4.0 },
        { title: 'MASH', genre: 'Comedy', releaseYear: 1970, director: 'Robert Altman', rating: 7.6 },
        { title: 'Dr. No', genre: 'Action', releaseYear: 1962, director: 'Terence Young', rating: 7.3 },
        { title: 'Seven Samurai', genre: 'Drama', releaseYear: 1954, director: 'Akira Kurosawa', rating: 8.7 },
        { title: 'Zero Hour!', genre: 'Drama', releaseYear: 1957, director: 'Hall Bartlett', rating: 6.6 },
        { title: 'Saving Private Ryan', genre: 'Action', releaseYear: 1998, director: 'Steven Spielberg', rating: 8.6 },
        { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994, director: 'Robert Zemeckis', rating: 8.8 },
        { title: 'Amazon Women on the Moon', genre: 'Comedy', releaseYear: 1987, director: 'Joe Dante and Carl Gottlieb', rating: 6.1 }
    ];
    MovieConstructorFnc.create(theMovies, function(err, savedMovies) {
        if (err) return handleErr(err);
        console.log('Movies in DB: ', savedMovies.length);
        // getMoviesByGenre('Drama');
        // getMoviesByGenre('Action');
        // getMoviesByGenre('Comedy');
        MovieConstructorFnc.find({ genre: 'Comedy' }, function(err, movies) {
             if (err) return handleErr(err);
             movies.forEach(function(movie) {
                 movie.print();
             });
             quit();
         });
        // quit();
    });
});
