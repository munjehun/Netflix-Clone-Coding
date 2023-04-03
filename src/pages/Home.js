import React, { useEffect } from 'react';
import { movieActions } from '../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';

function Home() {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  // ⚠️useEffect는 렌더 후 호출되므로 주의!
  useEffect(() => {
    dispatch(movieActions.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && (
        <Banner popularMovie={popularMovies.results[0]} />
      )}
    </div>
  );
}

export default Home;
