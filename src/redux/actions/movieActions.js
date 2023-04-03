import api from '../api';

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedMovieApi = api.get(
      `/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upcomingMovieApi = api.get(
      `/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upcomingMovieApi,
    ]);

    dispatch({
      type: 'GET_MOVIE_SUCCESS',
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upcomingMovies: upcomingMovies.data,
      },
    });
  };
}

export const movieActions = { getMovies };
