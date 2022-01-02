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
};

export const getTopRated = () => {
  return fetch(
    //`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    '/api/movies/tmdb/toprated', {
      headers: {
        'Authorization': window.localStorage.getItem('token') //api
      } 
  }
  )
    .then(res => res.json())
    .then(json => json.results)
};

export const login = (username, password) => {
  return fetch('/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })  //api
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password }) //api
  }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
    '/api/movies', {
      headers: {
        'Authorization': window.localStorage.getItem('token') //api
      }
  }
  ).then(res => res.json());
};


export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    //`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`  //api
    `/api/movies/tmdb/${id}`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    //`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`  
    `/api/movies/tmdb/${id}/reviews`, {
      headers: {
        'Authorization': window.localStorage.getItem('token') //api
      }
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};



export const getUpcomingMovies = () => {
  return fetch(
    //`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    '/api/movies/tmdb/upcoming', {
      headers: {
        'Authorization': window.localStorage.getItem('token')  //api
      } 
  }
  )
    .then(res => res.json())
    .then(json => json.results);
};



export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +process.env.REACT_APP_TMDB_KEY + "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

