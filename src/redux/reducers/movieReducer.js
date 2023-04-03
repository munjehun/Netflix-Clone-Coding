let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};

// reducer는 함수!
function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
