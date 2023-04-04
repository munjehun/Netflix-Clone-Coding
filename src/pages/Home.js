import React, { useEffect } from 'react';
import { movieActions } from '../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from 'react-spinners/ClipLoader';

function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  // ⚠️useEffect는 렌더 후 호출되므로 주의!
  useEffect(() => {
    dispatch(movieActions.getMovies());
  }, []);

  return !loading ? (
    <div>
      <Banner popularMovie={popularMovies.results[0]} />
      <h1>Popular Movies</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movies</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movies</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  ) : (
    <ClipLoader
      className="loding-spinner"
      color="lightgrey"
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Home;
