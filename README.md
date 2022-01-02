# Assignment 2 - Web API.
Name: Jason Power
​
## Features.
 + Login/Sign up
 + Protected Routes
 + HomePage using seeded data from custom API
 + Movie Deatils using custom Api with data from tmdb
 + Movie Reviews using custom Api with data from tmdb
 + Upcoming Movies using custom Api with data from tmdb
 + Now Playing Movies using custom Api with data from tmdb
 + Top Rated Movies using custom Api with data from tmdb
​
## Installation Requirements
+ Clone the repo from https://github.com/JasonPowr/WebAPI-Assignment.git .
+ Install Nodeman using this command "npm install --save-dev nodemon" in the movies API folder.
+ Use the command "npm install" in the react app folder.
+ Run the command "npm start in movies-api"
+ Run the command "npm start in reactApp"

## API Configuration
+ Create a .env file in react app with the following contents.
  REACT_APP_TMDB_KEY= Your_TMDB_KEY

+ Create a .env file in movies-api with the following contents.

  NODE_ENV=development
  PORT=8080
  HOST=localhost
  MONGO_DB=mongodb://localhost:27017/movies_db
  SEED_DB=True  
  SECRET=ilikecake
  TMDB_KEY= Your_TMDB_KEY

## API Design
+ /api/movies/tmdb/nowplaying
+ /api/movies/tmdb/toprated
+ /api/users
+ /api/users?action=register
+ /api/movies
+ /api/movies/tmdb/${id}
+ /api/movies/tmdb/${id}/reviews
+ /api/movies/tmdb/upcoming

## Security and Authentication
Simple but functional login and sign up page. Every page except for  login and sign up page are protected unitl Login.
​
## Integrating with React App
To begin with I cloned the react App and copied the movies API into the app. I then changed the fetches to suit my custom API in two ways:

1.Seeded Data fetch
~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
~~~

2.Data from my custom API and through tmdb.
~~~Javascript
export const getNowPlaying = () => {
  return fetch(
    //`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    '/api/movies/tmdb/nowplaying', {
      headers: {
        'Authorization': window.localStorage.getItem('token') //api
      } 
  }
  )
    .then(res => res.json())
    .then(json => json.results);
~~~

Endpont for Above.
~~~Javascript
    router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));

~~~
## Extra features
No Extra features.

## Independent learning
No Independent learning.