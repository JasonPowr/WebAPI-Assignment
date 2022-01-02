import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import TopRatedMoviePage from "./pages/topRated";
import NowPlayingMoviePage from "./pages/nowPlaying"
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from "./pages/loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import SignUpPage from "./pages/signUpPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
          <AuthHeader />
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <PrivateRoute path="/movies/nowplaying" component={NowPlayingMoviePage} />
            <PrivateRoute path="/movies/toprated" component={TopRatedMoviePage} />
            <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
            <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
            <PrivateRoute path="/movies/upcoming" component={UpcomingMoviesPage} />
            <PrivateRoute path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute path="/movies/:id" component={MoviePage} />
            <PrivateRoute exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
        </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));