let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  genreList: [],
  loading: true,
};

// reducer는 함수!
function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_MOVIE_REQUEST':
      return { ...state, loading: true };

    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
      };

    case 'GET_MOVIE_FAIL':
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default movieReducer;
